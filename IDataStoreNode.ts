/**
 * Interface for DataStoreNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends CentralBufferNode
 */
import { ICentralBufferNode } from './ICentralBufferNode';

export interface IDataStoreNode extends ICentralBufferNode {
}

// Type aliases for DataStoreNode
export type DataStoreNodeInput = Partial<IDataStoreNode>;
export type DataStoreNodeOutput = IDataStoreNode;
