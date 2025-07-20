import { ActivityNode } from './ActivityNode';
import { IActivityContent } from './IActivityContent';
import { IActivityEdge } from './IActivityEdge';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { IRedefinableElement } from './IRedefinableElement';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ActivityNode
 */
export type PartialActivityNode = Partial<IActivityNode>;
export type RequiredActivityNode = Required<IActivityNode>;
export type ActivityNodeUnion = IActivityNode | IRedefinableElement | IActivityContent;
export type ActivityNodeFactory = () => ActivityNode;
export type ActivityNodeValidator = (instance: IActivityNode) => ValidationResult;
