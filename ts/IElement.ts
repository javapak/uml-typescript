/**
 * Interface for Element
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends EModelElement
 */
import { Comment } from './Comment';
import { IClause } from './IClause';
import { IComment } from './IComment';
import { IEModelElement } from './IEModelElement';
import { IExceptionHandler } from './IExceptionHandler';
import { IImage } from './IImage';
import { ILinkEndData } from './ILinkEndData';
import { IMultiplicityElement } from './IMultiplicityElement';
import { INamedElement } from './INamedElement';
import { IParameterableElement } from './IParameterableElement';
import { IQualifierValue } from './IQualifierValue';
import { IRelationship } from './IRelationship';
import { ISlot } from './ISlot';
import { ITemplateableElement } from './ITemplateableElement';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateParameterSubstitution } from './ITemplateParameterSubstitution';
import { ITemplateSignature } from './ITemplateSignature';

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
