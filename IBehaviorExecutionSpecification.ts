/**
 * Interface for BehaviorExecutionSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @extends ExecutionSpecification
 */
import { IBehavior } from './IBehavior';
import { IExecutionSpecification } from './IExecutionSpecification';

export interface IBehaviorExecutionSpecification extends IExecutionSpecification {
  /**
   * behavior
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  behavior?: IBehavior | string;
}

// Type aliases for BehaviorExecutionSpecification
export type BehaviorExecutionSpecificationInput = Partial<IBehaviorExecutionSpecification>;
export type BehaviorExecutionSpecificationOutput = IBehaviorExecutionSpecification;
