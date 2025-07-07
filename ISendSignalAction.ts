/**
 * Interface for SendSignalAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends InvocationAction
 */
import { IInputPin } from './IInputPin';
import { IInvocationAction } from './IInvocationAction';
import { ISignal } from './ISignal';
import { InputPin } from './InputPin';

export interface ISendSignalAction extends IInvocationAction {
  /**
   * signal
   * 
   * @type Signal
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  signal: ISignal | string;
  /**
   * target
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  target: IInputPin;
}

// Type aliases for SendSignalAction
export type SendSignalActionInput = Partial<ISendSignalAction>;
export type SendSignalActionOutput = ISendSignalAction;
