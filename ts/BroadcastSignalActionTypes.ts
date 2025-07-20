import { BroadcastSignalAction } from './BroadcastSignalAction';
import { IBroadcastSignalAction } from './IBroadcastSignalAction';
import { IInvocationAction } from './IInvocationAction';
import { ISignal } from './ISignal';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for BroadcastSignalAction
 */
export type PartialBroadcastSignalAction = Partial<IBroadcastSignalAction>;
export type RequiredBroadcastSignalAction = Required<IBroadcastSignalAction>;
export type BroadcastSignalActionUnion = IBroadcastSignalAction | IInvocationAction;
export type BroadcastSignalActionFactory = () => BroadcastSignalAction;
export type BroadcastSignalActionValidator = (instance: IBroadcastSignalAction) => ValidationResult;
