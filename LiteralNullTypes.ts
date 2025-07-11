import { ILiteralNull } from './ILiteralNull';
import { ILiteralSpecification } from './ILiteralSpecification';
import { LiteralNull } from './LiteralNull';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for LiteralNull
 */
export type PartialLiteralNull = Partial<ILiteralNull>;
export type RequiredLiteralNull = Required<ILiteralNull>;
export type LiteralNullUnion = ILiteralNull | ILiteralSpecification;
export type LiteralNullFactory = () => LiteralNull;
export type LiteralNullValidator = (instance: ILiteralNull) => ValidationResult;
