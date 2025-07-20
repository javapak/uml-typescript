import { ICallAction } from './ICallAction';
import { IInputPin } from './IInputPin';
import { IStartObjectBehaviorAction } from './IStartObjectBehaviorAction';
import { StartObjectBehaviorAction } from './StartObjectBehaviorAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for StartObjectBehaviorAction
 */
export type PartialStartObjectBehaviorAction = Partial<IStartObjectBehaviorAction>;
export type RequiredStartObjectBehaviorAction = Required<IStartObjectBehaviorAction>;
export type StartObjectBehaviorActionUnion = IStartObjectBehaviorAction | ICallAction;
export type StartObjectBehaviorActionFactory = () => StartObjectBehaviorAction;
export type StartObjectBehaviorActionValidator = (instance: IStartObjectBehaviorAction) => ValidationResult;
