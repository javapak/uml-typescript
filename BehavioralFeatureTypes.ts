import { BehavioralFeature } from './BehavioralFeature';
import { CallConcurrencyKind } from './CallConcurrencyKind';
import { IBehavior } from './IBehavior';
import { IBehavioralFeature } from './IBehavioralFeature';
import { IFeature } from './IFeature';
import { INamespace } from './INamespace';
import { IParameter } from './IParameter';
import { IParameterSet } from './IParameterSet';
import { IType } from './IType';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for BehavioralFeature
 */
export type PartialBehavioralFeature = Partial<IBehavioralFeature>;
export type RequiredBehavioralFeature = Required<IBehavioralFeature>;
export type BehavioralFeatureUnion = IBehavioralFeature | INamespace | IFeature;
export type BehavioralFeatureFactory = () => BehavioralFeature;
export type BehavioralFeatureValidator = (instance: IBehavioralFeature) => ValidationResult;
