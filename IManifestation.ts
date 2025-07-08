/**
 * Interface for Manifestation
 * 
 * @since UML 2.5
 * @package uml
 * @extends Abstraction
 */
import { IAbstraction } from './IAbstraction';
import { IPackageableElement } from './IPackageableElement';

export interface IManifestation extends IAbstraction {
  /**
   * utilizedElement
   * 
   * @type PackageableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  utilizedElement: string;
}

// Type aliases for Manifestation
export type ManifestationInput = Partial<IManifestation>;
export type ManifestationOutput = IManifestation;
