/**
 * Interface for Abstraction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Dependency
 */
import { IDependency } from './IDependency';
import { IManifestation } from './IManifestation';
import { IOpaqueExpression } from './IOpaqueExpression';
import { IRealization } from './IRealization';
import { OpaqueExpression } from './OpaqueExpression';

export interface IAbstraction extends IDependency {
  /**
   * mapping
   * 
   * @type OpaqueExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  mapping?: IOpaqueExpression;
}

// Type aliases for Abstraction
export type AbstractionInput = Partial<IAbstraction>;
export type AbstractionOutput = IAbstraction;
export type AbstractionUnion = IAbstraction | IManifestation | IRealization;
