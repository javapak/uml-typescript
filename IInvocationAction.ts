/**
 * Interface for InvocationAction
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Action
 */
import { IAction } from './IAction';
import { IBroadcastSignalAction } from './IBroadcastSignalAction';
import { ICallAction } from './ICallAction';
import { IInputPin } from './IInputPin';
import { IPort } from './IPort';
import { ISendObjectAction } from './ISendObjectAction';
import { ISendSignalAction } from './ISendSignalAction';
import { InputPin } from './InputPin';

export interface IInvocationAction extends IAction {
  /**
   * argument
   * 
   * @type InputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  argument?: IInputPin[];
  /**
   * onPort
   * 
   * @type Port
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  onPort?: string;
}

// Type aliases for InvocationAction
export type InvocationActionInput = Partial<IInvocationAction>;
export type InvocationActionOutput = IInvocationAction;
export type InvocationActionUnion = IInvocationAction | IBroadcastSignalAction | ICallAction | ISendObjectAction | ISendSignalAction;
