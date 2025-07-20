import { ConnectableElement } from './ConnectableElement';
import { IConnectableElement } from './IConnectableElement';
import { IParameterableElement } from './IParameterableElement';
import { ITypedElement } from './ITypedElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ConnectableElement
 */
export type PartialConnectableElement = Partial<IConnectableElement>;
export type RequiredConnectableElement = Required<IConnectableElement>;
export type ConnectableElementUnion = IConnectableElement | ITypedElement | IParameterableElement;
export type ConnectableElementFactory = () => ConnectableElement;
export type ConnectableElementValidator = (instance: IConnectableElement) => ValidationResult;
