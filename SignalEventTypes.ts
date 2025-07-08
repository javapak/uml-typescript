import { IMessageEvent } from './IMessageEvent';
import { ISignal } from './ISignal';
import { ISignalEvent } from './ISignalEvent';
import { SignalEvent } from './SignalEvent';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for SignalEvent
 */
export type PartialSignalEvent = Partial<ISignalEvent>;
export type RequiredSignalEvent = Required<ISignalEvent>;
export type SignalEventUnion = ISignalEvent | IMessageEvent;
export type SignalEventFactory = () => SignalEvent;
export type SignalEventValidator = (instance: ISignalEvent) => ValidationResult;
