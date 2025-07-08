import { ExecutableNode } from './ExecutableNode';
import { IActivityNode } from './IActivityNode';
import { IExceptionHandler } from './IExceptionHandler';
import { IExecutableNode } from './IExecutableNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ExecutableNode
 */
export type PartialExecutableNode = Partial<IExecutableNode>;
export type RequiredExecutableNode = Required<IExecutableNode>;
export type ExecutableNodeUnion = IExecutableNode | IActivityNode;
export type ExecutableNodeFactory = () => ExecutableNode;
export type ExecutableNodeValidator = (instance: IExecutableNode) => ValidationResult;
