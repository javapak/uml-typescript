import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { IStartClassifierBehaviorAction } from './IStartClassifierBehaviorAction';
import { StartClassifierBehaviorAction } from './StartClassifierBehaviorAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for StartClassifierBehaviorAction
 */
export type PartialStartClassifierBehaviorAction = Partial<IStartClassifierBehaviorAction>;
export type RequiredStartClassifierBehaviorAction = Required<IStartClassifierBehaviorAction>;
export type StartClassifierBehaviorActionUnion = IStartClassifierBehaviorAction | IAction;
export type StartClassifierBehaviorActionFactory = () => StartClassifierBehaviorAction;
export type StartClassifierBehaviorActionValidator = (instance: IStartClassifierBehaviorAction) => ValidationResult;
