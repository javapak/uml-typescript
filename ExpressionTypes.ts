import { Expression } from './Expression';
import { IExpression } from './IExpression';
import { IValueSpecification } from './IValueSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Expression
 */
export type PartialExpression = Partial<IExpression>;
export type RequiredExpression = Required<IExpression>;
export type ExpressionKey = Pick<IExpression, 'name' | 'nameExpression'>;
export type ExpressionMetadata = Pick<IExpression, 'ownedComment' | 'visibility'>;
export type ExpressionSummary = Pick<IExpression, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ExpressionUnion = IExpression | IValueSpecification;
export type ExpressionFactory = () => Expression;
export type ExpressionValidator = (instance: IExpression) => ValidationResult;
