import { IObservation } from './IObservation';
import { IPackageableElement } from './IPackageableElement';
import { Observation } from './Observation';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Observation
 */
export type PartialObservation = Partial<IObservation>;
export type RequiredObservation = Required<IObservation>;
export type ObservationUnion = IObservation | IPackageableElement;
export type ObservationFactory = () => Observation;
export type ObservationValidator = (instance: IObservation) => ValidationResult;
