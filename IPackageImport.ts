/**
 * Interface for PackageImport
 * 
 * @since UML 2.5
 * @package uml
 * @extends DirectedRelationship
 */
import { IDirectedRelationship } from './IDirectedRelationship';
import { INamespace } from './INamespace';
import { IPackage } from './IPackage';
import { VisibilityKind } from './VisibilityKind';

export interface IPackageImport extends IDirectedRelationship {
  /**
   * importedPackage
   * 
   * @type Package
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  importedPackage: string;
  /**
   * importingNamespace
   * 
   * @type Namespace
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite packageImport
   */
  importingNamespace: string;
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [1..1]
   */
  visibility: VisibilityKind;
}

// Type aliases for PackageImport
export type PackageImportInput = Partial<IPackageImport>;
export type PackageImportOutput = IPackageImport;
