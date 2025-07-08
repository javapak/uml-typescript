import { IInputPin } from './IInputPin';
import { IInvocationAction } from './IInvocationAction';
import { ISendObjectAction } from './ISendObjectAction';
import { SendObjectAction } from './SendObjectAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for SendObjectAction
 */
export type PartialSendObjectAction = Partial<ISendObjectAction>;
export type RequiredSendObjectAction = Required<ISendObjectAction>;
export type SendObjectActionUnion = ISendObjectAction | IInvocationAction;
export type SendObjectActionFactory = () => SendObjectAction;
export type SendObjectActionValidator = (instance: ISendObjectAction) => ValidationResult;
