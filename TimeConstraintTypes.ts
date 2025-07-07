import { IIntervalConstraint } from './IIntervalConstraint';
import { ITimeConstraint } from './ITimeConstraint';
import { TimeConstraint } from './TimeConstraint';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for TimeConstraint
 */
export type PartialTimeConstraint = Partial<ITimeConstraint>;
export type RequiredTimeConstraint = Required<ITimeConstraint>;
export type TimeConstraintKey = Pick<ITimeConstraint, 'name' | 'nameExpression'>;
export type TimeConstraintMetadata = Pick<ITimeConstraint, 'ownedComment' | 'visibility'>;
export type TimeConstraintSummary = Pick<ITimeConstraint, 'eAnnotations' | 'ownedComment' | 'name'>;
export type TimeConstraintUnion = ITimeConstraint | IIntervalConstraint;
export type TimeConstraintFactory = () => TimeConstraint;
export type TimeConstraintValidator = (instance: ITimeConstraint) => ValidationResult;
