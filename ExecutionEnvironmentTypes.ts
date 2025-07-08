import { ExecutionEnvironment } from './ExecutionEnvironment';
import { IExecutionEnvironment } from './IExecutionEnvironment';
import { INode } from './INode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ExecutionEnvironment
 */
export type PartialExecutionEnvironment = Partial<IExecutionEnvironment>;
export type RequiredExecutionEnvironment = Required<IExecutionEnvironment>;
export type ExecutionEnvironmentUnion = IExecutionEnvironment | INode;
export type ExecutionEnvironmentFactory = () => ExecutionEnvironment;
export type ExecutionEnvironmentValidator = (instance: IExecutionEnvironment) => ValidationResult;
