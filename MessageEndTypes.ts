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
export type MessageEndKey = Pick<IMessageEnd, 'name' | 'nameExpression'>;
export type MessageEndMetadata = Pick<IMessageEnd, 'ownedComment' | 'visibility'>;
export type MessageEndSummary = Pick<IMessageEnd, 'eAnnotations' | 'ownedComment' | 'name'>;
export type MessageEndUnion = IMessageEnd | INamedElement;
export type MessageEndFactory = () => MessageEnd;
export type MessageEndValidator = (instance: IMessageEnd) => ValidationResult;
