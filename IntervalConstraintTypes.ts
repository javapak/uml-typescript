import { IConstraint } from './IConstraint';
import { IIntervalConstraint } from './IIntervalConstraint';
import { IntervalConstraint } from './IntervalConstraint';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for IntervalConstraint
 */
export type PartialIntervalConstraint = Partial<IIntervalConstraint>;
export type RequiredIntervalConstraint = Required<IIntervalConstraint>;
export type IntervalConstraintKey = Pick<IIntervalConstraint, 'name' | 'nameExpression'>;
export type IntervalConstraintMetadata = Pick<IIntervalConstraint, 'ownedComment' | 'visibility'>;
export type IntervalConstraintSummary = Pick<IIntervalConstraint, 'eAnnotations' | 'ownedComment' | 'name'>;
export type IntervalConstraintUnion = IIntervalConstraint | IConstraint;
export type IntervalConstraintFactory = () => IntervalConstraint;
export type IntervalConstraintValidator = (instance: IIntervalConstraint) => ValidationResult;
