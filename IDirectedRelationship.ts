/**
 * Interface for DirectedRelationship
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Relationship
 */
import { IDependency } from './IDependency';
import { IElementImport } from './IElementImport';
import { IExtend } from './IExtend';
import { IGeneralization } from './IGeneralization';
import { IInclude } from './IInclude';
import { IInformationFlow } from './IInformationFlow';
import { IPackageImport } from './IPackageImport';
import { IPackageMerge } from './IPackageMerge';
import { IProfileApplication } from './IProfileApplication';
import { IProtocolConformance } from './IProtocolConformance';
import { IRelationship } from './IRelationship';
import { ITemplateBinding } from './ITemplateBinding';

export interface IDirectedRelationship extends IRelationship {
}

// Type aliases for DirectedRelationship
export type DirectedRelationshipInput = Partial<IDirectedRelationship>;
export type DirectedRelationshipOutput = IDirectedRelationship;
export type DirectedRelationshipUnion = IDirectedRelationship | ITemplateBinding | IDependency | IProtocolConformance | IPackageMerge | IProfileApplication | IElementImport | IPackageImport | IGeneralization | IExtend | IInclude | IInformationFlow;
