import { CentralBufferNode } from './CentralBufferNode';
import { ICentralBufferNode } from './ICentralBufferNode';
import { IObjectNode } from './IObjectNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for CentralBufferNode
 */
export type PartialCentralBufferNode = Partial<ICentralBufferNode>;
export type RequiredCentralBufferNode = Required<ICentralBufferNode>;
export type CentralBufferNodeUnion = ICentralBufferNode | IObjectNode;
export type CentralBufferNodeFactory = () => CentralBufferNode;
export type CentralBufferNodeValidator = (instance: ICentralBufferNode) => ValidationResult;
