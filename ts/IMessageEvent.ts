/**
 * Interface for MessageEvent
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Event
 */
import { IAnyReceiveEvent } from './IAnyReceiveEvent';
import { ICallEvent } from './ICallEvent';
import { IEvent } from './IEvent';
import { ISignalEvent } from './ISignalEvent';

export interface IMessageEvent extends IEvent {
}

// Type aliases for MessageEvent
export type MessageEventInput = Partial<IMessageEvent>;
export type MessageEventOutput = IMessageEvent;
export type MessageEventUnion = IMessageEvent | IAnyReceiveEvent | ICallEvent | ISignalEvent;
