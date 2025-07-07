/**
 * Interface for ReplyAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { ITrigger } from './ITrigger';
import { InputPin } from './InputPin';

export interface IReplyAction extends IAction {
  /**
   * replyToCall
   * 
   * @type Trigger
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  replyToCall: ITrigger | string;
  /**
   * replyValue
   * 
   * @type InputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  replyValue: IInputPin[];
  /**
   * returnInformation
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  returnInformation: IInputPin;
}

// Type aliases for ReplyAction
export type ReplyActionInput = Partial<IReplyAction>;
export type ReplyActionOutput = IReplyAction;
