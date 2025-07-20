/**
 * Interface for LiteralReal
 * 
 * @since UML 2.5
 * @package uml
 * @extends LiteralSpecification
 */
import { ILiteralSpecification } from './ILiteralSpecification';

export interface ILiteralReal extends ILiteralSpecification {
  /**
   * value
   * 
   * @type Real
   * @multiplicity [1..1]
   */
  value: number;
}

// Type aliases for LiteralReal
export type LiteralRealInput = Partial<ILiteralReal>;
export type LiteralRealOutput = ILiteralReal;
