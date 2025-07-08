import { Actor } from './Actor';
import { IActor } from './IActor';
import { IBehavioredClassifier } from './IBehavioredClassifier';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Actor
 */
export type PartialActor = Partial<IActor>;
export type RequiredActor = Required<IActor>;
export type ActorUnion = IActor | IBehavioredClassifier;
export type ActorFactory = () => Actor;
export type ActorValidator = (instance: IActor) => ValidationResult;
