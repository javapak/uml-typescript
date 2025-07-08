import { IInterval } from './IInterval';
import { ITimeInterval } from './ITimeInterval';
import { TimeInterval } from './TimeInterval';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for TimeInterval
 */
export type PartialTimeInterval = Partial<ITimeInterval>;
export type RequiredTimeInterval = Required<ITimeInterval>;
export type TimeIntervalUnion = ITimeInterval | IInterval;
export type TimeIntervalFactory = () => TimeInterval;
export type TimeIntervalValidator = (instance: ITimeInterval) => ValidationResult;
