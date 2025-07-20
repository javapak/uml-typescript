/**
 * Interface for VariableAction
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Action
 */
import { IAction } from './IAction';
import { IClearVariableAction } from './IClearVariableAction';
import { IReadVariableAction } from './IReadVariableAction';
import { IVariable } from './IVariable';
import { IWriteVariableAction } from './IWriteVariableAction';

export interface IVariableAction extends IAction {
  /**
   * variable
   * 
   * @type Variable
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  variable: string;
}

// Type aliases for VariableAction
export type VariableActionInput = Partial<IVariableAction>;
export type VariableActionOutput = IVariableAction;
export type VariableActionUnion = IVariableAction | IWriteVariableAction | IClearVariableAction | IReadVariableAction;
