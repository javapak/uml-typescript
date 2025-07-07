/**
 * Interface for DestructionOccurrenceSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @extends MessageOccurrenceSpecification
 */
import { IMessageOccurrenceSpecification } from './IMessageOccurrenceSpecification';

export interface IDestructionOccurrenceSpecification extends IMessageOccurrenceSpecification {
}

// Type aliases for DestructionOccurrenceSpecification
export type DestructionOccurrenceSpecificationInput = Partial<IDestructionOccurrenceSpecification>;
export type DestructionOccurrenceSpecificationOutput = IDestructionOccurrenceSpecification;
