/**
 * Interface for StateMachine
 * 
 * @since UML 2.5
 * @package uml
 * @extends Behavior
 */
import { IBehavior } from './IBehavior';
import { IPseudostate } from './IPseudostate';
import { IRegion } from './IRegion';
import { IState } from './IState';
import { Pseudostate } from './Pseudostate';
import { Region } from './Region';

export interface IStateMachine extends IBehavior {
  /**
   * connectionPoint
   * 
   * @type Pseudostate
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite stateMachine
   */
  connectionPoint?: Set<IPseudostate>;
  /**
   * submachineState
   * 
   * @type State
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite submachine
   */
  submachineState?: Set<string>;
  /**
   * region
   * 
   * @type Region
   * @multiplicity [1..*]
   * @relationship containment
   * @opposite stateMachine
   */
  region: Set<IRegion>;
  /**
   * extendedStateMachine
   * 
   * @type StateMachine
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  extendedStateMachine?: Set<string>;
}

// Type aliases for StateMachine
export type StateMachineInput = Partial<IStateMachine>;
export type StateMachineOutput = IStateMachine;
export type StateMachineUnion = IStateMachine | IProtocolStateMachine;
