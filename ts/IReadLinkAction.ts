/**
 * Interface for ReadLinkAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends LinkAction
 */
import { ILinkAction } from './ILinkAction';
import { IOutputPin } from './IOutputPin';
import { OutputPin } from './OutputPin';

export interface IReadLinkAction extends ILinkAction {
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  result: IOutputPin;
}

// Type aliases for ReadLinkAction
export type ReadLinkActionInput = Partial<IReadLinkAction>;
export type ReadLinkActionOutput = IReadLinkAction;
