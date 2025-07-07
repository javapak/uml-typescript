/**
 * Interface for ProfileApplication
 * 
 * @since UML 2.5
 * @package uml
 * @extends DirectedRelationship
 */
import { IDirectedRelationship } from './IDirectedRelationship';
import { IPackage } from './IPackage';
import { IProfile } from './IProfile';

export interface IProfileApplication extends IDirectedRelationship {
  /**
   * appliedProfile
   * 
   * @type Profile
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  appliedProfile: IProfile | string;
  /**
   * isStrict
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isStrict: boolean;
  /**
   * applyingPackage
   * 
   * @type Package
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite profileApplication
   */
  applyingPackage: IPackage | string;
}

// Type aliases for ProfileApplication
export type ProfileApplicationInput = Partial<IProfileApplication>;
export type ProfileApplicationOutput = IProfileApplication;
