import { FinalNode } from './FinalNode';
import { IControlNode } from './IControlNode';
import { IFinalNode } from './IFinalNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for FinalNode
 */
export type PartialFinalNode = Partial<IFinalNode>;
export type RequiredFinalNode = Required<IFinalNode>;
export type FinalNodeUnion = IFinalNode | IControlNode;
export type FinalNodeFactory = () => FinalNode;
export type FinalNodeValidator = (instance: IFinalNode) => ValidationResult;
