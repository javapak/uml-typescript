import { ExecutionSpecification } from './ExecutionSpecification';
import { IExecutionSpecification } from './IExecutionSpecification';
import { IInteractionFragment } from './IInteractionFragment';
import { IOccurrenceSpecification } from './IOccurrenceSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ExecutionSpecification
 */
export type PartialExecutionSpecification = Partial<IExecutionSpecification>;
export type RequiredExecutionSpecification = Required<IExecutionSpecification>;
export type ExecutionSpecificationKey = Pick<IExecutionSpecification, 'name' | 'nameExpression'>;
export type ExecutionSpecificationMetadata = Pick<IExecutionSpecification, 'ownedComment' | 'visibility'>;
export type ExecutionSpecificationSummary = Pick<IExecutionSpecification, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ExecutionSpecificationUnion = IExecutionSpecification | IInteractionFragment;
export type ExecutionSpecificationFactory = () => ExecutionSpecification;
export type ExecutionSpecificationValidator = (instance: IExecutionSpecification) => ValidationResult;
