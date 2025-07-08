/**
 * Interface for ActionExecutionSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @extends ExecutionSpecification
 */
import { IAction } from './IAction';
import { IExecutionSpecification } from './IExecutionSpecification';

export interface IActionExecutionSpecification extends IExecutionSpecification {
  /**
   * action
   * 
   * @type Action
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  action: string;
}

// Type aliases for ActionExecutionSpecification
export type ActionExecutionSpecificationInput = Partial<IActionExecutionSpecification>;
export type ActionExecutionSpecificationOutput = IActionExecutionSpecification;
