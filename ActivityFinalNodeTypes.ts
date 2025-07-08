import { ActivityFinalNode } from './ActivityFinalNode';
import { IActivityFinalNode } from './IActivityFinalNode';
import { IFinalNode } from './IFinalNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ActivityFinalNode
 */
export type PartialActivityFinalNode = Partial<IActivityFinalNode>;
export type RequiredActivityFinalNode = Required<IActivityFinalNode>;
export type ActivityFinalNodeUnion = IActivityFinalNode | IFinalNode;
export type ActivityFinalNodeFactory = () => ActivityFinalNode;
export type ActivityFinalNodeValidator = (instance: IActivityFinalNode) => ValidationResult;
