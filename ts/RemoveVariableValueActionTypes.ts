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
export type RemoveVariableValueActionUnion = IRemoveVariableValueAction | IWriteVariableAction;
export type RemoveVariableValueActionFactory = () => RemoveVariableValueAction;
export type RemoveVariableValueActionValidator = (instance: IRemoveVariableValueAction) => ValidationResult;
