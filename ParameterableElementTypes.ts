import { IElement } from './IElement';
import { IParameterableElement } from './IParameterableElement';
import { ITemplateParameter } from './ITemplateParameter';
import { ParameterableElement } from './ParameterableElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ParameterableElement
 */
export type PartialParameterableElement = Partial<IParameterableElement>;
export type RequiredParameterableElement = Required<IParameterableElement>;
export type ParameterableElementMetadata = Pick<IParameterableElement, 'ownedComment'>;
export type ParameterableElementSummary = Pick<IParameterableElement, 'eAnnotations' | 'ownedComment' | 'owningTemplateParameter'>;
export type ParameterableElementUnion = IParameterableElement | IElement;
export type ParameterableElementFactory = () => ParameterableElement;
export type ParameterableElementValidator = (instance: IParameterableElement) => ValidationResult;
