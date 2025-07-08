/**
 * Interface for OpaqueAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { IAction } from './IAction';
import { IInputPin } from './IInputPin';
import { IOutputPin } from './IOutputPin';
import { InputPin } from './InputPin';
import { OutputPin } from './OutputPin';

export interface IOpaqueAction extends IAction {
  /**
   * body
   * 
   * @type String
   * @multiplicity [0..*]
   */
  body?: string[];
  /**
   * inputValue
   * 
   * @type InputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  inputValue?: Set<IInputPin>;
  /**
   * language
   * 
   * @type String
   * @multiplicity [0..*]
   */
  language?: string[];
  /**
   * outputValue
   * 
   * @type OutputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  outputValue?: Set<IOutputPin>;
}

// Type aliases for OpaqueAction
export type OpaqueActionInput = Partial<IOpaqueAction>;
export type OpaqueActionOutput = IOpaqueAction;
