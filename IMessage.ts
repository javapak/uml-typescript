/**
 * Interface for Message
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement
 */
import { IConnector } from './IConnector';
import { IInteraction } from './IInteraction';
import { IMessageEnd } from './IMessageEnd';
import { INamedElement } from './INamedElement';
import { IValueSpecification } from './IValueSpecification';
import { MessageSort } from './MessageSort';
import { ValueSpecification } from './ValueSpecification';

export interface IMessage extends INamedElement {
  /**
   * argument
   * 
   * @type ValueSpecification
   * @multiplicity [0..*]
   * @relationship containment
   */
  argument?: IValueSpecification[];
  /**
   * connector
   * 
   * @type Connector
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  connector?: string;
  /**
   * interaction
   * 
   * @type Interaction
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite message
   */
  interaction: string;
  /**
   * messageSort
   * 
   * @type MessageSort
   * @multiplicity [1..1]
   */
  messageSort: MessageSort;
  /**
   * receiveEvent
   * 
   * @type MessageEnd
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  receiveEvent?: string;
  /**
   * sendEvent
   * 
   * @type MessageEnd
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  sendEvent?: string;
  /**
   * signature
   * 
   * @type NamedElement
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  signature?: string;
}

// Type aliases for Message
export type MessageInput = Partial<IMessage>;
export type MessageOutput = IMessage;
