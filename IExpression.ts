/**
 * Interface for Expression
 * 
 * @since UML 2.5
 * @package uml
 * @extends ValueSpecification
 */
import { IValueSpecification } from './IValueSpecification';
import { ValueSpecification } from './ValueSpecification';

export interface IExpression extends IValueSpecification {
  /**
   * operand
   * 
   * @type ValueSpecification
   * @multiplicity [0..*]
   * @relationship containment
   */
  operand?: IValueSpecification[];
  /**
   * symbol
   * 
   * @type String
   * @multiplicity [0..1]
   */
  symbol?: string;
}

// Type aliases for Expression
export type ExpressionInput = Partial<IExpression>;
export type ExpressionOutput = IExpression;
export type ExpressionUnion = IExpression | IStringExpression;
