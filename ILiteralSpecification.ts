/**
 * Interface for LiteralSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends ValueSpecification
 */
import { IValueSpecification } from './IValueSpecification';

export interface ILiteralSpecification extends IValueSpecification {
}

// Type aliases for LiteralSpecification
export type LiteralSpecificationInput = Partial<ILiteralSpecification>;
export type LiteralSpecificationOutput = ILiteralSpecification;
export type LiteralSpecificationUnion = ILiteralSpecification | ILiteralBoolean | ILiteralInteger | ILiteralNull | ILiteralReal | ILiteralString | ILiteralUnlimitedNatural;
