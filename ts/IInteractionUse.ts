/**
 * Interface for InteractionUse
 * 
 * @since UML 2.5
 * @package uml
 * @extends InteractionFragment
 */
import { Gate } from './Gate';
import { IGate } from './IGate';
import { IInteraction } from './IInteraction';
import { IInteractionFragment } from './IInteractionFragment';
import { IPartDecomposition } from './IPartDecomposition';
import { IProperty } from './IProperty';
import { IValueSpecification } from './IValueSpecification';
import { ValueSpecification } from './ValueSpecification';

export interface IInteractionUse extends IInteractionFragment {
  /**
   * actualGate
   * 
   * @type Gate
   * @multiplicity [0..*]
   * @relationship containment
   */
  actualGate?: Set<IGate>;
  /**
   * argument
   * 
   * @type ValueSpecification
   * @multiplicity [0..*]
   * @relationship containment
   */
  argument?: IValueSpecification[];
  /**
   * refersTo
   * 
   * @type Interaction
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  refersTo: string;
  /**
   * returnValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  returnValue?: IValueSpecification;
  /**
   * returnValueRecipient
   * 
   * @type Property
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  returnValueRecipient?: string;
}

// Type aliases for InteractionUse
export type InteractionUseInput = Partial<IInteractionUse>;
export type InteractionUseOutput = IInteractionUse;
export type InteractionUseUnion = IInteractionUse | IPartDecomposition;
