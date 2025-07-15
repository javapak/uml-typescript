/**
 * Interface for OccurrenceSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @extends InteractionFragment
 */
import { IExecutionOccurrenceSpecification } from './IExecutionOccurrenceSpecification';
import { IGeneralOrdering } from './IGeneralOrdering';
import { IInteractionFragment } from './IInteractionFragment';
import { IMessageOccurrenceSpecification } from './IMessageOccurrenceSpecification';

export interface IOccurrenceSpecification extends IInteractionFragment {
  /**
   * toAfter
   * 
   * @type GeneralOrdering
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite before
   */
  toAfter?: Set<string>;
  /**
   * toBefore
   * 
   * @type GeneralOrdering
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite after
   */
  toBefore?: Set<string>;
}

// Type aliases for OccurrenceSpecification
export type OccurrenceSpecificationInput = Partial<IOccurrenceSpecification>;
export type OccurrenceSpecificationOutput = IOccurrenceSpecification;
export type OccurrenceSpecificationUnion = IOccurrenceSpecification | IMessageOccurrenceSpecification | IExecutionOccurrenceSpecification;
