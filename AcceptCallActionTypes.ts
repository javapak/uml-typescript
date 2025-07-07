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
export type AcceptCallActionKey = Pick<IAcceptCallAction, 'name' | 'nameExpression'>;
export type AcceptCallActionMetadata = Pick<IAcceptCallAction, 'ownedComment' | 'visibility'>;
export type AcceptCallActionSummary = Pick<IAcceptCallAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type AcceptCallActionUnion = IAcceptCallAction | IAcceptEventAction;
export type AcceptCallActionFactory = () => AcceptCallAction;
export type AcceptCallActionValidator = (instance: IAcceptCallAction) => ValidationResult;
