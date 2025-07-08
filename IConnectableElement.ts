/**
 * Interface for ConnectableElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends TypedElement, ParameterableElement
 */
import { IParameterableElement } from './IParameterableElement';
import { ITypedElement } from './ITypedElement';

export interface IConnectableElement extends ITypedElement, IParameterableElement {
}

// Type aliases for ConnectableElement
export type ConnectableElementInput = Partial<IConnectableElement>;
export type ConnectableElementOutput = IConnectableElement;
export type ConnectableElementUnion = IConnectableElement | IProperty | IParameter | IVariable;
