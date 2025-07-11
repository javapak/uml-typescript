import { IOperationTemplateParameter } from './IOperationTemplateParameter';
import { ITemplateParameter } from './ITemplateParameter';
import { OperationTemplateParameter } from './OperationTemplateParameter';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for OperationTemplateParameter
 */
export type PartialOperationTemplateParameter = Partial<IOperationTemplateParameter>;
export type RequiredOperationTemplateParameter = Required<IOperationTemplateParameter>;
export type OperationTemplateParameterUnion = IOperationTemplateParameter | ITemplateParameter;
export type OperationTemplateParameterFactory = () => OperationTemplateParameter;
export type OperationTemplateParameterValidator = (instance: IOperationTemplateParameter) => ValidationResult;
