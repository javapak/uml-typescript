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
export type AbstractionKey = Pick<IAbstraction, 'name' | 'nameExpression'>;
export type AbstractionMetadata = Pick<IAbstraction, 'ownedComment' | 'visibility'>;
export type AbstractionSummary = Pick<IAbstraction, 'eAnnotations' | 'ownedComment' | 'name'>;
export type AbstractionUnion = IAbstraction | IDependency;
export type AbstractionFactory = () => Abstraction;
export type AbstractionValidator = (instance: IAbstraction) => ValidationResult;
