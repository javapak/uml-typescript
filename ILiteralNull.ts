/**
 * Interface for LiteralNull
 * 
 * @since UML 2.5
 * @package uml
 * @extends LiteralSpecification
 */
import { ILiteralSpecification } from './ILiteralSpecification';

export interface ILiteralNull extends ILiteralSpecification {
}

// Type aliases for LiteralNull
export type LiteralNullInput = Partial<ILiteralNull>;
export type LiteralNullOutput = ILiteralNull;
