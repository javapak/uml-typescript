/**
 * Interface for DurationObservation
 * 
 * @since UML 2.5
 * @package uml
 * @extends Observation
 */
import { INamedElement } from './INamedElement';
import { IObservation } from './IObservation';

export interface IDurationObservation extends IObservation {
  /**
   * event
   * 
   * @type NamedElement
   * @multiplicity [1..2]
   * @relationship cross-reference
   */
  event: INamedElement | string[];
  /**
   * firstEvent
   * 
   * @type Boolean
   * @multiplicity [0..2]
   */
  firstEvent: Set<boolean>;
}

// Type aliases for DurationObservation
export type DurationObservationInput = Partial<IDurationObservation>;
export type DurationObservationOutput = IDurationObservation;
