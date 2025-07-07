import { IExpression } from './IExpression';
import { IStringExpression } from './IStringExpression';
import { ITemplateableElement } from './ITemplateableElement';
import { StringExpression } from './StringExpression';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for StringExpression
 */
export type PartialStringExpression = Partial<IStringExpression>;
export type RequiredStringExpression = Required<IStringExpression>;
export type StringExpressionKey = Pick<IStringExpression, 'name' | 'nameExpression'>;
export type StringExpressionMetadata = Pick<IStringExpression, 'ownedComment' | 'visibility' | 'ownedTemplateSignature'>;
export type StringExpressionSummary = Pick<IStringExpression, 'eAnnotations' | 'ownedComment' | 'name'>;
export type StringExpressionUnion = IStringExpression | IExpression | ITemplateableElement;
export type StringExpressionFactory = () => StringExpression;
export type StringExpressionValidator = (instance: IStringExpression) => ValidationResult;
