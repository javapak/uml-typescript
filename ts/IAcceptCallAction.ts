/**
 * Interface for AcceptCallAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends AcceptEventAction
 */
import { IAcceptEventAction } from './IAcceptEventAction';
import { IOutputPin } from './IOutputPin';
import { OutputPin } from './OutputPin';

export interface IAcceptCallAction extends IAcceptEventAction {
  /**
   * returnInformation
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  returnInformation: IOutputPin;
}

// Type aliases for AcceptCallAction
export type AcceptCallActionInput = Partial<IAcceptCallAction>;
export type AcceptCallActionOutput = IAcceptCallAction;
