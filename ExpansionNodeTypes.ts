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
export type ExpansionNodeKey = Pick<IExpansionNode, 'name' | 'nameExpression'>;
export type ExpansionNodeMetadata = Pick<IExpansionNode, 'ownedComment' | 'visibility'>;
export type ExpansionNodeSummary = Pick<IExpansionNode, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ExpansionNodeUnion = IExpansionNode | IObjectNode;
export type ExpansionNodeFactory = () => ExpansionNode;
export type ExpansionNodeValidator = (instance: IExpansionNode) => ValidationResult;
