/**
 * Interface for LiteralBoolean
 * 
 * @since UML 2.5
 * @package uml
 * @extends LiteralSpecification
 */
import { ILiteralSpecification } from './ILiteralSpecification';

export interface ILiteralBoolean extends ILiteralSpecification {
  /**
   * value
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  value: boolean;
}

// Type aliases for LiteralBoolean
export type LiteralBooleanInput = Partial<ILiteralBoolean>;
export type LiteralBooleanOutput = ILiteralBoolean;
