/**
 * Interface for TestIdentityAction
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

export interface ITestIdentityAction extends IAction {
  /**
   * first
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  first: IInputPin;
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  result: IOutputPin;
  /**
   * second
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  second: IInputPin;
}

// Type aliases for TestIdentityAction
export type TestIdentityActionInput = Partial<ITestIdentityAction>;
export type TestIdentityActionOutput = ITestIdentityAction;
