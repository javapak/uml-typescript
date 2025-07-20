/**
 * Interface for ActionInputPin
 * 
 * @since UML 2.5
 * @package uml
 * @extends InputPin
 */
import { Action } from './Action';
import { IAction } from './IAction';
import { IInputPin } from './IInputPin';

export interface IActionInputPin extends IInputPin {
  /**
   * fromAction
   * 
   * @type Action
   * @multiplicity [1..1]
   * @relationship containment
   */
  fromAction: IAction;
}

// Type aliases for ActionInputPin
export type ActionInputPinInput = Partial<IActionInputPin>;
export type ActionInputPinOutput = IActionInputPin;
