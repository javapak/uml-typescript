import { Actor } from './Actor';
import { IActor } from './IActor';
import { IBehavioredClassifier } from './IBehavioredClassifier';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Actor
 */
export type PartialActor = Partial<IActor>;
export type RequiredActor = Required<IActor>;
export type ActorKey = Pick<IActor, 'name' | 'nameExpression'>;
export type ActorMetadata = Pick<IActor, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedBehavior'>;
export type ActorSummary = Pick<IActor, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ActorUnion = IActor | IBehavioredClassifier;
export type ActorFactory = () => Actor;
export type ActorValidator = (instance: IActor) => ValidationResult;
