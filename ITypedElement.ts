/**
 * Interface for TypedElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { IConnectableElement } from './IConnectableElement';
import { INamedElement } from './INamedElement';
import { IObjectNode } from './IObjectNode';
import { IStructuralFeature } from './IStructuralFeature';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';

export interface ITypedElement extends INamedElement {
  /**
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  type?: string;
}

// Type aliases for TypedElement
export type TypedElementInput = Partial<ITypedElement>;
export type TypedElementOutput = ITypedElement;
export type TypedElementUnion = ITypedElement | IConnectableElement | IValueSpecification | IStructuralFeature | IObjectNode;
