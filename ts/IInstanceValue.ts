/**
 * Interface for InstanceValue
 * 
 * @since UML 2.5
 * @package uml
 * @extends ValueSpecification
 */
import { IInstanceSpecification } from './IInstanceSpecification';
import { IValueSpecification } from './IValueSpecification';

export interface IInstanceValue extends IValueSpecification {
  /**
   * instance
   * 
   * @type InstanceSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  instance: string;
}

// Type aliases for InstanceValue
export type InstanceValueInput = Partial<IInstanceValue>;
export type InstanceValueOutput = IInstanceValue;
