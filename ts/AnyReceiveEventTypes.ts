import { AnyReceiveEvent } from './AnyReceiveEvent';
import { IAnyReceiveEvent } from './IAnyReceiveEvent';
import { IMessageEvent } from './IMessageEvent';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for AnyReceiveEvent
 */
export type PartialAnyReceiveEvent = Partial<IAnyReceiveEvent>;
export type RequiredAnyReceiveEvent = Required<IAnyReceiveEvent>;
export type AnyReceiveEventUnion = IAnyReceiveEvent | IMessageEvent;
export type AnyReceiveEventFactory = () => AnyReceiveEvent;
export type AnyReceiveEventValidator = (instance: IAnyReceiveEvent) => ValidationResult;
