/**
 * Interface for Interaction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Behavior, InteractionFragment
 */
import { Action } from './Action';
import { Gate } from './Gate';
import { IAction } from './IAction';
import { IBehavior } from './IBehavior';
import { IGate } from './IGate';
import { IInteractionFragment } from './IInteractionFragment';
import { ILifeline } from './ILifeline';
import { IMessage } from './IMessage';
import { InteractionFragment } from './InteractionFragment';
import { Lifeline } from './Lifeline';
import { Message } from './Message';

export interface IInteraction extends IBehavior, IInteractionFragment {
  /**
   * lifeline
   * 
   * @type Lifeline
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite interaction
   */
  lifeline?: Set<ILifeline>;
  /**
   * fragment
   * 
   * @type InteractionFragment
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite enclosingInteraction
   */
  fragment?: IInteractionFragment[];
  /**
   * action
   * 
   * @type Action
   * @multiplicity [0..*]
   * @relationship containment
   */
  action?: Set<IAction>;
  /**
   * formalGate
   * 
   * @type Gate
   * @multiplicity [0..*]
   * @relationship containment
   */
  formalGate?: Set<IGate>;
  /**
   * message
   * 
   * @type Message
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite interaction
   */
  message?: Set<IMessage>;
}

// Type aliases for Interaction
export type InteractionInput = Partial<IInteraction>;
export type InteractionOutput = IInteraction;
