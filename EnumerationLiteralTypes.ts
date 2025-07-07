import { EnumerationLiteral } from './EnumerationLiteral';
import { IEnumeration } from './IEnumeration';
import { IEnumerationLiteral } from './IEnumerationLiteral';
import { IInstanceSpecification } from './IInstanceSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for EnumerationLiteral
 */
export type PartialEnumerationLiteral = Partial<IEnumerationLiteral>;
export type RequiredEnumerationLiteral = Required<IEnumerationLiteral>;
export type EnumerationLiteralKey = Pick<IEnumerationLiteral, 'name' | 'nameExpression'>;
export type EnumerationLiteralMetadata = Pick<IEnumerationLiteral, 'ownedComment' | 'visibility'>;
export type EnumerationLiteralSummary = Pick<IEnumerationLiteral, 'eAnnotations' | 'ownedComment' | 'name'>;
export type EnumerationLiteralUnion = IEnumerationLiteral | IInstanceSpecification;
export type EnumerationLiteralFactory = () => EnumerationLiteral;
export type EnumerationLiteralValidator = (instance: IEnumerationLiteral) => ValidationResult;
