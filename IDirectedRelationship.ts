/**
 * Interface for DirectedRelationship
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Relationship
 */
import { IRelationship } from './IRelationship';

export interface IDirectedRelationship extends IRelationship {
}

// Type aliases for DirectedRelationship
export type DirectedRelationshipInput = Partial<IDirectedRelationship>;
export type DirectedRelationshipOutput = IDirectedRelationship;
export type DirectedRelationshipUnion = IDirectedRelationship | ITemplateBinding | IDependency | IProtocolConformance | IPackageMerge | IProfileApplication | IElementImport | IPackageImport | IGeneralization | IExtend | IInclude | IInformationFlow;
