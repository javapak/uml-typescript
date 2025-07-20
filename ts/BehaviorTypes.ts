import { Behavior } from './Behavior';
import { IBehavior } from './IBehavior';
import { IBehavioralFeature } from './IBehavioralFeature';
import { IClass } from './IClass';
import { IConstraint } from './IConstraint';
import { IParameter } from './IParameter';
import { IParameterSet } from './IParameterSet';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Behavior
 */
export type PartialBehavior = Partial<IBehavior>;
export type RequiredBehavior = Required<IBehavior>;
export type BehaviorUnion = IBehavior | IClass;
export type BehaviorFactory = () => Behavior;
export type BehaviorValidator = (instance: IBehavior) => ValidationResult;
