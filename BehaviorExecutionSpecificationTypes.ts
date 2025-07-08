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
export type BehaviorExecutionSpecificationUnion = IBehaviorExecutionSpecification | IExecutionSpecification;
export type BehaviorExecutionSpecificationFactory = () => BehaviorExecutionSpecification;
export type BehaviorExecutionSpecificationValidator = (instance: IBehaviorExecutionSpecification) => ValidationResult;
