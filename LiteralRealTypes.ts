import { ILiteralReal } from './ILiteralReal';
import { ILiteralSpecification } from './ILiteralSpecification';
import { LiteralReal } from './LiteralReal';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for LiteralReal
 */
export type PartialLiteralReal = Partial<ILiteralReal>;
export type RequiredLiteralReal = Required<ILiteralReal>;
export type LiteralRealUnion = ILiteralReal | ILiteralSpecification;
export type LiteralRealFactory = () => LiteralReal;
export type LiteralRealValidator = (instance: ILiteralReal) => ValidationResult;
