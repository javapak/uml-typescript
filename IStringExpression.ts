/**
 * Interface for StringExpression
 * 
 * @since UML 2.5
 * @package uml
 * @extends Expression, TemplateableElement
 */
import { IExpression } from './IExpression';
import { ITemplateableElement } from './ITemplateableElement';

export interface IStringExpression extends IExpression, ITemplateableElement {
  /**
   * owningExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite subExpression
   */
  owningExpression?: string;
  /**
   * subExpression
   * 
   * @type StringExpression
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite owningExpression
   */
  subExpression?: IStringExpression[];
}

// Type aliases for StringExpression
export type StringExpressionInput = Partial<IStringExpression>;
export type StringExpressionOutput = IStringExpression;
