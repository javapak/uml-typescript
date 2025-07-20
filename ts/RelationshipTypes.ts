import { IElement } from './IElement';
import { IRelationship } from './IRelationship';
import { Relationship } from './Relationship';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Relationship
 */
export type PartialRelationship = Partial<IRelationship>;
export type RequiredRelationship = Required<IRelationship>;
export type RelationshipUnion = IRelationship | IElement;
export type RelationshipFactory = () => Relationship;
export type RelationshipValidator = (instance: IRelationship) => ValidationResult;
