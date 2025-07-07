import { Duration } from './Duration';
import { IDuration } from './IDuration';
import { IObservation } from './IObservation';
import { IValueSpecification } from './IValueSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Duration
 */
export type PartialDuration = Partial<IDuration>;
export type RequiredDuration = Required<IDuration>;
export type DurationKey = Pick<IDuration, 'name' | 'nameExpression'>;
export type DurationMetadata = Pick<IDuration, 'ownedComment' | 'visibility'>;
export type DurationSummary = Pick<IDuration, 'eAnnotations' | 'ownedComment' | 'name'>;
export type DurationUnion = IDuration | IValueSpecification;
export type DurationFactory = () => Duration;
export type DurationValidator = (instance: IDuration) => ValidationResult;
