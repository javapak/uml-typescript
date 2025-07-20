/**
 * Interface for Include
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement, DirectedRelationship
 */
import { IDirectedRelationship } from './IDirectedRelationship';
import { INamedElement } from './INamedElement';
import { IUseCase } from './IUseCase';

export interface IInclude extends INamedElement, IDirectedRelationship {
  /**
   * addition
   * 
   * @type UseCase
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  addition: string;
  /**
   * includingCase
   * 
   * @type UseCase
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite include
   */
  includingCase: string;
}

// Type aliases for Include
export type IncludeInput = Partial<IInclude>;
export type IncludeOutput = IInclude;
