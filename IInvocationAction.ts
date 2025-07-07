/**
 * Interface for InvocationAction
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Action
 */
import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { IPort } from './IPort';
import { InputPin } from './InputPin';

export interface IInvocationAction extends IAction {
  /**
   * argument
   * 
   * @type InputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  argument: IInputPin[];
  /**
   * onPort
   * 
   * @type Port
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  onPort?: IPort | string;
}

// Type aliases for InvocationAction
export type InvocationActionInput = Partial<IInvocationAction>;
export type InvocationActionOutput = IInvocationAction;
export type InvocationActionUnion = IInvocationAction | IBroadcastSignalAction | ICallAction | ISendObjectAction | ISendSignalAction;
