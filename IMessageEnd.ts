/**
 * Interface for MessageEnd
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { IMessage } from './IMessage';
import { INamedElement } from './INamedElement';

export interface IMessageEnd extends INamedElement {
  /**
   * message
   * 
   * @type Message
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  message?: IMessage | string;
}

// Type aliases for MessageEnd
export type MessageEndInput = Partial<IMessageEnd>;
export type MessageEndOutput = IMessageEnd;
export type MessageEndUnion = IMessageEnd | IGate | IMessageOccurrenceSpecification;
