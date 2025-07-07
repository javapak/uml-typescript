import { AnyReceiveEvent } from './AnyReceiveEvent';
import { IAnyReceiveEvent } from './IAnyReceiveEvent';
import { IMessageEvent } from './IMessageEvent';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for AnyReceiveEvent
 */
export type PartialAnyReceiveEvent = Partial<IAnyReceiveEvent>;
export type RequiredAnyReceiveEvent = Required<IAnyReceiveEvent>;
export type AnyReceiveEventKey = Pick<IAnyReceiveEvent, 'name' | 'nameExpression'>;
export type AnyReceiveEventMetadata = Pick<IAnyReceiveEvent, 'ownedComment' | 'visibility'>;
export type AnyReceiveEventSummary = Pick<IAnyReceiveEvent, 'eAnnotations' | 'ownedComment' | 'name'>;
export type AnyReceiveEventUnion = IAnyReceiveEvent | IMessageEvent;
export type AnyReceiveEventFactory = () => AnyReceiveEvent;
export type AnyReceiveEventValidator = (instance: IAnyReceiveEvent) => ValidationResult;
