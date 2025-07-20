import { ClassifierTemplateParameter } from './ClassifierTemplateParameter';
import { IClassifier } from './IClassifier';
import { IClassifierTemplateParameter } from './IClassifierTemplateParameter';
import { ITemplateParameter } from './ITemplateParameter';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ClassifierTemplateParameter
 */
export type PartialClassifierTemplateParameter = Partial<IClassifierTemplateParameter>;
export type RequiredClassifierTemplateParameter = Required<IClassifierTemplateParameter>;
export type ClassifierTemplateParameterUnion = IClassifierTemplateParameter | ITemplateParameter;
export type ClassifierTemplateParameterFactory = () => ClassifierTemplateParameter;
export type ClassifierTemplateParameterValidator = (instance: IClassifierTemplateParameter) => ValidationResult;
