/**
 * Interface for Lifeline
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement
 */
import { IConnectableElement } from './IConnectableElement';
import { IInteraction } from './IInteraction';
import { IInteractionFragment } from './IInteractionFragment';
import { INamedElement } from './INamedElement';
import { IPartDecomposition } from './IPartDecomposition';
import { IValueSpecification } from './IValueSpecification';
import { ValueSpecification } from './ValueSpecification';

export interface ILifeline extends INamedElement {
  /**
   * decomposedAs
   * 
   * @type PartDecomposition
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  decomposedAs?: string;
  /**
   * interaction
   * 
   * @type Interaction
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite lifeline
   */
  interaction: string;
  /**
   * represents
   * 
   * @type ConnectableElement
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  represents?: string;
  /**
   * selector
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  selector?: IValueSpecification;
  /**
   * coveredBy
   * 
   * @type InteractionFragment
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite covered
   */
  coveredBy?: Set<string>;
}

// Type aliases for Lifeline
export type LifelineInput = Partial<ILifeline>;
export type LifelineOutput = ILifeline;
