/**
 * Interface for BroadcastSignalAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends InvocationAction
 */
import { IInvocationAction } from './IInvocationAction';
import { ISignal } from './ISignal';

export interface IBroadcastSignalAction extends IInvocationAction {
  /**
   * signal
   * 
   * @type Signal
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  signal: ISignal | string;
}

// Type aliases for BroadcastSignalAction
export type BroadcastSignalActionInput = Partial<IBroadcastSignalAction>;
export type BroadcastSignalActionOutput = IBroadcastSignalAction;
