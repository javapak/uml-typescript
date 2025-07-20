/**
 * Interface for Duration
 * 
 * @since UML 2.5
 * @package uml
 * @extends ValueSpecification
 */
import { IObservation } from './IObservation';
import { IValueSpecification } from './IValueSpecification';
import { ValueSpecification } from './ValueSpecification';

export interface IDuration extends IValueSpecification {
  /**
   * expr
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  expr?: IValueSpecification;
  /**
   * observation
   * 
   * @type Observation
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  observation?: Set<string>;
}

// Type aliases for Duration
export type DurationInput = Partial<IDuration>;
export type DurationOutput = IDuration;
