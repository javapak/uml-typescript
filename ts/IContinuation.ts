/**
 * Interface for Continuation
 * 
 * @since UML 2.5
 * @package uml
 * @extends InteractionFragment
 */
import { IInteractionFragment } from './IInteractionFragment';

export interface IContinuation extends IInteractionFragment {
  /**
   * setting
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  setting: boolean;
}

// Type aliases for Continuation
export type ContinuationInput = Partial<IContinuation>;
export type ContinuationOutput = IContinuation;
