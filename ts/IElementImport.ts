/**
 * Interface for ElementImport
 * 
 * @since UML 2.5
 * @package uml
 * @extends DirectedRelationship
 */
import { IDirectedRelationship } from './IDirectedRelationship';
import { INamespace } from './INamespace';
import { IPackageableElement } from './IPackageableElement';
import { VisibilityKind } from './VisibilityKind';

export interface IElementImport extends IDirectedRelationship {
  /**
   * alias
   * 
   * @type String
   * @multiplicity [0..1]
   */
  alias?: string;
  /**
   * importedElement
   * 
   * @type PackageableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  importedElement: string;
  /**
   * importingNamespace
   * 
   * @type Namespace
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite elementImport
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

// Type aliases for ElementImport
export type ElementImportInput = Partial<IElementImport>;
export type ElementImportOutput = IElementImport;
