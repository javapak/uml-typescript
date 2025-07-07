/**
 * Interface for Package
 * 
 * @since UML 2.5
 * @package uml
 * @extends Namespace, PackageableElement, TemplateableElement
 */
import { INamespace } from './INamespace';
import { IPackageMerge } from './IPackageMerge';
import { IPackageableElement } from './IPackageableElement';
import { IProfileApplication } from './IProfileApplication';
import { ITemplateableElement } from './ITemplateableElement';
import { PackageMerge } from './PackageMerge';
import { PackageableElement } from './PackageableElement';
import { ProfileApplication } from './ProfileApplication';

export interface IPackage extends INamespace, IPackageableElement, ITemplateableElement {
  /**
   * URI
   * 
   * @type String
   * @multiplicity [0..1]
   */
  URI?: string;
  /**
   * packageMerge
   * 
   * @type PackageMerge
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite receivingPackage
   */
  packageMerge: Set<IPackageMerge>;
  /**
   * packagedElement
   * 
   * @type PackageableElement
   * @multiplicity [0..*]
   * @relationship containment
   */
  packagedElement: Set<IPackageableElement>;
  /**
   * profileApplication
   * 
   * @type ProfileApplication
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite applyingPackage
   */
  profileApplication: Set<IProfileApplication>;
}

// Type aliases for Package
export type PackageInput = Partial<IPackage>;
export type PackageOutput = IPackage;
export type PackageUnion = IPackage | IProfile | IModel;
