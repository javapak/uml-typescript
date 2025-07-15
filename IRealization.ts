/**
 * Interface for Realization
 * 
 * @since UML 2.5
 * @package uml
 * @extends Abstraction
 */
import { IAbstraction } from './IAbstraction';
import { IComponentRealization } from './IComponentRealization';
import { IInterfaceRealization } from './IInterfaceRealization';
import { ISubstitution } from './ISubstitution';

export interface IRealization extends IAbstraction {
}

// Type aliases for Realization
export type RealizationInput = Partial<IRealization>;
export type RealizationOutput = IRealization;
export type RealizationUnion = IRealization | ISubstitution | IInterfaceRealization | IComponentRealization;
