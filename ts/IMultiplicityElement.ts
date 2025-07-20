/**
 * Interface for MultiplicityElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Element
 */
import { IConnectorEnd } from './IConnectorEnd';
import { IElement } from './IElement';
import { IParameter } from './IParameter';
import { IPin } from './IPin';
import { IStructuralFeature } from './IStructuralFeature';
import { IValueSpecification } from './IValueSpecification';
import { IVariable } from './IVariable';
import { ValueSpecification } from './ValueSpecification';

export interface IMultiplicityElement extends IElement {
  /**
   * isOrdered
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isOrdered: boolean;
  /**
   * isUnique
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isUnique: boolean;
  /**
   * lowerValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  lowerValue?: IValueSpecification;
  /**
   * upperValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  upperValue?: IValueSpecification;
}

// Type aliases for MultiplicityElement
export type MultiplicityElementInput = Partial<IMultiplicityElement>;
export type MultiplicityElementOutput = IMultiplicityElement;
export type MultiplicityElementUnion = IMultiplicityElement | IConnectorEnd | IParameter | IStructuralFeature | IPin | IVariable;
