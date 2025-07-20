/**
 * Interface for StateInvariant
 * 
 * @since UML 2.5
 * @package uml
 * @extends InteractionFragment
 */
import { Constraint } from './Constraint';
import { IConstraint } from './IConstraint';
import { IInteractionFragment } from './IInteractionFragment';

export interface IStateInvariant extends IInteractionFragment {
  /**
   * invariant
   * 
   * @type Constraint
   * @multiplicity [1..1]
   * @relationship containment
   */
  invariant: IConstraint;
}

// Type aliases for StateInvariant
export type StateInvariantInput = Partial<IStateInvariant>;
export type StateInvariantOutput = IStateInvariant;
