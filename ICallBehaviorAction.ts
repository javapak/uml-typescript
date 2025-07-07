/**
 * Interface for CallBehaviorAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends CallAction
 */
import { IBehavior } from './IBehavior';
import { ICallAction } from './ICallAction';

export interface ICallBehaviorAction extends ICallAction {
  /**
   * behavior
   * 
   * @type Behavior
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  behavior: IBehavior | string;
}

// Type aliases for CallBehaviorAction
export type CallBehaviorActionInput = Partial<ICallBehaviorAction>;
export type CallBehaviorActionOutput = ICallBehaviorAction;
