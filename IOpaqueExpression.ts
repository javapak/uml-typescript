/**
 * Interface for OpaqueExpression
 * 
 * @since UML 2.5
 * @package uml
 * @extends ValueSpecification
 */
import { IBehavior } from './IBehavior';
import { IValueSpecification } from './IValueSpecification';

export interface IOpaqueExpression extends IValueSpecification {
  /**
   * behavior
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  behavior?: IBehavior | string;
  /**
   * body
   * 
   * @type String
   * @multiplicity [0..*]
   */
  body: string[];
  /**
   * language
   * 
   * @type String
   * @multiplicity [0..*]
   */
  language: string[];
}

// Type aliases for OpaqueExpression
export type OpaqueExpressionInput = Partial<IOpaqueExpression>;
export type OpaqueExpressionOutput = IOpaqueExpression;
