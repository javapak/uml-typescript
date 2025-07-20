import { IAbstraction } from './IAbstraction';
import { IRealization } from './IRealization';
import { Realization } from './Realization';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Realization
 */
export type PartialRealization = Partial<IRealization>;
export type RequiredRealization = Required<IRealization>;
export type RealizationUnion = IRealization | IAbstraction;
export type RealizationFactory = () => Realization;
export type RealizationValidator = (instance: IRealization) => ValidationResult;
