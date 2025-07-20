/**
 * Interface for CentralBufferNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends ObjectNode
 */
import { IDataStoreNode } from './IDataStoreNode';
import { IObjectNode } from './IObjectNode';

export interface ICentralBufferNode extends IObjectNode {
}

// Type aliases for CentralBufferNode
export type CentralBufferNodeInput = Partial<ICentralBufferNode>;
export type CentralBufferNodeOutput = ICentralBufferNode;
export type CentralBufferNodeUnion = ICentralBufferNode | IDataStoreNode;
