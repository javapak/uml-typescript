import { IInputPin } from './IInputPin';
import { IInvocationAction } from './IInvocationAction';
import { ISendSignalAction } from './ISendSignalAction';
import { ISignal } from './ISignal';
import { SendSignalAction } from './SendSignalAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for SendSignalAction
 */
export type PartialSendSignalAction = Partial<ISendSignalAction>;
export type RequiredSendSignalAction = Required<ISendSignalAction>;
export type SendSignalActionKey = Pick<ISendSignalAction, 'name' | 'nameExpression'>;
export type SendSignalActionMetadata = Pick<ISendSignalAction, 'ownedComment' | 'visibility'>;
export type SendSignalActionSummary = Pick<ISendSignalAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type SendSignalActionUnion = ISendSignalAction | IInvocationAction;
export type SendSignalActionFactory = () => SendSignalAction;
export type SendSignalActionValidator = (instance: ISendSignalAction) => ValidationResult;
