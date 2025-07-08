import { DirectedRelationship } from './DirectedRelationship';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IRelationship } from './IRelationship';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for DirectedRelationship
 */
export type PartialDirectedRelationship = Partial<IDirectedRelationship>;
export type RequiredDirectedRelationship = Required<IDirectedRelationship>;
export type DirectedRelationshipUnion = IDirectedRelationship | IRelationship;
export type DirectedRelationshipFactory = () => DirectedRelationship;
export type DirectedRelationshipValidator = (instance: IDirectedRelationship) => ValidationResult;
