import { ILiteralInteger } from './ILiteralInteger';
import { ILiteralSpecification } from './ILiteralSpecification';
import { LiteralInteger } from './LiteralInteger';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for LiteralInteger
 */
export type PartialLiteralInteger = Partial<ILiteralInteger>;
export type RequiredLiteralInteger = Required<ILiteralInteger>;
export type LiteralIntegerUnion = ILiteralInteger | ILiteralSpecification;
export type LiteralIntegerFactory = () => LiteralInteger;
export type LiteralIntegerValidator = (instance: ILiteralInteger) => ValidationResult;
