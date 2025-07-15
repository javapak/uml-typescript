/**
 * Interface for MessageEnd
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { IGate } from './IGate';
import { IMessage } from './IMessage';
import { IMessageOccurrenceSpecification } from './IMessageOccurrenceSpecification';
import { INamedElement } from './INamedElement';

export interface IMessageEnd extends INamedElement {
  /**
   * message
   * 
   * @type Message
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  message?: string;
}

// Type aliases for MessageEnd
export type MessageEndInput = Partial<IMessageEnd>;
export type MessageEndOutput = IMessageEnd;
export type MessageEndUnion = IMessageEnd | IGate | IMessageOccurrenceSpecification;
