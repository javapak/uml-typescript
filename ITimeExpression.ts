/**
 * Interface for TimeExpression
 * 
 * @since UML 2.5
 * @package uml
 * @extends ValueSpecification
 */
import { IObservation } from './IObservation';
import { IValueSpecification } from './IValueSpecification';
import { ValueSpecification } from './ValueSpecification';

export interface ITimeExpression extends IValueSpecification {
  /**
   * expr
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  expr?: IValueSpecification;
  /**
   * observation
   * 
   * @type Observation
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  observation: Set<IObservation | string>;
}

// Type aliases for TimeExpression
export type TimeExpressionInput = Partial<ITimeExpression>;
export type TimeExpressionOutput = ITimeExpression;
