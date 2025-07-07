import { CallOperationAction } from './CallOperationAction';
import { ICallAction } from './ICallAction';
import { ICallOperationAction } from './ICallOperationAction';
import { IInputPin } from './IInputPin';
import { IOperation } from './IOperation';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for CallOperationAction
 */
export type PartialCallOperationAction = Partial<ICallOperationAction>;
export type RequiredCallOperationAction = Required<ICallOperationAction>;
export type CallOperationActionKey = Pick<ICallOperationAction, 'name' | 'nameExpression'>;
export type CallOperationActionMetadata = Pick<ICallOperationAction, 'ownedComment' | 'visibility'>;
export type CallOperationActionSummary = Pick<ICallOperationAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type CallOperationActionUnion = ICallOperationAction | ICallAction;
export type CallOperationActionFactory = () => CallOperationAction;
export type CallOperationActionValidator = (instance: ICallOperationAction) => ValidationResult;
