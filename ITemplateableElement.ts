/**
 * Interface for TemplateableElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Element
 */
import { IClassifier } from './IClassifier';
import { IElement } from './IElement';
import { IOperation } from './IOperation';
import { IPackage } from './IPackage';
import { IStringExpression } from './IStringExpression';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateSignature } from './ITemplateSignature';
import { TemplateBinding } from './TemplateBinding';
import { TemplateSignature } from './TemplateSignature';

export interface ITemplateableElement extends IElement {
  /**
   * templateBinding
   * 
   * @type TemplateBinding
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite boundElement
   */
  templateBinding?: Set<ITemplateBinding>;
  /**
   * ownedTemplateSignature
   * 
   * @type TemplateSignature
   * @multiplicity [0..1]
   * @relationship containment
   * @opposite template
   */
  ownedTemplateSignature?: ITemplateSignature;
}

// Type aliases for TemplateableElement
export type TemplateableElementInput = Partial<ITemplateableElement>;
export type TemplateableElementOutput = ITemplateableElement;
export type TemplateableElementUnion = ITemplateableElement | IClassifier | IPackage | IOperation | IStringExpression;
