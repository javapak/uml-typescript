import { IControlNode } from './IControlNode';
import { IInitialNode } from './IInitialNode';
import { InitialNode } from './InitialNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InitialNode
 */
export type PartialInitialNode = Partial<IInitialNode>;
export type RequiredInitialNode = Required<IInitialNode>;
export type InitialNodeKey = Pick<IInitialNode, 'name' | 'nameExpression'>;
export type InitialNodeMetadata = Pick<IInitialNode, 'ownedComment' | 'visibility'>;
export type InitialNodeSummary = Pick<IInitialNode, 'eAnnotations' | 'ownedComment' | 'name'>;
export type InitialNodeUnion = IInitialNode | IControlNode;
export type InitialNodeFactory = () => InitialNode;
export type InitialNodeValidator = (instance: IInitialNode) => ValidationResult;
