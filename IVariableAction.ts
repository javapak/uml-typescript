/**
 * Interface for VariableAction
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Action
 */
import { IAction } from './IAction';
import { IVariable } from './IVariable';

export interface IVariableAction extends IAction {
  /**
   * variable
   * 
   * @type Variable
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  variable: IVariable | string;
}

// Type aliases for VariableAction
export type VariableActionInput = Partial<IVariableAction>;
export type VariableActionOutput = IVariableAction;
export type VariableActionUnion = IVariableAction | IWriteVariableAction | IClearVariableAction | IReadVariableAction;
