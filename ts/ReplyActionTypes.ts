import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { IReplyAction } from './IReplyAction';
import { ITrigger } from './ITrigger';
import { ReplyAction } from './ReplyAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ReplyAction
 */
export type PartialReplyAction = Partial<IReplyAction>;
export type RequiredReplyAction = Required<IReplyAction>;
export type ReplyActionUnion = IReplyAction | IAction;
export type ReplyActionFactory = () => ReplyAction;
export type ReplyActionValidator = (instance: IReplyAction) => ValidationResult;
