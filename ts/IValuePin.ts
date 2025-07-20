/**
 * Interface for ValuePin
 * 
 * @since UML 2.5
 * @package uml
 * @extends InputPin
 */
import { IInputPin } from './IInputPin';
import { IValueSpecification } from './IValueSpecification';
import { ValueSpecification } from './ValueSpecification';

export interface IValuePin extends IInputPin {
  /**
   * value
   * 
   * @type ValueSpecification
   * @multiplicity [1..1]
   * @relationship containment
   */
  value: IValueSpecification;
}

// Type aliases for ValuePin
export type ValuePinInput = Partial<IValuePin>;
export type ValuePinOutput = IValuePin;
