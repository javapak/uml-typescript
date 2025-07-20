/**
 * Interface for Comment
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { IElement } from './IElement';

export interface IComment extends IElement {
  /**
   * annotatedElement
   * 
   * @type Element
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  annotatedElement?: Set<string>;
  /**
   * body
   * 
   * @type String
   * @multiplicity [0..1]
   */
  body?: string;
}

// Type aliases for Comment
export type CommentInput = Partial<IComment>;
export type CommentOutput = IComment;
