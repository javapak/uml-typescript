import { ConnectableElementTemplateParameter } from './ConnectableElementTemplateParameter';
import { IConnectableElementTemplateParameter } from './IConnectableElementTemplateParameter';
import { ITemplateParameter } from './ITemplateParameter';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ConnectableElementTemplateParameter
 */
export type PartialConnectableElementTemplateParameter = Partial<IConnectableElementTemplateParameter>;
export type RequiredConnectableElementTemplateParameter = Required<IConnectableElementTemplateParameter>;
export type ConnectableElementTemplateParameterUnion = IConnectableElementTemplateParameter | ITemplateParameter;
export type ConnectableElementTemplateParameterFactory = () => ConnectableElementTemplateParameter;
export type ConnectableElementTemplateParameterValidator = (instance: IConnectableElementTemplateParameter) => ValidationResult;
