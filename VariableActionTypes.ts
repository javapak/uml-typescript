import { IAction } from './IAction';
import { IVariable } from './IVariable';
import { IVariableAction } from './IVariableAction';
import { ValidationResult } from './ValidationTypes';
import { VariableAction } from './VariableAction';

/**
 * Utility types for VariableAction
 */
export type PartialVariableAction = Partial<IVariableAction>;
export type RequiredVariableAction = Required<IVariableAction>;
export type VariableActionUnion = IVariableAction | IAction;
export type VariableActionFactory = () => VariableAction;
export type VariableActionValidator = (instance: IVariableAction) => ValidationResult;
