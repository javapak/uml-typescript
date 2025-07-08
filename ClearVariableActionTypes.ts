import { ClearVariableAction } from './ClearVariableAction';
import { IClearVariableAction } from './IClearVariableAction';
import { IVariableAction } from './IVariableAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ClearVariableAction
 */
export type PartialClearVariableAction = Partial<IClearVariableAction>;
export type RequiredClearVariableAction = Required<IClearVariableAction>;
export type ClearVariableActionUnion = IClearVariableAction | IVariableAction;
export type ClearVariableActionFactory = () => ClearVariableAction;
export type ClearVariableActionValidator = (instance: IClearVariableAction) => ValidationResult;
