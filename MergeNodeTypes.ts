import { IControlNode } from './IControlNode';
import { IMergeNode } from './IMergeNode';
import { MergeNode } from './MergeNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for MergeNode
 */
export type PartialMergeNode = Partial<IMergeNode>;
export type RequiredMergeNode = Required<IMergeNode>;
export type MergeNodeUnion = IMergeNode | IControlNode;
export type MergeNodeFactory = () => MergeNode;
export type MergeNodeValidator = (instance: IMergeNode) => ValidationResult;
