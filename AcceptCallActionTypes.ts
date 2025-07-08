import { AcceptCallAction } from './AcceptCallAction';
import { IAcceptCallAction } from './IAcceptCallAction';
import { IAcceptEventAction } from './IAcceptEventAction';
import { IOutputPin } from './IOutputPin';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for AcceptCallAction
 */
export type PartialAcceptCallAction = Partial<IAcceptCallAction>;
export type RequiredAcceptCallAction = Required<IAcceptCallAction>;
export type AcceptCallActionUnion = IAcceptCallAction | IAcceptEventAction;
export type AcceptCallActionFactory = () => AcceptCallAction;
export type AcceptCallActionValidator = (instance: IAcceptCallAction) => ValidationResult;
