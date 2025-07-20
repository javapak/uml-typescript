import { DurationObservation } from './DurationObservation';
import { IDurationObservation } from './IDurationObservation';
import { INamedElement } from './INamedElement';
import { IObservation } from './IObservation';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for DurationObservation
 */
export type PartialDurationObservation = Partial<IDurationObservation>;
export type RequiredDurationObservation = Required<IDurationObservation>;
export type DurationObservationUnion = IDurationObservation | IObservation;
export type DurationObservationFactory = () => DurationObservation;
export type DurationObservationValidator = (instance: IDurationObservation) => ValidationResult;
