/**
 * Interface for TimeObservation
 * 
 * @since UML 2.5
 * @package uml
 * @extends Observation
 */
import { INamedElement } from './INamedElement';
import { IObservation } from './IObservation';

export interface ITimeObservation extends IObservation {
  /**
   * event
   * 
   * @type NamedElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  event: INamedElement | string;
  /**
   * firstEvent
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  firstEvent: boolean;
}

// Type aliases for TimeObservation
export type TimeObservationInput = Partial<ITimeObservation>;
export type TimeObservationOutput = ITimeObservation;
