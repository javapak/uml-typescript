/**
 * Interface for TemplateSignature
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { IElement } from './IElement';
import { IRedefinableTemplateSignature } from './IRedefinableTemplateSignature';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateableElement } from './ITemplateableElement';
import { TemplateParameter } from './TemplateParameter';

export interface ITemplateSignature extends IElement {
  /**
   * parameter
   * 
   * @type TemplateParameter
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  parameter: string[];
  /**
   * template
   * 
   * @type TemplateableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite ownedTemplateSignature
   */
  template: string;
  /**
   * ownedParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite signature
   */
  ownedParameter?: ITemplateParameter[];
}

// Type aliases for TemplateSignature
export type TemplateSignatureInput = Partial<ITemplateSignature>;
export type TemplateSignatureOutput = ITemplateSignature;
export type TemplateSignatureUnion = ITemplateSignature | IRedefinableTemplateSignature;
