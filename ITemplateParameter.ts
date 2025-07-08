/**
 * Interface for TemplateParameter
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { IElement } from './IElement';
import { IParameterableElement } from './IParameterableElement';
import { ITemplateSignature } from './ITemplateSignature';
import { ParameterableElement } from './ParameterableElement';

export interface ITemplateParameter extends IElement {
  /**
   * default
   * 
   * @type ParameterableElement
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  default?: string;
  /**
   * ownedDefault
   * 
   * @type ParameterableElement
   * @multiplicity [0..1]
   * @relationship containment
   */
  ownedDefault?: IParameterableElement;
  /**
   * parameteredElement
   * 
   * @type ParameterableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite templateParameter
   */
  parameteredElement: string;
  /**
   * signature
   * 
   * @type TemplateSignature
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite ownedParameter
   */
  signature: string;
  /**
   * ownedParameteredElement
   * 
   * @type ParameterableElement
   * @multiplicity [0..1]
   * @relationship containment
   * @opposite owningTemplateParameter
   */
  ownedParameteredElement?: IParameterableElement;
}

// Type aliases for TemplateParameter
export type TemplateParameterInput = Partial<ITemplateParameter>;
export type TemplateParameterOutput = ITemplateParameter;
export type TemplateParameterUnion = ITemplateParameter | IConnectableElementTemplateParameter | IOperationTemplateParameter | IClassifierTemplateParameter;
