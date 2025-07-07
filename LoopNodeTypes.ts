import { IExecutableNode } from './IExecutableNode';
import { IInputPin } from './IInputPin';
import { ILoopNode } from './ILoopNode';
import { IOutputPin } from './IOutputPin';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { LoopNode } from './LoopNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for LoopNode
 */
export type PartialLoopNode = Partial<ILoopNode>;
export type RequiredLoopNode = Required<ILoopNode>;
export type LoopNodeKey = Pick<ILoopNode, 'name' | 'nameExpression' | 'decider'>;
export type LoopNodeMetadata = Pick<ILoopNode, 'ownedComment' | 'visibility' | 'ownedRule'>;
export type LoopNodeSummary = Pick<ILoopNode, 'eAnnotations' | 'ownedComment' | 'name'>;
export type LoopNodeUnion = ILoopNode | IStructuredActivityNode;
export type LoopNodeFactory = () => LoopNode;
export type LoopNodeValidator = (instance: ILoopNode) => ValidationResult;
