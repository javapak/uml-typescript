/**
 * Interface for ExecutionOccurrenceSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @extends OccurrenceSpecification
 */
import { IExecutionSpecification } from './IExecutionSpecification';
import { IOccurrenceSpecification } from './IOccurrenceSpecification';

export interface IExecutionOccurrenceSpecification extends IOccurrenceSpecification {
  /**
   * execution
   * 
   * @type ExecutionSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  execution: string;
}

// Type aliases for ExecutionOccurrenceSpecification
export type ExecutionOccurrenceSpecificationInput = Partial<IExecutionOccurrenceSpecification>;
export type ExecutionOccurrenceSpecificationOutput = IExecutionOccurrenceSpecification;
