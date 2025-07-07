/**
 * Interface for Extend
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement, DirectedRelationship
 */
import { Constraint } from './Constraint';
import { IConstraint } from './IConstraint';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IExtensionPoint } from './IExtensionPoint';
import { INamedElement } from './INamedElement';
import { IUseCase } from './IUseCase';

export interface IExtend extends INamedElement, IDirectedRelationship {
  /**
   * condition
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship containment
   */
  condition?: IConstraint;
  /**
   * extendedCase
   * 
   * @type UseCase
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  extendedCase: IUseCase | string;
  /**
   * extensionLocation
   * 
   * @type ExtensionPoint
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  extensionLocation: IExtensionPoint | string[];
  /**
   * extension
   * 
   * @type UseCase
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite extend
   */
  extension: IUseCase | string;
}

// Type aliases for Extend
export type ExtendInput = Partial<IExtend>;
export type ExtendOutput = IExtend;
