/**
 * Interface for LiteralUnlimitedNatural
 * 
 * @since UML 2.5
 * @package uml
 * @extends LiteralSpecification
 */
import { ILiteralSpecification } from './ILiteralSpecification';

export interface ILiteralUnlimitedNatural extends ILiteralSpecification {
  /**
   * value
   * 
   * @type UnlimitedNatural
   * @multiplicity [1..1]
   */
  value: number;
}

// Type aliases for LiteralUnlimitedNatural
export type LiteralUnlimitedNaturalInput = Partial<ILiteralUnlimitedNatural>;
export type LiteralUnlimitedNaturalOutput = ILiteralUnlimitedNatural;
