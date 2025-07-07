/**
 * Interface for Slot
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { IElement } from './IElement';
import { IInstanceSpecification } from './IInstanceSpecification';
import { IStructuralFeature } from './IStructuralFeature';
import { IValueSpecification } from './IValueSpecification';
import { ValueSpecification } from './ValueSpecification';

export interface ISlot extends IElement {
  /**
   * definingFeature
   * 
   * @type StructuralFeature
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  definingFeature: IStructuralFeature | string;
  /**
   * value
   * 
   * @type ValueSpecification
   * @multiplicity [0..*]
   * @relationship containment
   */
  value: IValueSpecification[];
  /**
   * owningInstance
   * 
   * @type InstanceSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite slot
   */
  owningInstance: IInstanceSpecification | string;
}

// Type aliases for Slot
export type SlotInput = Partial<ISlot>;
export type SlotOutput = ISlot;
