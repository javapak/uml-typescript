import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { IInvocationAction } from './IInvocationAction';
import { IPort } from './IPort';
import { InvocationAction } from './InvocationAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InvocationAction
 */
export type PartialInvocationAction = Partial<IInvocationAction>;
export type RequiredInvocationAction = Required<IInvocationAction>;
export type InvocationActionUnion = IInvocationAction | IAction;
export type InvocationActionFactory = () => InvocationAction;
export type InvocationActionValidator = (instance: IInvocationAction) => ValidationResult;
