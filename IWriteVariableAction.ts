/**
 * Interface for WriteVariableAction
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends VariableAction
 */
import { IInputPin } from './IInputPin';
import { IVariableAction } from './IVariableAction';
import { InputPin } from './InputPin';

export interface IWriteVariableAction extends IVariableAction {
  /**
   * value
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship containment
   */
  value?: IInputPin;
}

// Type aliases for WriteVariableAction
export type WriteVariableActionInput = Partial<IWriteVariableAction>;
export type WriteVariableActionOutput = IWriteVariableAction;
export type WriteVariableActionUnion = IWriteVariableAction | IAddVariableValueAction | IRemoveVariableValueAction;
