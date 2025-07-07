/**
 * Interface for QualifierValue
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { IElement } from './IElement';
import { IInputPin } from './IInputPin';
import { IProperty } from './IProperty';

export interface IQualifierValue extends IElement {
  /**
   * qualifier
   * 
   * @type Property
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  qualifier: IProperty | string;
  /**
   * value
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  value: IInputPin | string;
}

// Type aliases for QualifierValue
export type QualifierValueInput = Partial<IQualifierValue>;
export type QualifierValueOutput = IQualifierValue;
