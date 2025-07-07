import { DurationConstraint } from './DurationConstraint';
import { IDurationConstraint } from './IDurationConstraint';
import { IIntervalConstraint } from './IIntervalConstraint';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for DurationConstraint
 */
export type PartialDurationConstraint = Partial<IDurationConstraint>;
export type RequiredDurationConstraint = Required<IDurationConstraint>;
export type DurationConstraintKey = Pick<IDurationConstraint, 'name' | 'nameExpression'>;
export type DurationConstraintMetadata = Pick<IDurationConstraint, 'ownedComment' | 'visibility'>;
export type DurationConstraintSummary = Pick<IDurationConstraint, 'eAnnotations' | 'ownedComment' | 'name'>;
export type DurationConstraintUnion = IDurationConstraint | IIntervalConstraint;
export type DurationConstraintFactory = () => DurationConstraint;
export type DurationConstraintValidator = (instance: IDurationConstraint) => ValidationResult;
