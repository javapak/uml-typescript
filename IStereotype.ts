/**
 * Interface for Stereotype
 * 
 * @since UML 2.5
 * @package uml
 * @extends Class
 */
import { IClass } from './IClass';
import { IImage } from './IImage';
import { Image } from './Image';

export interface IStereotype extends IClass {
  /**
   * icon
   * 
   * @type Image
   * @multiplicity [0..*]
   * @relationship containment
   */
  icon: Set<IImage>;
}

// Type aliases for Stereotype
export type StereotypeInput = Partial<IStereotype>;
export type StereotypeOutput = IStereotype;
