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
export type ExecutionOccurrenceSpecificationUnion = IExecutionOccurrenceSpecification | IOccurrenceSpecification;
export type ExecutionOccurrenceSpecificationFactory = () => ExecutionOccurrenceSpecification;
export type ExecutionOccurrenceSpecificationValidator = (instance: IExecutionOccurrenceSpecification) => ValidationResult;
