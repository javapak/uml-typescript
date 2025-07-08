/**
 * Interface for ParameterableElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Element
 */
import { IElement } from './IElement';
import { ITemplateParameter } from './ITemplateParameter';

export interface IParameterableElement extends IElement {
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  owningTemplateParameter?: string;
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  templateParameter?: string;
}

// Type aliases for ParameterableElement
export type ParameterableElementInput = Partial<IParameterableElement>;
export type ParameterableElementOutput = IParameterableElement;
export type ParameterableElementUnion = IParameterableElement | IPackageableElement | IConnectableElement | IOperation;
