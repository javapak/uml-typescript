/**
 * Interface for ActivityGroup
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement, ActivityContent
 */
import { IActivityContent } from './IActivityContent';
import { IActivityPartition } from './IActivityPartition';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { INamedElement } from './INamedElement';
import { IStructuredActivityNode } from './IStructuredActivityNode';

export interface IActivityGroup extends INamedElement, IActivityContent {
}

// Type aliases for ActivityGroup
export type ActivityGroupInput = Partial<IActivityGroup>;
export type ActivityGroupOutput = IActivityGroup;
export type ActivityGroupUnion = IActivityGroup | IActivityPartition | IInterruptibleActivityRegion | IStructuredActivityNode;
