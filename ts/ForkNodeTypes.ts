import { ForkNode } from './ForkNode';
import { IControlNode } from './IControlNode';
import { IForkNode } from './IForkNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ForkNode
 */
export type PartialForkNode = Partial<IForkNode>;
export type RequiredForkNode = Required<IForkNode>;
export type ForkNodeUnion = IForkNode | IControlNode;
export type ForkNodeFactory = () => ForkNode;
export type ForkNodeValidator = (instance: IForkNode) => ValidationResult;
