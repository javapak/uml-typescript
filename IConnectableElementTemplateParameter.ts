/**
 * Interface for ConnectableElementTemplateParameter
 * 
 * @since UML 2.5
 * @package uml
 * @extends TemplateParameter
 */
import { ITemplateParameter } from './ITemplateParameter';

export interface IConnectableElementTemplateParameter extends ITemplateParameter {
}

// Type aliases for ConnectableElementTemplateParameter
export type ConnectableElementTemplateParameterInput = Partial<IConnectableElementTemplateParameter>;
export type ConnectableElementTemplateParameterOutput = IConnectableElementTemplateParameter;
