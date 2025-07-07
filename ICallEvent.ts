/**
 * Interface for CallEvent
 * 
 * @since UML 2.5
 * @package uml
 * @extends MessageEvent
 */
import { IMessageEvent } from './IMessageEvent';
import { IOperation } from './IOperation';

export interface ICallEvent extends IMessageEvent {
  /**
   * operation
   * 
   * @type Operation
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  operation: IOperation | string;
}

// Type aliases for CallEvent
export type CallEventInput = Partial<ICallEvent>;
export type CallEventOutput = ICallEvent;
