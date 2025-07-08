import { ILiteralBoolean } from './ILiteralBoolean';
import { ILiteralSpecification } from './ILiteralSpecification';
import { LiteralBoolean } from './LiteralBoolean';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for LiteralBoolean
 */
export type PartialLiteralBoolean = Partial<ILiteralBoolean>;
export type RequiredLiteralBoolean = Required<ILiteralBoolean>;
export type LiteralBooleanUnion = ILiteralBoolean | ILiteralSpecification;
export type LiteralBooleanFactory = () => LiteralBoolean;
export type LiteralBooleanValidator = (instance: ILiteralBoolean) => ValidationResult;
