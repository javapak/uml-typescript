import { IInputPin } from './IInputPin';
import { IRemoveVariableValueAction } from './IRemoveVariableValueAction';
import { IWriteVariableAction } from './IWriteVariableAction';
import { RemoveVariableValueAction } from './RemoveVariableValueAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for RemoveVariableValueAction
 */
export type PartialRemoveVariableValueAction = Partial<IRemoveVariableValueAction>;
export type RequiredRemoveVariableValueAction = Required<IRemoveVariableValueAction>;
export type RemoveVariableValueActionKey = Pick<IRemoveVariableValueAction, 'name' | 'nameExpression'>;
export type RemoveVariableValueActionMetadata = Pick<IRemoveVariableValueAction, 'ownedComment' | 'visibility'>;
export type RemoveVariableValueActionSummary = Pick<IRemoveVariableValueAction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type RemoveVariableValueActionUnion = IRemoveVariableValueAction | IWriteVariableAction;
export type RemoveVariableValueActionFactory = () => RemoveVariableValueAction;
export type RemoveVariableValueActionValidator = (instance: IRemoveVariableValueAction) => ValidationResult;
