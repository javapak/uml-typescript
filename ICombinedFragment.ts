/**
 * Interface for CombinedFragment
 * 
 * @since UML 2.5
 * @package uml
 * @extends InteractionFragment
 */
import { Gate } from './Gate';
import { IConsiderIgnoreFragment } from './IConsiderIgnoreFragment';
import { IGate } from './IGate';
import { IInteractionFragment } from './IInteractionFragment';
import { IInteractionOperand } from './IInteractionOperand';
import { InteractionOperand } from './InteractionOperand';
import { InteractionOperatorKind } from './InteractionOperatorKind';

export interface ICombinedFragment extends IInteractionFragment {
  /**
   * cfragmentGate
   * 
   * @type Gate
   * @multiplicity [0..*]
   * @relationship containment
   */
  cfragmentGate?: Set<IGate>;
  /**
   * interactionOperator
   * 
   * @type InteractionOperatorKind
   * @multiplicity [1..1]
   */
  interactionOperator: InteractionOperatorKind;
  /**
   * operand
   * 
   * @type InteractionOperand
   * @multiplicity [1..*]
   * @relationship containment
   */
  operand: IInteractionOperand[];
}

// Type aliases for CombinedFragment
export type CombinedFragmentInput = Partial<ICombinedFragment>;
export type CombinedFragmentOutput = ICombinedFragment;
export type CombinedFragmentUnion = ICombinedFragment | IConsiderIgnoreFragment;
