import { GeneralOrdering } from './GeneralOrdering';
import { IGeneralOrdering } from './IGeneralOrdering';
import { INamedElement } from './INamedElement';
import { IOccurrenceSpecification } from './IOccurrenceSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for GeneralOrdering
 */
export type PartialGeneralOrdering = Partial<IGeneralOrdering>;
export type RequiredGeneralOrdering = Required<IGeneralOrdering>;
export type GeneralOrderingUnion = IGeneralOrdering | INamedElement;
export type GeneralOrderingFactory = () => GeneralOrdering;
export type GeneralOrderingValidator = (instance: IGeneralOrdering) => ValidationResult;
