/**
 * Interface for ReadLinkObjectEndQualifierAction
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

export interface IReadLinkObjectEndQualifierAction extends IAction {
  /**
   * object
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  object: IInputPin;
  /**
   * qualifier
   * 
   * @type Property
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  qualifier: IProperty | string;
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  result: IOutputPin;
}

// Type aliases for ReadLinkObjectEndQualifierAction
export type ReadLinkObjectEndQualifierActionInput = Partial<IReadLinkObjectEndQualifierAction>;
export type ReadLinkObjectEndQualifierActionOutput = IReadLinkObjectEndQualifierAction;
