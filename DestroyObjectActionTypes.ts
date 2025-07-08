import { DestroyObjectAction } from './DestroyObjectAction';
import { IAction } from './IAction';
import { IDestroyObjectAction } from './IDestroyObjectAction';
import { IInputPin } from './IInputPin';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for DestroyObjectAction
 */
export type PartialDestroyObjectAction = Partial<IDestroyObjectAction>;
export type RequiredDestroyObjectAction = Required<IDestroyObjectAction>;
export type DestroyObjectActionUnion = IDestroyObjectAction | IAction;
export type DestroyObjectActionFactory = () => DestroyObjectAction;
export type DestroyObjectActionValidator = (instance: IDestroyObjectAction) => ValidationResult;
