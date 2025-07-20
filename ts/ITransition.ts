/**
 * Interface for Transition
 * 
 * @since UML 2.5
 * @package uml
 * @extends Namespace, RedefinableElement
 */
import { Behavior } from './Behavior';
import { IBehavior } from './IBehavior';
import { IConstraint } from './IConstraint';
import { INamespace } from './INamespace';
import { IProtocolTransition } from './IProtocolTransition';
import { IRedefinableElement } from './IRedefinableElement';
import { IRegion } from './IRegion';
import { ITrigger } from './ITrigger';
import { IVertex } from './IVertex';
import { TransitionKind } from './TransitionKind';
import { Trigger } from './Trigger';

export interface ITransition extends INamespace, IRedefinableElement {
  /**
   * effect
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship containment
   */
  effect?: IBehavior;
  /**
   * guard
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  guard?: string;
  /**
   * kind
   * 
   * @type TransitionKind
   * @multiplicity [1..1]
   */
  kind: TransitionKind;
  /**
   * redefinedTransition
   * 
   * @type Transition
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  redefinedTransition?: string;
  /**
   * source
   * 
   * @type Vertex
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  source: string;
  /**
   * target
   * 
   * @type Vertex
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  target: string;
  /**
   * trigger
   * 
   * @type Trigger
   * @multiplicity [0..*]
   * @relationship containment
   */
  trigger?: Set<ITrigger>;
  /**
   * container
   * 
   * @type Region
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite transition
   */
  container: string;
}

// Type aliases for Transition
export type TransitionInput = Partial<ITransition>;
export type TransitionOutput = ITransition;
export type TransitionUnion = ITransition | IProtocolTransition;
