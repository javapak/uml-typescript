/**
 * Interface for CreateLinkObjectAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends CreateLinkAction
 */
import { ICreateLinkAction } from './ICreateLinkAction';
import { IOutputPin } from './IOutputPin';
import { OutputPin } from './OutputPin';

export interface ICreateLinkObjectAction extends ICreateLinkAction {
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  result: IOutputPin;
}

// Type aliases for CreateLinkObjectAction
export type CreateLinkObjectActionInput = Partial<ICreateLinkObjectAction>;
export type CreateLinkObjectActionOutput = ICreateLinkObjectAction;
