/**
 * Interface for OperationTemplateParameter
 * 
 * @since UML 2.5
 * @package uml
 * @extends TemplateParameter
 */
import { ITemplateParameter } from './ITemplateParameter';

export interface IOperationTemplateParameter extends ITemplateParameter {
}

// Type aliases for OperationTemplateParameter
export type OperationTemplateParameterInput = Partial<IOperationTemplateParameter>;
export type OperationTemplateParameterOutput = IOperationTemplateParameter;
