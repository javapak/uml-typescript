import { AcceptEventAction } from './AcceptEventAction';
import { IAcceptEventAction } from './IAcceptEventAction';
import { IAction } from './IAction';
import { IOutputPin } from './IOutputPin';
import { ITrigger } from './ITrigger';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for AcceptEventAction
 */
export type PartialAcceptEventAction = Partial<IAcceptEventAction>;
export type RequiredAcceptEventAction = Required<IAcceptEventAction>;
export type AcceptEventActionUnion = IAcceptEventAction | IAction;
export type AcceptEventActionFactory = () => AcceptEventAction;
export type AcceptEventActionValidator = (instance: IAcceptEventAction) => ValidationResult;
