/**
 * Interface for TimeConstraint
 * 
 * @since UML 2.5
 * @package uml
 * @extends IntervalConstraint
 */
import { IIntervalConstraint } from './IIntervalConstraint';

export interface ITimeConstraint extends IIntervalConstraint {
  /**
   * firstEvent
   * 
   * @type Boolean
   * @multiplicity [0..1]
   */
  firstEvent?: boolean;
}

// Type aliases for TimeConstraint
export type TimeConstraintInput = Partial<ITimeConstraint>;
export type TimeConstraintOutput = ITimeConstraint;
