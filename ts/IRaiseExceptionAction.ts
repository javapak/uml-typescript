/**
 * Interface for RaiseExceptionAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { InputPin } from './InputPin';

export interface IRaiseExceptionAction extends IAction {
  /**
   * exception
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  exception: IInputPin;
}

// Type aliases for RaiseExceptionAction
export type RaiseExceptionActionInput = Partial<IRaiseExceptionAction>;
export type RaiseExceptionActionOutput = IRaiseExceptionAction;
