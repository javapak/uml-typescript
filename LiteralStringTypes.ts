import { ILiteralSpecification } from './ILiteralSpecification';
import { ILiteralString } from './ILiteralString';
import { LiteralString } from './LiteralString';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for LiteralString
 */
export type PartialLiteralString = Partial<ILiteralString>;
export type RequiredLiteralString = Required<ILiteralString>;
export type LiteralStringKey = Pick<ILiteralString, 'name' | 'nameExpression'>;
export type LiteralStringMetadata = Pick<ILiteralString, 'ownedComment' | 'visibility'>;
export type LiteralStringSummary = Pick<ILiteralString, 'eAnnotations' | 'ownedComment' | 'name'>;
export type LiteralStringUnion = ILiteralString | ILiteralSpecification;
export type LiteralStringFactory = () => LiteralString;
export type LiteralStringValidator = (instance: ILiteralString) => ValidationResult;
