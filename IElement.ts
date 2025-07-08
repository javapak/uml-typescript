/**
 * Interface for Element
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends EModelElement
 */
import { Comment } from './Comment';
import { IComment } from './IComment';
import { IEModelElement } from './IEModelElement';

export interface IElement extends IEModelElement {
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  ownedComment?: Set<IComment>;
}

// Type aliases for Element
export type ElementInput = Partial<IElement>;
export type ElementOutput = IElement;
export type ElementUnion = IElement | INamedElement | IComment | IImage | IParameterableElement | ITemplateParameter | ITemplateSignature | ITemplateableElement | IRelationship | ITemplateParameterSubstitution | IMultiplicityElement | ISlot | IExceptionHandler | ILinkEndData | IQualifierValue | IClause;
