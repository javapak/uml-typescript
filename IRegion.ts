/**
 * Interface for Region
 * 
 * @since UML 2.5
 * @package uml
 * @extends Namespace, RedefinableElement
 */
import { INamespace } from './INamespace';
import { IRedefinableElement } from './IRedefinableElement';
import { IState } from './IState';
import { IStateMachine } from './IStateMachine';
import { ITransition } from './ITransition';
import { IVertex } from './IVertex';
import { Transition } from './Transition';
import { Vertex } from './Vertex';

export interface IRegion extends INamespace, IRedefinableElement {
  /**
   * extendedRegion
   * 
   * @type Region
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  extendedRegion?: string;
  /**
   * state
   * 
   * @type State
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite region
   */
  state?: string;
  /**
   * stateMachine
   * 
   * @type StateMachine
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite region
   */
  stateMachine?: string;
  /**
   * transition
   * 
   * @type Transition
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite container
   */
  transition?: Set<ITransition>;
  /**
   * subvertex
   * 
   * @type Vertex
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite container
   */
  subvertex?: Set<IVertex>;
}

// Type aliases for Region
export type RegionInput = Partial<IRegion>;
export type RegionOutput = IRegion;
