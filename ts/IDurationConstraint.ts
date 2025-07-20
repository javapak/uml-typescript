/**
 * Interface for DurationConstraint
 * 
 * @since UML 2.5
 * @package uml
 * @extends IntervalConstraint
 */
import { IIntervalConstraint } from './IIntervalConstraint';

export interface IDurationConstraint extends IIntervalConstraint {
  /**
   * firstEvent
   * 
   * @type Boolean
   * @multiplicity [0..2]
   */
  firstEvent?: Set<boolean>;
}

// Type aliases for DurationConstraint
export type DurationConstraintInput = Partial<IDurationConstraint>;
export type DurationConstraintOutput = IDurationConstraint;
