import { ILiteralInteger } from './ILiteralInteger';
import { ILiteralSpecification } from './ILiteralSpecification';
import { LiteralInteger } from './LiteralInteger';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for LiteralInteger
 */
export type PartialLiteralInteger = Partial<ILiteralInteger>;
export type RequiredLiteralInteger = Required<ILiteralInteger>;
export type LiteralIntegerKey = Pick<ILiteralInteger, 'name' | 'nameExpression'>;
export type LiteralIntegerMetadata = Pick<ILiteralInteger, 'ownedComment' | 'visibility'>;
export type LiteralIntegerSummary = Pick<ILiteralInteger, 'eAnnotations' | 'ownedComment' | 'name'>;
export type LiteralIntegerUnion = ILiteralInteger | ILiteralSpecification;
export type LiteralIntegerFactory = () => LiteralInteger;
export type LiteralIntegerValidator = (instance: ILiteralInteger) => ValidationResult;
