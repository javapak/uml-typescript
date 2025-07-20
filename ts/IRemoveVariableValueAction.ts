/**
 * Interface for RemoveVariableValueAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends WriteVariableAction
 */
import { IInputPin } from './IInputPin';
import { IWriteVariableAction } from './IWriteVariableAction';
import { InputPin } from './InputPin';

export interface IRemoveVariableValueAction extends IWriteVariableAction {
  /**
   * isRemoveDuplicates
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isRemoveDuplicates: boolean;
  /**
   * removeAt
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship containment
   */
  removeAt?: IInputPin;
}

// Type aliases for RemoveVariableValueAction
export type RemoveVariableValueActionInput = Partial<IRemoveVariableValueAction>;
export type RemoveVariableValueActionOutput = IRemoveVariableValueAction;
