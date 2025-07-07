import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { IRaiseExceptionAction } from './IRaiseExceptionAction';
import { RaiseExceptionAction } from './RaiseExceptionAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for RaiseExceptionAction
 */
export type PartialRaiseExceptionAction = Partial<IRaiseExceptionAction>;
export type RequiredRaiseExceptionAction = Required<IRaiseExceptionAction>;
export type RaiseExceptionActionKey = Pick<IRaiseExceptionAction, 'name' | 'nameExpression'>;
export type RaiseExceptionActionMetadata = Pick<IRaiseExceptionAction, 'ownedComment' | 'visibility'>;
export type RaiseExceptionActionSummary = Pick<IRaiseExceptionAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type RaiseExceptionActionUnion = IRaiseExceptionAction | IAction;
export type RaiseExceptionActionFactory = () => RaiseExceptionAction;
export type RaiseExceptionActionValidator = (instance: IRaiseExceptionAction) => ValidationResult;
