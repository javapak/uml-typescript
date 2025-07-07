import { IElement } from './IElement';
import { IParameterableElement } from './IParameterableElement';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { TemplateParameter } from './TemplateParameter';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for TemplateParameter
 */
export type PartialTemplateParameter = Partial<ITemplateParameter>;
export type RequiredTemplateParameter = Required<ITemplateParameter>;
export type TemplateParameterMetadata = Pick<ITemplateParameter, 'ownedComment' | 'ownedDefault' | 'ownedParameteredElement'>;
export type TemplateParameterSummary = Pick<ITemplateParameter, 'eAnnotations' | 'ownedComment' | 'default'>;
export type TemplateParameterUnion = ITemplateParameter | IElement;
export type TemplateParameterFactory = () => TemplateParameter;
export type TemplateParameterValidator = (instance: ITemplateParameter) => ValidationResult;
