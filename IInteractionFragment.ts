/**
 * Interface for InteractionFragment
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { GeneralOrdering } from './GeneralOrdering';
import { IGeneralOrdering } from './IGeneralOrdering';
import { IInteraction } from './IInteraction';
import { IInteractionOperand } from './IInteractionOperand';
import { ILifeline } from './ILifeline';
import { INamedElement } from './INamedElement';

export interface IInteractionFragment extends INamedElement {
  /**
   * covered
   * 
   * @type Lifeline
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite coveredBy
   */
  covered?: Set<string>;
  /**
   * enclosingOperand
   * 
   * @type InteractionOperand
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite fragment
   */
  enclosingOperand?: string;
  /**
   * enclosingInteraction
   * 
   * @type Interaction
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite fragment
   */
  enclosingInteraction?: string;
  /**
   * generalOrdering
   * 
   * @type GeneralOrdering
   * @multiplicity [0..*]
   * @relationship containment
   */
  generalOrdering?: Set<IGeneralOrdering>;
}

// Type aliases for InteractionFragment
export type InteractionFragmentInput = Partial<IInteractionFragment>;
export type InteractionFragmentOutput = IInteractionFragment;
export type InteractionFragmentUnion = IInteractionFragment | IInteraction | IInteractionUse | IInteractionOperand | IOccurrenceSpecification | IExecutionSpecification | ICombinedFragment | IContinuation | IStateInvariant;
