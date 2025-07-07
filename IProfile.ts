/**
 * Interface for Profile
 * 
 * @since UML 2.5
 * @package uml
 * @extends Package
 */
import { IElementImport } from './IElementImport';
import { IPackage } from './IPackage';
import { IPackageImport } from './IPackageImport';

export interface IProfile extends IPackage {
  /**
   * metaclassReference
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  metaclassReference: Set<IElementImport | string>;
  /**
   * metamodelReference
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  metamodelReference: Set<IPackageImport | string>;
}

// Type aliases for Profile
export type ProfileInput = Partial<IProfile>;
export type ProfileOutput = IProfile;
