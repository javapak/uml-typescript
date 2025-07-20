/**
 * Interface for ReclassifyObjectAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { IAction } from './IAction';
import { IClassifier } from './IClassifier';
import { IInputPin } from './IInputPin';
import { InputPin } from './InputPin';

export interface IReclassifyObjectAction extends IAction {
  /**
   * isReplaceAll
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isReplaceAll: boolean;
  /**
   * newClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  newClassifier?: Set<string>;
  /**
   * object
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  object: IInputPin;
  /**
   * oldClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  oldClassifier?: Set<string>;
}

// Type aliases for ReclassifyObjectAction
export type ReclassifyObjectActionInput = Partial<IReclassifyObjectAction>;
export type ReclassifyObjectActionOutput = IReclassifyObjectAction;
