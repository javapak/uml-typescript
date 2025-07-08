/**
 * Interface for CallAction
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends InvocationAction
 */
import { IInvocationAction } from './IInvocationAction';
import { IOutputPin } from './IOutputPin';
import { OutputPin } from './OutputPin';

export interface ICallAction extends IInvocationAction {
  /**
   * isSynchronous
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isSynchronous: boolean;
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  result?: IOutputPin[];
}

// Type aliases for CallAction
export type CallActionInput = Partial<ICallAction>;
export type CallActionOutput = ICallAction;
export type CallActionUnion = ICallAction | ICallBehaviorAction | ICallOperationAction | IStartObjectBehaviorAction;
