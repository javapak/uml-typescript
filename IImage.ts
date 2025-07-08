/**
 * Interface for Image
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { IElement } from './IElement';

export interface IImage extends IElement {
  /**
   * content
   * 
   * @type String
   * @multiplicity [0..1]
   */
  content?: string;
  /**
   * format
   * 
   * @type String
   * @multiplicity [0..1]
   */
  format?: string;
  /**
   * location
   * 
   * @type String
   * @multiplicity [0..1]
   */
  location?: string;
}

// Type aliases for Image
export type ImageInput = Partial<IImage>;
export type ImageOutput = IImage;
