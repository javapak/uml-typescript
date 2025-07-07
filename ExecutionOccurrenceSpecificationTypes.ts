import { ExecutionOccurrenceSpecification } from './ExecutionOccurrenceSpecification';
import { IExecutionOccurrenceSpecification } from './IExecutionOccurrenceSpecification';
import { IExecutionSpecification } from './IExecutionSpecification';
import { IOccurrenceSpecification } from './IOccurrenceSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ExecutionOccurrenceSpecification
 */
export type PartialExecutionOccurrenceSpecification = Partial<IExecutionOccurrenceSpecification>;
export type RequiredExecutionOccurrenceSpecification = Required<IExecutionOccurrenceSpecification>;
export type ExecutionOccurrenceSpecificationKey = Pick<IExecutionOccurrenceSpecification, 'name' | 'nameExpression'>;
export type ExecutionOccurrenceSpecificationMetadata = Pick<IExecutionOccurrenceSpecification, 'ownedComment' | 'visibility'>;
export type ExecutionOccurrenceSpecificationSummary = Pick<IExecutionOccurrenceSpecification, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ExecutionOccurrenceSpecificationUnion = IExecutionOccurrenceSpecification | IOccurrenceSpecification;
export type ExecutionOccurrenceSpecificationFactory = () => ExecutionOccurrenceSpecification;
export type ExecutionOccurrenceSpecificationValidator = (instance: IExecutionOccurrenceSpecification) => ValidationResult;
