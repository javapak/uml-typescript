import { DataStoreNode } from './DataStoreNode';
import { ICentralBufferNode } from './ICentralBufferNode';
import { IDataStoreNode } from './IDataStoreNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for DataStoreNode
 */
export type PartialDataStoreNode = Partial<IDataStoreNode>;
export type RequiredDataStoreNode = Required<IDataStoreNode>;
export type DataStoreNodeKey = Pick<IDataStoreNode, 'name' | 'nameExpression'>;
export type DataStoreNodeMetadata = Pick<IDataStoreNode, 'ownedComment' | 'visibility'>;
export type DataStoreNodeSummary = Pick<IDataStoreNode, 'eAnnotations' | 'ownedComment' | 'name'>;
export type DataStoreNodeUnion = IDataStoreNode | ICentralBufferNode;
export type DataStoreNodeFactory = () => DataStoreNode;
export type DataStoreNodeValidator = (instance: IDataStoreNode) => ValidationResult;
