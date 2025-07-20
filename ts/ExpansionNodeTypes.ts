import { ExpansionNode } from './ExpansionNode';
import { IExpansionNode } from './IExpansionNode';
import { IExpansionRegion } from './IExpansionRegion';
import { IObjectNode } from './IObjectNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ExpansionNode
 */
export type PartialExpansionNode = Partial<IExpansionNode>;
export type RequiredExpansionNode = Required<IExpansionNode>;
export type ExpansionNodeUnion = IExpansionNode | IObjectNode;
export type ExpansionNodeFactory = () => ExpansionNode;
export type ExpansionNodeValidator = (instance: IExpansionNode) => ValidationResult;
