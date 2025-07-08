/**
 * Interface for ReadVariableAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends VariableAction
 */
import { IOutputPin } from './IOutputPin';
import { IVariableAction } from './IVariableAction';
import { OutputPin } from './OutputPin';

export interface IReadVariableAction extends IVariableAction {
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  result: IOutputPin;
}

// Type aliases for ReadVariableAction
export type ReadVariableActionInput = Partial<IReadVariableAction>;
export type ReadVariableActionOutput = IReadVariableAction;
