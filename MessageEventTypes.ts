import { IEvent } from './IEvent';
import { IMessageEvent } from './IMessageEvent';
import { MessageEvent } from './MessageEvent';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for MessageEvent
 */
export type PartialMessageEvent = Partial<IMessageEvent>;
export type RequiredMessageEvent = Required<IMessageEvent>;
export type MessageEventKey = Pick<IMessageEvent, 'name' | 'nameExpression'>;
export type MessageEventMetadata = Pick<IMessageEvent, 'ownedComment' | 'visibility'>;
export type MessageEventSummary = Pick<IMessageEvent, 'eAnnotations' | 'ownedComment' | 'name'>;
export type MessageEventUnion = IMessageEvent | IEvent;
export type MessageEventFactory = () => MessageEvent;
export type MessageEventValidator = (instance: IMessageEvent) => ValidationResult;
