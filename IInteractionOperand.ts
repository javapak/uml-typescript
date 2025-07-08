/**
 * Interface for InteractionOperand
 * 
 * @since UML 2.5
 * @package uml
 * @extends Namespace, InteractionFragment
 */
import { IInteractionConstraint } from './IInteractionConstraint';
import { IInteractionFragment } from './IInteractionFragment';
import { INamespace } from './INamespace';
import { InteractionConstraint } from './InteractionConstraint';
import { InteractionFragment } from './InteractionFragment';

export interface IInteractionOperand extends INamespace, IInteractionFragment {
  /**
   * fragment
   * 
   * @type InteractionFragment
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite enclosingOperand
   */
  fragment?: IInteractionFragment[];
  /**
   * guard
   * 
   * @type InteractionConstraint
   * @multiplicity [0..1]
   * @relationship containment
   */
  guard?: IInteractionConstraint;
}

// Type aliases for InteractionOperand
export type InteractionOperandInput = Partial<IInteractionOperand>;
export type InteractionOperandOutput = IInteractionOperand;
