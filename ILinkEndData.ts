/**
 * Interface for LinkEndData
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { IElement } from './IElement';
import { IInputPin } from './IInputPin';
import { IProperty } from './IProperty';
import { IQualifierValue } from './IQualifierValue';
import { QualifierValue } from './QualifierValue';

export interface ILinkEndData extends IElement {
  /**
   * end
   * 
   * @type Property
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  end: string;
  /**
   * qualifier
   * 
   * @type QualifierValue
   * @multiplicity [0..*]
   * @relationship containment
   */
  qualifier?: Set<IQualifierValue>;
  /**
   * value
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  value?: string;
}

// Type aliases for LinkEndData
export type LinkEndDataInput = Partial<ILinkEndData>;
export type LinkEndDataOutput = ILinkEndData;
export type LinkEndDataUnion = ILinkEndData | ILinkEndCreationData | ILinkEndDestructionData;
