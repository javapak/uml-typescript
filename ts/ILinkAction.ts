/**
 * Interface for LinkAction
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Action
 */
import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { ILinkEndData } from './ILinkEndData';
import { InputPin } from './InputPin';
import { IReadLinkAction } from './IReadLinkAction';
import { IWriteLinkAction } from './IWriteLinkAction';
import { LinkEndData } from './LinkEndData';

export interface ILinkAction extends IAction {
  /**
   * endData
   * 
   * @type LinkEndData
   * @multiplicity [2..*]
   * @relationship containment
   */
  endData: Set<ILinkEndData>;
  /**
   * inputValue
   * 
   * @type InputPin
   * @multiplicity [1..*]
   * @relationship containment
   */
  inputValue: Set<IInputPin>;
}

// Type aliases for LinkAction
export type LinkActionInput = Partial<ILinkAction>;
export type LinkActionOutput = ILinkAction;
export type LinkActionUnion = ILinkAction | IWriteLinkAction | IReadLinkAction;
