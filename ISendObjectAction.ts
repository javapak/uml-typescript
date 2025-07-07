/**
 * Interface for SendObjectAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends InvocationAction
 */
import { IInputPin } from './IInputPin';
import { IInvocationAction } from './IInvocationAction';
import { InputPin } from './InputPin';

export interface ISendObjectAction extends IInvocationAction {
  /**
   * request
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  request: IInputPin;
  /**
   * target
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  target: IInputPin;
}

// Type aliases for SendObjectAction
export type SendObjectActionInput = Partial<ISendObjectAction>;
export type SendObjectActionOutput = ISendObjectAction;
