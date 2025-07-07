/**
 * Interface for CreateObjectAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { IAction } from './IAction';
import { IClassifier } from './IClassifier';
import { IOutputPin } from './IOutputPin';
import { OutputPin } from './OutputPin';

export interface ICreateObjectAction extends IAction {
  /**
   * classifier
   * 
   * @type Classifier
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  classifier: IClassifier | string;
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  result: IOutputPin;
}

// Type aliases for CreateObjectAction
export type CreateObjectActionInput = Partial<ICreateObjectAction>;
export type CreateObjectActionOutput = ICreateObjectAction;
