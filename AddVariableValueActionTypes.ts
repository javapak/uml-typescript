import { AddVariableValueAction } from './AddVariableValueAction';
import { IAddVariableValueAction } from './IAddVariableValueAction';
import { IInputPin } from './IInputPin';
import { IWriteVariableAction } from './IWriteVariableAction';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for AddVariableValueAction
 */
export type PartialAddVariableValueAction = Partial<IAddVariableValueAction>;
export type RequiredAddVariableValueAction = Required<IAddVariableValueAction>;
export type AddVariableValueActionUnion = IAddVariableValueAction | IWriteVariableAction;
export type AddVariableValueActionFactory = () => AddVariableValueAction;
export type AddVariableValueActionValidator = (instance: IAddVariableValueAction) => ValidationResult;
