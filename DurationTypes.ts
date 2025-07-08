import { Duration } from './Duration';
import { IDuration } from './IDuration';
import { IObservation } from './IObservation';
import { IValueSpecification } from './IValueSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Duration
 */
export type PartialDuration = Partial<IDuration>;
export type RequiredDuration = Required<IDuration>;
export type DurationUnion = IDuration | IValueSpecification;
export type DurationFactory = () => Duration;
export type DurationValidator = (instance: IDuration) => ValidationResult;
