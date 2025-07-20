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
export type OccurrenceSpecificationUnion = IOccurrenceSpecification | IInteractionFragment;
export type OccurrenceSpecificationFactory = () => OccurrenceSpecification;
export type OccurrenceSpecificationValidator = (instance: IOccurrenceSpecification) => ValidationResult;
