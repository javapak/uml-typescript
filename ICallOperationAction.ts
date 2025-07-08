/**
 * Interface for CallOperationAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends CallAction
 */
import { ICallAction } from './ICallAction';
import { IInputPin } from './IInputPin';
import { IOperation } from './IOperation';
import { InputPin } from './InputPin';

export interface ICallOperationAction extends ICallAction {
  /**
   * operation
   * 
   * @type Operation
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  operation: string;
  /**
   * target
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  target: IInputPin;
}

// Type aliases for CallOperationAction
export type CallOperationActionInput = Partial<ICallOperationAction>;
export type CallOperationActionOutput = ICallOperationAction;
