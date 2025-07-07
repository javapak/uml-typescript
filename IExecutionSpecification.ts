/**
 * Interface for ExecutionSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends InteractionFragment
 */
import { IInteractionFragment } from './IInteractionFragment';
import { IOccurrenceSpecification } from './IOccurrenceSpecification';

export interface IExecutionSpecification extends IInteractionFragment {
  /**
   * finish
   * 
   * @type OccurrenceSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  finish: IOccurrenceSpecification | string;
  /**
   * start
   * 
   * @type OccurrenceSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  start: IOccurrenceSpecification | string;
}

// Type aliases for ExecutionSpecification
export type ExecutionSpecificationInput = Partial<IExecutionSpecification>;
export type ExecutionSpecificationOutput = IExecutionSpecification;
export type ExecutionSpecificationUnion = IExecutionSpecification | IActionExecutionSpecification | IBehaviorExecutionSpecification;
