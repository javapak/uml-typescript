/**
 * Interface for ReadLinkObjectEndAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { IOutputPin } from './IOutputPin';
import { IProperty } from './IProperty';
import { InputPin } from './InputPin';
import { OutputPin } from './OutputPin';

export interface IReadLinkObjectEndAction extends IAction {
  /**
   * end
   * 
   * @type Property
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  end: IProperty | string;
  /**
   * object
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  object: IInputPin;
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  result: IOutputPin;
}

// Type aliases for ReadLinkObjectEndAction
export type ReadLinkObjectEndActionInput = Partial<IReadLinkObjectEndAction>;
export type ReadLinkObjectEndActionOutput = IReadLinkObjectEndAction;
