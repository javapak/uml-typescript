import { CallEvent } from './CallEvent';
import { ICallEvent } from './ICallEvent';
import { IMessageEvent } from './IMessageEvent';
import { IOperation } from './IOperation';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for CallEvent
 */
export type PartialCallEvent = Partial<ICallEvent>;
export type RequiredCallEvent = Required<ICallEvent>;
export type CallEventKey = Pick<ICallEvent, 'name' | 'nameExpression'>;
export type CallEventMetadata = Pick<ICallEvent, 'ownedComment' | 'visibility'>;
export type CallEventSummary = Pick<ICallEvent, 'eAnnotations' | 'ownedComment' | 'name'>;
export type CallEventUnion = ICallEvent | IMessageEvent;
export type CallEventFactory = () => CallEvent;
export type CallEventValidator = (instance: ICallEvent) => ValidationResult;
