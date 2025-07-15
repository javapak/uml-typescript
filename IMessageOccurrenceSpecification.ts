/**
 * Interface for MessageOccurrenceSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @extends OccurrenceSpecification, MessageEnd
 */
import { IDestructionOccurrenceSpecification } from './IDestructionOccurrenceSpecification';
import { IMessageEnd } from './IMessageEnd';
import { IOccurrenceSpecification } from './IOccurrenceSpecification';

export interface IMessageOccurrenceSpecification extends IOccurrenceSpecification, IMessageEnd {
}

// Type aliases for MessageOccurrenceSpecification
export type MessageOccurrenceSpecificationInput = Partial<IMessageOccurrenceSpecification>;
export type MessageOccurrenceSpecificationOutput = IMessageOccurrenceSpecification;
export type MessageOccurrenceSpecificationUnion = IMessageOccurrenceSpecification | IDestructionOccurrenceSpecification;
