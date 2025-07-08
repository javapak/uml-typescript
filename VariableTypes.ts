import { IActivity } from './IActivity';
import { IConnectableElement } from './IConnectableElement';
import { IMultiplicityElement } from './IMultiplicityElement';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IVariable } from './IVariable';
import { ValidationResult } from './ValidationTypes';
import { Variable } from './Variable';

/**
 * Utility types for Variable
 */
export type PartialVariable = Partial<IVariable>;
export type RequiredVariable = Required<IVariable>;
export type VariableUnion = IVariable | IConnectableElement | IMultiplicityElement;
export type VariableFactory = () => Variable;
export type VariableValidator = (instance: IVariable) => ValidationResult;
