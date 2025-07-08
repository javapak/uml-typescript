import { IControlNode } from './IControlNode';
import { IInitialNode } from './IInitialNode';
import { InitialNode } from './InitialNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InitialNode
 */
export type PartialInitialNode = Partial<IInitialNode>;
export type RequiredInitialNode = Required<IInitialNode>;
export type InitialNodeUnion = IInitialNode | IControlNode;
export type InitialNodeFactory = () => InitialNode;
export type InitialNodeValidator = (instance: IInitialNode) => ValidationResult;
