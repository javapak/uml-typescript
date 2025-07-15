/**
 * Interface for LiteralSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends ValueSpecification
 */
import { ILiteralBoolean } from './ILiteralBoolean';
import { ILiteralInteger } from './ILiteralInteger';
import { ILiteralNull } from './ILiteralNull';
import { ILiteralReal } from './ILiteralReal';
import { ILiteralString } from './ILiteralString';
import { ILiteralUnlimitedNatural } from './ILiteralUnlimitedNatural';
import { IValueSpecification } from './IValueSpecification';

export interface ILiteralSpecification extends IValueSpecification {
}

// Type aliases for LiteralSpecification
export type LiteralSpecificationInput = Partial<ILiteralSpecification>;
export type LiteralSpecificationOutput = ILiteralSpecification;
export type LiteralSpecificationUnion = ILiteralSpecification | ILiteralBoolean | ILiteralInteger | ILiteralNull | ILiteralReal | ILiteralString | ILiteralUnlimitedNatural;
