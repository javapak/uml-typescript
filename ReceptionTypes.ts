import { IBehavioralFeature } from './IBehavioralFeature';
import { IReception } from './IReception';
import { ISignal } from './ISignal';
import { Reception } from './Reception';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Reception
 */
export type PartialReception = Partial<IReception>;
export type RequiredReception = Required<IReception>;
export type ReceptionUnion = IReception | IBehavioralFeature;
export type ReceptionFactory = () => Reception;
export type ReceptionValidator = (instance: IReception) => ValidationResult;
