/**
 * Interface for State
 * 
 * @since UML 2.5
 * @package uml
 * @extends Namespace, RedefinableElement, Vertex
 */
import { Behavior } from './Behavior';
import { ConnectionPointReference } from './ConnectionPointReference';
import { IBehavior } from './IBehavior';
import { IConnectionPointReference } from './IConnectionPointReference';
import { IConstraint } from './IConstraint';
import { INamespace } from './INamespace';
import { IPseudostate } from './IPseudostate';
import { IRedefinableElement } from './IRedefinableElement';
import { IRegion } from './IRegion';
import { IStateMachine } from './IStateMachine';
import { ITrigger } from './ITrigger';
import { IVertex } from './IVertex';
import { Pseudostate } from './Pseudostate';
import { Region } from './Region';
import { Trigger } from './Trigger';

export interface IState extends INamespace, IRedefinableElement, IVertex {
  /**
   * connection
   * 
   * @type ConnectionPointReference
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite state
   */
  connection?: Set<IConnectionPointReference>;
  /**
   * connectionPoint
   * 
   * @type Pseudostate
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite state
   */
  connectionPoint?: Set<IPseudostate>;
  /**
   * deferrableTrigger
   * 
   * @type Trigger
   * @multiplicity [0..*]
   * @relationship containment
   */
  deferrableTrigger?: Set<ITrigger>;
  /**
   * doActivity
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship containment
   */
  doActivity?: IBehavior;
  /**
   * entry
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship containment
   */
  entry?: IBehavior;
  /**
   * exit
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship containment
   */
  exit?: IBehavior;
  /**
   * redefinedState
   * 
   * @type State
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  redefinedState?: string;
  /**
   * stateInvariant
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  stateInvariant?: string;
  /**
   * submachine
   * 
   * @type StateMachine
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite submachineState
   */
  submachine?: string;
  /**
   * region
   * 
   * @type Region
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite state
   */
  region?: Set<IRegion>;
}

// Type aliases for State
export type StateInput = Partial<IState>;
export type StateOutput = IState;
export type StateUnion = IState | IFinalState;
