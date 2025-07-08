/**
 * Interface for LiteralString
 * 
 * @since UML 2.5
 * @package uml
 * @extends LiteralSpecification
 */
import { ILiteralSpecification } from './ILiteralSpecification';

export interface ILiteralString extends ILiteralSpecification {
  /**
   * value
   * 
   * @type String
   * @multiplicity [0..1]
   */
  value?: string;
}

// Type aliases for LiteralString
export type LiteralStringInput = Partial<ILiteralString>;
export type LiteralStringOutput = ILiteralString;
