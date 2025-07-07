/**
 * Interface for Actor
 * 
 * @since UML 2.5
 * @package uml
 * @extends BehavioredClassifier
 */
import { IBehavioredClassifier } from './IBehavioredClassifier';

export interface IActor extends IBehavioredClassifier {
}

// Type aliases for Actor
export type ActorInput = Partial<IActor>;
export type ActorOutput = IActor;
