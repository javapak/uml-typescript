import { IGeneralOrdering } from './IGeneralOrdering';
import { IInteractionFragment } from './IInteractionFragment';
import { IOccurrenceSpecification } from './IOccurrenceSpecification';
import { OccurrenceSpecification } from './OccurrenceSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for OccurrenceSpecification
 */
export type PartialOccurrenceSpecification = Partial<IOccurrenceSpecification>;
export type RequiredOccurrenceSpecification = Required<IOccurrenceSpecification>;
export type OccurrenceSpecificationKey = Pick<IOccurrenceSpecification, 'name' | 'nameExpression'>;
export type OccurrenceSpecificationMetadata = Pick<IOccurrenceSpecification, 'ownedComment' | 'visibility'>;
export type OccurrenceSpecificationSummary = Pick<IOccurrenceSpecification, 'eAnnotations' | 'ownedComment' | 'name'>;
export type OccurrenceSpecificationUnion = IOccurrenceSpecification | IInteractionFragment;
export type OccurrenceSpecificationFactory = () => OccurrenceSpecification;
export type OccurrenceSpecificationValidator = (instance: IOccurrenceSpecification) => ValidationResult;
