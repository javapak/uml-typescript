import { Abstraction } from './Abstraction';
import { IAbstraction } from './IAbstraction';
import { IDependency } from './IDependency';
import { IOpaqueExpression } from './IOpaqueExpression';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Abstraction
 */
export type PartialAbstraction = Partial<IAbstraction>;
export type RequiredAbstraction = Required<IAbstraction>;
export type AbstractionUnion = IAbstraction | IDependency;
export type AbstractionFactory = () => Abstraction;
export type AbstractionValidator = (instance: IAbstraction) => ValidationResult;
