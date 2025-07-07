import { CallAction } from './CallAction';
import { ICallAction } from './ICallAction';
import { IInvocationAction } from './IInvocationAction';
import { IOutputPin } from './IOutputPin';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for CallAction
 */
export type PartialCallAction = Partial<ICallAction>;
export type RequiredCallAction = Required<ICallAction>;
export type CallActionKey = Pick<ICallAction, 'name' | 'nameExpression'>;
export type CallActionMetadata = Pick<ICallAction, 'ownedComment' | 'visibility'>;
export type CallActionSummary = Pick<ICallAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type CallActionUnion = ICallAction | IInvocationAction;
export type CallActionFactory = () => CallAction;
export type CallActionValidator = (instance: ICallAction) => ValidationResult;
