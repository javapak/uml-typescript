/**
 * Interface for ReadIsClassifiedObjectAction
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

export interface IReadIsClassifiedObjectAction extends IAction {
  /**
   * classifier
   * 
   * @type Classifier
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  classifier: IClassifier | string;
  /**
   * isDirect
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isDirect: boolean;
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

// Type aliases for ReadIsClassifiedObjectAction
export type ReadIsClassifiedObjectActionInput = Partial<IReadIsClassifiedObjectAction>;
export type ReadIsClassifiedObjectActionOutput = IReadIsClassifiedObjectAction;
