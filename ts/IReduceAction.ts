/**
 * Interface for ReduceAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { IAction } from './IAction';
import { IBehavior } from './IBehavior';
import { IInputPin } from './IInputPin';
import { IOutputPin } from './IOutputPin';
import { InputPin } from './InputPin';
import { OutputPin } from './OutputPin';

export interface IReduceAction extends IAction {
  /**
   * collection
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  collection: IInputPin;
  /**
   * isOrdered
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isOrdered: boolean;
  /**
   * reducer
   * 
   * @type Behavior
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  reducer: string;
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  result: IOutputPin;
}

// Type aliases for ReduceAction
export type ReduceActionInput = Partial<IReduceAction>;
export type ReduceActionOutput = IReduceAction;
