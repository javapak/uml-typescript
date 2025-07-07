/**
 * Interface for AnyReceiveEvent
 * 
 * @since UML 2.5
 * @package uml
 * @extends MessageEvent
 */
import { IMessageEvent } from './IMessageEvent';

export interface IAnyReceiveEvent extends IMessageEvent {
}

// Type aliases for AnyReceiveEvent
export type AnyReceiveEventInput = Partial<IAnyReceiveEvent>;
export type AnyReceiveEventOutput = IAnyReceiveEvent;
