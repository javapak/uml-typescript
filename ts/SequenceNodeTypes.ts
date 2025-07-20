import { IExecutableNode } from './IExecutableNode';
import { ISequenceNode } from './ISequenceNode';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { SequenceNode } from './SequenceNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for SequenceNode
 */
export type PartialSequenceNode = Partial<ISequenceNode>;
export type RequiredSequenceNode = Required<ISequenceNode>;
export type SequenceNodeUnion = ISequenceNode | IStructuredActivityNode;
export type SequenceNodeFactory = () => SequenceNode;
export type SequenceNodeValidator = (instance: ISequenceNode) => ValidationResult;
