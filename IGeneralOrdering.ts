/**
 * Interface for GeneralOrdering
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement
 */
import { INamedElement } from './INamedElement';
import { IOccurrenceSpecification } from './IOccurrenceSpecification';

export interface IGeneralOrdering extends INamedElement {
  /**
   * after
   * 
   * @type OccurrenceSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite toBefore
   */
  after: IOccurrenceSpecification | string;
  /**
   * before
   * 
   * @type OccurrenceSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite toAfter
   */
  before: IOccurrenceSpecification | string;
}

// Type aliases for GeneralOrdering
export type GeneralOrderingInput = Partial<IGeneralOrdering>;
export type GeneralOrderingOutput = IGeneralOrdering;
