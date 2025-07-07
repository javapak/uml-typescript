/**
 * Interface for DestroyObjectAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { InputPin } from './InputPin';

export interface IDestroyObjectAction extends IAction {
  /**
   * isDestroyLinks
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isDestroyLinks: boolean;
  /**
   * isDestroyOwnedObjects
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isDestroyOwnedObjects: boolean;
  /**
   * target
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  target: IInputPin;
}

// Type aliases for DestroyObjectAction
export type DestroyObjectActionInput = Partial<IDestroyObjectAction>;
export type DestroyObjectActionOutput = IDestroyObjectAction;
