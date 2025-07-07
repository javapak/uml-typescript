import { BehaviorExecutionSpecification } from './BehaviorExecutionSpecification';
import { IBehavior } from './IBehavior';
import { IBehaviorExecutionSpecification } from './IBehaviorExecutionSpecification';
import { IExecutionSpecification } from './IExecutionSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for BehaviorExecutionSpecification
 */
export type PartialBehaviorExecutionSpecification = Partial<IBehaviorExecutionSpecification>;
export type RequiredBehaviorExecutionSpecification = Required<IBehaviorExecutionSpecification>;
export type BehaviorExecutionSpecificationKey = Pick<IBehaviorExecutionSpecification, 'name' | 'nameExpression'>;
export type BehaviorExecutionSpecificationMetadata = Pick<IBehaviorExecutionSpecification, 'ownedComment' | 'visibility'>;
export type BehaviorExecutionSpecificationSummary = Pick<IBehaviorExecutionSpecification, 'eAnnotations' | 'ownedComment' | 'name'>;
export type BehaviorExecutionSpecificationUnion = IBehaviorExecutionSpecification | IExecutionSpecification;
export type BehaviorExecutionSpecificationFactory = () => BehaviorExecutionSpecification;
export type BehaviorExecutionSpecificationValidator = (instance: IBehaviorExecutionSpecification) => ValidationResult;
