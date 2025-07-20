import { DurationInterval } from './DurationInterval';
import { IDurationInterval } from './IDurationInterval';
import { IInterval } from './IInterval';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for DurationInterval
 */
export type PartialDurationInterval = Partial<IDurationInterval>;
export type RequiredDurationInterval = Required<IDurationInterval>;
export type DurationIntervalUnion = IDurationInterval | IInterval;
export type DurationIntervalFactory = () => DurationInterval;
export type DurationIntervalValidator = (instance: IDurationInterval) => ValidationResult;
