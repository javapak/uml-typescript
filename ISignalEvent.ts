/**
 * Interface for SignalEvent
 * 
 * @since UML 2.5
 * @package uml
 * @extends MessageEvent
 */
import { IMessageEvent } from './IMessageEvent';
import { ISignal } from './ISignal';

export interface ISignalEvent extends IMessageEvent {
  /**
   * signal
   * 
   * @type Signal
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  signal: string;
}

// Type aliases for SignalEvent
export type SignalEventInput = Partial<ISignalEvent>;
export type SignalEventOutput = ISignalEvent;
