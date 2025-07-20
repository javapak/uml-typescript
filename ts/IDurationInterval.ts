/**
 * Interface for DurationInterval
 * 
 * @since UML 2.5
 * @package uml
 * @extends Interval
 */
import { IInterval } from './IInterval';

export interface IDurationInterval extends IInterval {
}

// Type aliases for DurationInterval
export type DurationIntervalInput = Partial<IDurationInterval>;
export type DurationIntervalOutput = IDurationInterval;
