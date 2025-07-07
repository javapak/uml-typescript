import { IObservation } from './IObservation';
import { ITimeExpression } from './ITimeExpression';
import { IValueSpecification } from './IValueSpecification';
import { TimeExpression } from './TimeExpression';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for TimeExpression
 */
export type PartialTimeExpression = Partial<ITimeExpression>;
export type RequiredTimeExpression = Required<ITimeExpression>;
export type TimeExpressionKey = Pick<ITimeExpression, 'name' | 'nameExpression'>;
export type TimeExpressionMetadata = Pick<ITimeExpression, 'ownedComment' | 'visibility'>;
export type TimeExpressionSummary = Pick<ITimeExpression, 'eAnnotations' | 'ownedComment' | 'name'>;
export type TimeExpressionUnion = ITimeExpression | IValueSpecification;
export type TimeExpressionFactory = () => TimeExpression;
export type TimeExpressionValidator = (instance: ITimeExpression) => ValidationResult;
