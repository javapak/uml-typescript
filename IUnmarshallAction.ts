/**
 * Interface for UnmarshallAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { IAction } from './IAction';
import { IClassifier } from './IClassifier';
import { IInputPin } from './IInputPin';
import { IOutputPin } from './IOutputPin';
import { InputPin } from './InputPin';
import { OutputPin } from './OutputPin';

export interface IUnmarshallAction extends IAction {
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
   * @multiplicity [1..*]
   * @relationship containment
   */
  result: IOutputPin[];
  /**
   * unmarshallType
   * 
   * @type Classifier
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  unmarshallType: string;
}

// Type aliases for UnmarshallAction
export type UnmarshallActionInput = Partial<IUnmarshallAction>;
export type UnmarshallActionOutput = IUnmarshallAction;
