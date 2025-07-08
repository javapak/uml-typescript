/**
 * Interface for PackageMerge
 * 
 * @since UML 2.5
 * @package uml
 * @extends DirectedRelationship
 */
import { IDirectedRelationship } from './IDirectedRelationship';
import { IPackage } from './IPackage';

export interface IPackageMerge extends IDirectedRelationship {
  /**
   * mergedPackage
   * 
   * @type Package
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  mergedPackage: string;
  /**
   * receivingPackage
   * 
   * @type Package
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite packageMerge
   */
  receivingPackage: string;
}

// Type aliases for PackageMerge
export type PackageMergeInput = Partial<IPackageMerge>;
export type PackageMergeOutput = IPackageMerge;
