/**
 * Interface for TypedElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { INamedElement } from './INamedElement';
import { IType } from './IType';

export interface ITypedElement extends INamedElement {
  /**
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  type?: IType | string;
}

// Type aliases for TypedElement
export type TypedElementInput = Partial<ITypedElement>;
export type TypedElementOutput = ITypedElement;
export type TypedElementUnion = ITypedElement | IConnectableElement | IValueSpecification | IStructuralFeature | IObjectNode;
