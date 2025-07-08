/**
 * Interface for StructuralFeature
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Feature, TypedElement, MultiplicityElement
 */
import { IFeature } from './IFeature';
import { IMultiplicityElement } from './IMultiplicityElement';
import { ITypedElement } from './ITypedElement';

export interface IStructuralFeature extends IFeature, ITypedElement, IMultiplicityElement {
  /**
   * isReadOnly
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isReadOnly: boolean;
}

// Type aliases for StructuralFeature
export type StructuralFeatureInput = Partial<IStructuralFeature>;
export type StructuralFeatureOutput = IStructuralFeature;
export type StructuralFeatureUnion = IStructuralFeature | IProperty;
