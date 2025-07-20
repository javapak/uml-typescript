/**
 * Interface for AddVariableValueAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends WriteVariableAction
 */
import { IInputPin } from './IInputPin';
import { IWriteVariableAction } from './IWriteVariableAction';
import { InputPin } from './InputPin';

export interface IAddVariableValueAction extends IWriteVariableAction {
  /**
   * insertAt
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship containment
   */
  insertAt?: IInputPin;
  /**
   * isReplaceAll
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isReplaceAll: boolean;
}

// Type aliases for AddVariableValueAction
export type AddVariableValueActionInput = Partial<IAddVariableValueAction>;
export type AddVariableValueActionOutput = IAddVariableValueAction;
