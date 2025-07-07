/**
 * Interface for Dependency
 * 
 * @since UML 2.5
 * @package uml
 * @extends PackageableElement, DirectedRelationship
 */
import { IDirectedRelationship } from './IDirectedRelationship';
import { INamedElement } from './INamedElement';
import { IPackageableElement } from './IPackageableElement';

export interface IDependency extends IPackageableElement, IDirectedRelationship {
  /**
   * client
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  client: Set<INamedElement | string>;
  /**
   * supplier
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  supplier: Set<INamedElement | string>;
}

// Type aliases for Dependency
export type DependencyInput = Partial<IDependency>;
export type DependencyOutput = IDependency;
export type DependencyUnion = IDependency | IDeployment | IAbstraction | IUsage;
