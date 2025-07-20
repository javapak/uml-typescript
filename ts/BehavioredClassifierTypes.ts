import { BehavioredClassifier } from './BehavioredClassifier';
import { IBehavior } from './IBehavior';
import { IBehavioredClassifier } from './IBehavioredClassifier';
import { IClassifier } from './IClassifier';
import { IInterfaceRealization } from './IInterfaceRealization';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for BehavioredClassifier
 */
export type PartialBehavioredClassifier = Partial<IBehavioredClassifier>;
export type RequiredBehavioredClassifier = Required<IBehavioredClassifier>;
export type BehavioredClassifierUnion = IBehavioredClassifier | IClassifier;
export type BehavioredClassifierFactory = () => BehavioredClassifier;
export type BehavioredClassifierValidator = (instance: IBehavioredClassifier) => ValidationResult;
