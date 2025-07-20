import { INamedElement } from './INamedElement';
import { IObservation } from './IObservation';
import { ITimeObservation } from './ITimeObservation';
import { TimeObservation } from './TimeObservation';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for TimeObservation
 */
export type PartialTimeObservation = Partial<ITimeObservation>;
export type RequiredTimeObservation = Required<ITimeObservation>;
export type TimeObservationUnion = ITimeObservation | IObservation;
export type TimeObservationFactory = () => TimeObservation;
export type TimeObservationValidator = (instance: ITimeObservation) => ValidationResult;
