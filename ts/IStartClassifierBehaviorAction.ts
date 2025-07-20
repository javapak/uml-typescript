/**
 * Interface for StartClassifierBehaviorAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { InputPin } from './InputPin';

export interface IStartClassifierBehaviorAction extends IAction {
  /**
   * object
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  object: IInputPin;
}

// Type aliases for StartClassifierBehaviorAction
export type StartClassifierBehaviorActionInput = Partial<IStartClassifierBehaviorAction>;
export type StartClassifierBehaviorActionOutput = IStartClassifierBehaviorAction;
