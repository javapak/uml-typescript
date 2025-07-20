import { IMessage } from './IMessage';
import { IMessageEnd } from './IMessageEnd';
import { INamedElement } from './INamedElement';
import { MessageEnd } from './MessageEnd';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for MessageEnd
 */
export type PartialMessageEnd = Partial<IMessageEnd>;
export type RequiredMessageEnd = Required<IMessageEnd>;
export type MessageEndUnion = IMessageEnd | INamedElement;
export type MessageEndFactory = () => MessageEnd;
export type MessageEndValidator = (instance: IMessageEnd) => ValidationResult;
