/**
 * Interface for Model
 * 
 * @since UML 2.5
 * @package uml
 * @extends Package
 */
import { IPackage } from './IPackage';

export interface IModel extends IPackage {
  /**
   * viewpoint
   * 
   * @type String
   * @multiplicity [0..1]
   */
  viewpoint?: string;
}

// Type aliases for Model
export type ModelInput = Partial<IModel>;
export type ModelOutput = IModel;
