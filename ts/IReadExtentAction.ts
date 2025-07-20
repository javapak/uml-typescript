/**
 * Interface for ReadExtentAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { IAction } from './IAction';
import { IClassifier } from './IClassifier';
import { IOutputPin } from './IOutputPin';
import { OutputPin } from './OutputPin';

export interface IReadExtentAction extends IAction {
  /**
   * classifier
   * 
   * @type Classifier
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  classifier: string;
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  result: IOutputPin;
}

// Type aliases for ReadExtentAction
export type ReadExtentActionInput = Partial<IReadExtentAction>;
export type ReadExtentActionOutput = IReadExtentAction;
