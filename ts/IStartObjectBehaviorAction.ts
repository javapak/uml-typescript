/**
 * Interface for StartObjectBehaviorAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends CallAction
 */
import { ICallAction } from './ICallAction';
import { IInputPin } from './IInputPin';
import { InputPin } from './InputPin';

export interface IStartObjectBehaviorAction extends ICallAction {
  /**
   * object
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  object: IInputPin;
}

// Type aliases for StartObjectBehaviorAction
export type StartObjectBehaviorActionInput = Partial<IStartObjectBehaviorAction>;
export type StartObjectBehaviorActionOutput = IStartObjectBehaviorAction;
