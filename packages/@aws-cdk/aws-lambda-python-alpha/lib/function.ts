import * as fs from 'fs';
import * as path from 'path';
import { Function, FunctionOptions, Runtime, RuntimeFamily } from 'aws-cdk-lib/aws-lambda';
import { Stack } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { Bundling } from './bundling';
import { BundlingOptions } from './types';
import { addConstructMetadata } from 'aws-cdk-lib/core/lib/metadata-resource';
import { propertyInjectable } from 'aws-cdk-lib/core/lib/prop-injectable';

/**
 * Properties for a PythonFunction
 */
export interface PythonFunctionProps extends FunctionOptions {
  /**
   * Path to the source of the function or the location for dependencies.
   */
  readonly entry: string;

  /**
   * The runtime environment. Only runtimes of the Python family are
   * supported.
   */
  readonly runtime: Runtime;

  /**
   * The path (relative to entry) to the index file containing the exported handler.
   *
   * @default index.py
   */
  readonly index?: string;

  /**
   * The name of the exported handler in the index file.
   *
   * @default handler
   */
  readonly handler?: string;

  /**
   * Bundling options to use for this function. Use this to specify custom bundling options like
   * the bundling Docker image, asset hash type, custom hash, architecture, etc.
   *
   * @default - Use the default bundling Docker image, with x86_64 architecture.
   */
  readonly bundling?: BundlingOptions;
}

/**
 * A Python Lambda function
 */
@propertyInjectable
export class PythonFunction extends Function {
  /** Uniquely identifies this class. */
  public static readonly PROPERTY_INJECTION_ID: string = '@aws-cdk.aws-lambda-python-alpha.PythonFunction';

  constructor(scope: Construct, id: string, props: PythonFunctionProps) {
    const { index = 'index.py', handler = 'handler', runtime } = props;
    if (props.index && !/\.py$/.test(props.index)) {
      throw new Error('Only Python (.py) index files are supported.');
    }

    // Entry
    const entry = path.resolve(props.entry);
    const resolvedIndex = path.resolve(entry, index);
    if (!fs.existsSync(resolvedIndex)) {
      throw new Error(`Cannot find index file at ${resolvedIndex}`);
    }

    const resolvedHandler = `${index.slice(0, -3)}.${handler}`.replace(/\//g, '.');

    if (props.runtime && props.runtime.family !== RuntimeFamily.PYTHON) {
      throw new Error('Only `PYTHON` runtimes are supported.');
    }

    super(scope, id, {
      ...props,
      runtime,
      code: Bundling.bundle({
        entry,
        runtime,
        skip: !Stack.of(scope).bundlingRequired,
        // define architecture based on the target architecture of the function, possibly overridden in bundling options
        architecture: props.architecture,
        ...props.bundling,
      }),
      handler: resolvedHandler,
    });

    // Enhanced CDK Analytics Telemetry
    addConstructMetadata(this, props);
  }
}
