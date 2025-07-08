/**
 * Interface for ClearVariableAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends VariableAction
 */
import { IVariableAction } from './IVariableAction';

export interface IClearVariableAction extends IVariableAction {
}

// Type aliases for ClearVariableAction
export type ClearVariableActionInput = Partial<IClearVariableAction>;
export type ClearVariableActionOutput = IClearVariableAction;
