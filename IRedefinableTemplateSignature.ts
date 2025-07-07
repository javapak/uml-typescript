/**
 * Interface for RedefinableTemplateSignature
 * 
 * @since UML 2.5
 * @package uml
 * @extends RedefinableElement, TemplateSignature
 */
import { IRedefinableElement } from './IRedefinableElement';
import { ITemplateSignature } from './ITemplateSignature';

export interface IRedefinableTemplateSignature extends IRedefinableElement, ITemplateSignature {
  /**
   * extendedSignature
   * 
   * @type RedefinableTemplateSignature
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  extendedSignature: Set<IRedefinableTemplateSignature | string>;
}

// Type aliases for RedefinableTemplateSignature
export type RedefinableTemplateSignatureInput = Partial<IRedefinableTemplateSignature>;
export type RedefinableTemplateSignatureOutput = IRedefinableTemplateSignature;
