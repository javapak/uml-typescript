/**
 * Interface for ReadSelfAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { IAction } from './IAction';
import { IOutputPin } from './IOutputPin';
import { OutputPin } from './OutputPin';

export interface IReadSelfAction extends IAction {
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  result: IOutputPin;
}

// Type aliases for ReadSelfAction
export type ReadSelfActionInput = Partial<IReadSelfAction>;
export type ReadSelfActionOutput = IReadSelfAction;
