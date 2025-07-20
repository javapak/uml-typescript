/**
 * Interface for AcceptEventAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { IAcceptCallAction } from './IAcceptCallAction';
import { IAction } from './IAction';
import { IOutputPin } from './IOutputPin';
import { ITrigger } from './ITrigger';
import { OutputPin } from './OutputPin';
import { Trigger } from './Trigger';

export interface IAcceptEventAction extends IAction {
  /**
   * isUnmarshall
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isUnmarshall: boolean;
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  result?: IOutputPin[];
  /**
   * trigger
   * 
   * @type Trigger
   * @multiplicity [1..*]
   * @relationship containment
   */
  trigger: Set<ITrigger>;
}

// Type aliases for AcceptEventAction
export type AcceptEventActionInput = Partial<IAcceptEventAction>;
export type AcceptEventActionOutput = IAcceptEventAction;
export type AcceptEventActionUnion = IAcceptEventAction | IAcceptCallAction;
