/**
 * Interface for Interval
 * 
 * @since UML 2.5
 * @package uml
 * @extends ValueSpecification
 */
import { IValueSpecification } from './IValueSpecification';

export interface IInterval extends IValueSpecification {
  /**
   * max
   * 
   * @type ValueSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  max: string;
  /**
   * min
   * 
   * @type ValueSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  min: string;
}

// Type aliases for Interval
export type IntervalInput = Partial<IInterval>;
export type IntervalOutput = IInterval;
export type IntervalUnion = IInterval | IDurationInterval | ITimeInterval;
