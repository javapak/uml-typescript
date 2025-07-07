import { IControlNode } from './IControlNode';
import { IJoinNode } from './IJoinNode';
import { IValueSpecification } from './IValueSpecification';
import { JoinNode } from './JoinNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for JoinNode
 */
export type PartialJoinNode = Partial<IJoinNode>;
export type RequiredJoinNode = Required<IJoinNode>;
export type JoinNodeKey = Pick<IJoinNode, 'name' | 'nameExpression'>;
export type JoinNodeMetadata = Pick<IJoinNode, 'ownedComment' | 'visibility'>;
export type JoinNodeSummary = Pick<IJoinNode, 'eAnnotations' | 'ownedComment' | 'name'>;
export type JoinNodeUnion = IJoinNode | IControlNode;
export type JoinNodeFactory = () => JoinNode;
export type JoinNodeValidator = (instance: IJoinNode) => ValidationResult;
