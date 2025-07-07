import { CentralBufferNode } from './CentralBufferNode';
import { ICentralBufferNode } from './ICentralBufferNode';
import { IObjectNode } from './IObjectNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for CentralBufferNode
 */
export type PartialCentralBufferNode = Partial<ICentralBufferNode>;
export type RequiredCentralBufferNode = Required<ICentralBufferNode>;
export type CentralBufferNodeKey = Pick<ICentralBufferNode, 'name' | 'nameExpression'>;
export type CentralBufferNodeMetadata = Pick<ICentralBufferNode, 'ownedComment' | 'visibility'>;
export type CentralBufferNodeSummary = Pick<ICentralBufferNode, 'eAnnotations' | 'ownedComment' | 'name'>;
export type CentralBufferNodeUnion = ICentralBufferNode | IObjectNode;
export type CentralBufferNodeFactory = () => CentralBufferNode;
export type CentralBufferNodeValidator = (instance: ICentralBufferNode) => ValidationResult;
