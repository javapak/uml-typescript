import { IConnector } from './IConnector';
import { IInteraction } from './IInteraction';
import { IMessage } from './IMessage';
import { IMessageEnd } from './IMessageEnd';
import { INamedElement } from './INamedElement';
import { IValueSpecification } from './IValueSpecification';
import { Message } from './Message';
import { MessageSort } from './MessageSort';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Message
 */
export type PartialMessage = Partial<IMessage>;
export type RequiredMessage = Required<IMessage>;
export type MessageKey = Pick<IMessage, 'name' | 'nameExpression'>;
export type MessageMetadata = Pick<IMessage, 'ownedComment' | 'visibility'>;
export type MessageSummary = Pick<IMessage, 'eAnnotations' | 'ownedComment' | 'name'>;
export type MessageUnion = IMessage | INamedElement;
export type MessageFactory = () => Message;
export type MessageValidator = (instance: IMessage) => ValidationResult;
