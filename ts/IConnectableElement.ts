/**
 * Interface for ConnectableElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends TypedElement, ParameterableElement
 */
import { IParameter } from './IParameter';
import { IParameterableElement } from './IParameterableElement';
import { IProperty } from './IProperty';
import { ITypedElement } from './ITypedElement';
import { IVariable } from './IVariable';

export interface IConnectableElement extends ITypedElement, IParameterableElement {
}

// Type aliases for ConnectableElement
export type ConnectableElementInput = Partial<IConnectableElement>;
export type ConnectableElementOutput = IConnectableElement;
export type ConnectableElementUnion = IConnectableElement | IProperty | IParameter | IVariable;
