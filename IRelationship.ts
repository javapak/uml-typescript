/**
 * Interface for Relationship
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Element
 */
import { IElement } from './IElement';

export interface IRelationship extends IElement {
}

// Type aliases for Relationship
export type RelationshipInput = Partial<IRelationship>;
export type RelationshipOutput = IRelationship;
export type RelationshipUnion = IRelationship | IDirectedRelationship | IAssociation;
