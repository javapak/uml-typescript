/**
 * Interface for LiteralInteger
 * 
 * @since UML 2.5
 * @package uml
 * @extends LiteralSpecification
 */
import { ILiteralSpecification } from './ILiteralSpecification';

export interface ILiteralInteger extends ILiteralSpecification {
  /**
   * value
   * 
   * @type Integer
   * @multiplicity [1..1]
   */
  value: number;
}

// Type aliases for LiteralInteger
export type LiteralIntegerInput = Partial<ILiteralInteger>;
export type LiteralIntegerOutput = ILiteralInteger;
