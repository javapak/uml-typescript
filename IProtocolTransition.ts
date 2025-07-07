/**
 * Interface for ProtocolTransition
 * 
 * @since UML 2.5
 * @package uml
 * @extends Transition
 */
import { IConstraint } from './IConstraint';
import { ITransition } from './ITransition';

export interface IProtocolTransition extends ITransition {
  /**
   * postCondition
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  postCondition?: IConstraint | string;
  /**
   * preCondition
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  preCondition?: IConstraint | string;
}

// Type aliases for ProtocolTransition
export type ProtocolTransitionInput = Partial<IProtocolTransition>;
export type ProtocolTransitionOutput = IProtocolTransition;
