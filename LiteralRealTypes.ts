import { ILiteralReal } from './ILiteralReal';
import { ILiteralSpecification } from './ILiteralSpecification';
import { LiteralReal } from './LiteralReal';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for LiteralReal
 */
export type PartialLiteralReal = Partial<ILiteralReal>;
export type RequiredLiteralReal = Required<ILiteralReal>;
export type LiteralRealKey = Pick<ILiteralReal, 'name' | 'nameExpression'>;
export type LiteralRealMetadata = Pick<ILiteralReal, 'ownedComment' | 'visibility'>;
export type LiteralRealSummary = Pick<ILiteralReal, 'eAnnotations' | 'ownedComment' | 'name'>;
export type LiteralRealUnion = ILiteralReal | ILiteralSpecification;
export type LiteralRealFactory = () => LiteralReal;
export type LiteralRealValidator = (instance: ILiteralReal) => ValidationResult;
