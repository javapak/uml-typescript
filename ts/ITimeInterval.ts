/**
 * Interface for TimeInterval
 * 
 * @since UML 2.5
 * @package uml
 * @extends Interval
 */
import { IInterval } from './IInterval';

export interface ITimeInterval extends IInterval {
}

// Type aliases for TimeInterval
export type TimeIntervalInput = Partial<ITimeInterval>;
export type TimeIntervalOutput = ITimeInterval;
