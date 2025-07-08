import { IElement } from './IElement';
import { IParameterableElement } from './IParameterableElement';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateParameterSubstitution } from './ITemplateParameterSubstitution';
import { TemplateParameterSubstitution } from './TemplateParameterSubstitution';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for TemplateParameterSubstitution
 */
export type PartialTemplateParameterSubstitution = Partial<ITemplateParameterSubstitution>;
export type RequiredTemplateParameterSubstitution = Required<ITemplateParameterSubstitution>;
export type TemplateParameterSubstitutionUnion = ITemplateParameterSubstitution | IElement;
export type TemplateParameterSubstitutionFactory = () => TemplateParameterSubstitution;
export type TemplateParameterSubstitutionValidator = (instance: ITemplateParameterSubstitution) => ValidationResult;
