import { IInterval } from './IInterval';
import { IValueSpecification } from './IValueSpecification';
import { Interval } from './Interval';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Interval
 */
export type PartialInterval = Partial<IInterval>;
export type RequiredInterval = Required<IInterval>;
export type IntervalUnion = IInterval | IValueSpecification;
export type IntervalFactory = () => Interval;
export type IntervalValidator = (instance: IInterval) => ValidationResult;
