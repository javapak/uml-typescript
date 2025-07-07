import { IInterval } from './IInterval';
import { ITimeInterval } from './ITimeInterval';
import { TimeInterval } from './TimeInterval';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for TimeInterval
 */
export type PartialTimeInterval = Partial<ITimeInterval>;
export type RequiredTimeInterval = Required<ITimeInterval>;
export type TimeIntervalKey = Pick<ITimeInterval, 'name' | 'nameExpression'>;
export type TimeIntervalMetadata = Pick<ITimeInterval, 'ownedComment' | 'visibility'>;
export type TimeIntervalSummary = Pick<ITimeInterval, 'eAnnotations' | 'ownedComment' | 'name'>;
export type TimeIntervalUnion = ITimeInterval | IInterval;
export type TimeIntervalFactory = () => TimeInterval;
export type TimeIntervalValidator = (instance: ITimeInterval) => ValidationResult;
