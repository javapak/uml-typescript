/**
 * Interface for InteractionConstraint
 * 
 * @since UML 2.5
 * @package uml
 * @extends Constraint
 */
import { IConstraint } from './IConstraint';
import { IValueSpecification } from './IValueSpecification';
import { ValueSpecification } from './ValueSpecification';

export interface IInteractionConstraint extends IConstraint {
  /**
   * maxint
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  maxint?: IValueSpecification;
  /**
   * minint
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  minint?: IValueSpecification;
}

// Type aliases for InteractionConstraint
export type InteractionConstraintInput = Partial<IInteractionConstraint>;
export type InteractionConstraintOutput = IInteractionConstraint;
