import { ActivityFinalNode } from './ActivityFinalNode';
import { IActivityFinalNode } from './IActivityFinalNode';
import { IFinalNode } from './IFinalNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ActivityFinalNode
 */
export type PartialActivityFinalNode = Partial<IActivityFinalNode>;
export type RequiredActivityFinalNode = Required<IActivityFinalNode>;
export type ActivityFinalNodeKey = Pick<IActivityFinalNode, 'name' | 'nameExpression'>;
export type ActivityFinalNodeMetadata = Pick<IActivityFinalNode, 'ownedComment' | 'visibility'>;
export type ActivityFinalNodeSummary = Pick<IActivityFinalNode, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ActivityFinalNodeUnion = IActivityFinalNode | IFinalNode;
export type ActivityFinalNodeFactory = () => ActivityFinalNode;
export type ActivityFinalNodeValidator = (instance: IActivityFinalNode) => ValidationResult;
