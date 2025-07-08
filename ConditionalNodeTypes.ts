import { ConditionalNode } from './ConditionalNode';
import { IClause } from './IClause';
import { IConditionalNode } from './IConditionalNode';
import { IOutputPin } from './IOutputPin';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ConditionalNode
 */
export type PartialConditionalNode = Partial<IConditionalNode>;
export type RequiredConditionalNode = Required<IConditionalNode>;
export type ConditionalNodeUnion = IConditionalNode | IStructuredActivityNode;
export type ConditionalNodeFactory = () => ConditionalNode;
export type ConditionalNodeValidator = (instance: IConditionalNode) => ValidationResult;
