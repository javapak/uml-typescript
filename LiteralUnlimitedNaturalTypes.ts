import { ILiteralSpecification } from './ILiteralSpecification';
import { ILiteralUnlimitedNatural } from './ILiteralUnlimitedNatural';
import { LiteralUnlimitedNatural } from './LiteralUnlimitedNatural';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for LiteralUnlimitedNatural
 */
export type PartialLiteralUnlimitedNatural = Partial<ILiteralUnlimitedNatural>;
export type RequiredLiteralUnlimitedNatural = Required<ILiteralUnlimitedNatural>;
export type LiteralUnlimitedNaturalUnion = ILiteralUnlimitedNatural | ILiteralSpecification;
export type LiteralUnlimitedNaturalFactory = () => LiteralUnlimitedNatural;
export type LiteralUnlimitedNaturalValidator = (instance: ILiteralUnlimitedNatural) => ValidationResult;
