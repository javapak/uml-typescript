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
export type SignalEventKey = Pick<ISignalEvent, 'name' | 'nameExpression'>;
export type SignalEventMetadata = Pick<ISignalEvent, 'ownedComment' | 'visibility'>;
export type SignalEventSummary = Pick<ISignalEvent, 'eAnnotations' | 'ownedComment' | 'name'>;
export type SignalEventUnion = ISignalEvent | IMessageEvent;
export type SignalEventFactory = () => SignalEvent;
export type SignalEventValidator = (instance: ISignalEvent) => ValidationResult;
