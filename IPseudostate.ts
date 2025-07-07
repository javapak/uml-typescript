/**
 * Interface for Pseudostate
 * 
 * @since UML 2.5
 * @package uml
 * @extends Vertex
 */
import { IState } from './IState';
import { IStateMachine } from './IStateMachine';
import { IVertex } from './IVertex';
import { PseudostateKind } from './PseudostateKind';

export interface IPseudostate extends IVertex {
  /**
   * state
   * 
   * @type State
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite connectionPoint
   */
  state?: IState | string;
  /**
   * kind
   * 
   * @type PseudostateKind
   * @multiplicity [1..1]
   */
  kind: any;
  /**
   * stateMachine
   * 
   * @type StateMachine
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite connectionPoint
   */
  stateMachine?: IStateMachine | string;
}

// Type aliases for Pseudostate
export type PseudostateInput = Partial<IPseudostate>;
export type PseudostateOutput = IPseudostate;
