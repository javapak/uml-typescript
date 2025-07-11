import { IConstraint } from './IConstraint';
import { INamedElement } from './INamedElement';
import { IParameter } from './IParameter';
import { IParameterSet } from './IParameterSet';
import { ParameterSet } from './ParameterSet';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ParameterSet
 */
export type PartialParameterSet = Partial<IParameterSet>;
export type RequiredParameterSet = Required<IParameterSet>;
export type ParameterSetUnion = IParameterSet | INamedElement;
export type ParameterSetFactory = () => ParameterSet;
export type ParameterSetValidator = (instance: IParameterSet) => ValidationResult;
