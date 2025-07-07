import { DurationInterval } from './DurationInterval';
import { IDurationInterval } from './IDurationInterval';
import { IInterval } from './IInterval';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for DurationInterval
 */
export type PartialDurationInterval = Partial<IDurationInterval>;
export type RequiredDurationInterval = Required<IDurationInterval>;
export type DurationIntervalKey = Pick<IDurationInterval, 'name' | 'nameExpression'>;
export type DurationIntervalMetadata = Pick<IDurationInterval, 'ownedComment' | 'visibility'>;
export type DurationIntervalSummary = Pick<IDurationInterval, 'eAnnotations' | 'ownedComment' | 'name'>;
export type DurationIntervalUnion = IDurationInterval | IInterval;
export type DurationIntervalFactory = () => DurationInterval;
export type DurationIntervalValidator = (instance: IDurationInterval) => ValidationResult;
