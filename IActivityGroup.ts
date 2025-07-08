/**
 * Interface for ActivityGroup
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement, ActivityContent
 */
import { IActivityContent } from './IActivityContent';
import { INamedElement } from './INamedElement';

export interface IActivityGroup extends INamedElement, IActivityContent {
}

// Type aliases for ActivityGroup
export type ActivityGroupInput = Partial<IActivityGroup>;
export type ActivityGroupOutput = IActivityGroup;
export type ActivityGroupUnion = IActivityGroup | IActivityPartition | IInterruptibleActivityRegion | IStructuredActivityNode;
