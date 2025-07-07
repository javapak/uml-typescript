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
export type GeneralOrderingKey = Pick<IGeneralOrdering, 'name' | 'nameExpression'>;
export type GeneralOrderingMetadata = Pick<IGeneralOrdering, 'ownedComment' | 'visibility'>;
export type GeneralOrderingSummary = Pick<IGeneralOrdering, 'eAnnotations' | 'ownedComment' | 'name'>;
export type GeneralOrderingUnion = IGeneralOrdering | INamedElement;
export type GeneralOrderingFactory = () => GeneralOrdering;
export type GeneralOrderingValidator = (instance: IGeneralOrdering) => ValidationResult;
