/**
 * Interface for TemplateParameterSubstitution
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { IElement } from './IElement';
import { IParameterableElement } from './IParameterableElement';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ParameterableElement } from './ParameterableElement';

export interface ITemplateParameterSubstitution extends IElement {
  /**
   * actual
   * 
   * @type ParameterableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  actual: string;
  /**
   * formal
   * 
   * @type TemplateParameter
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  formal: string;
  /**
   * ownedActual
   * 
   * @type ParameterableElement
   * @multiplicity [0..1]
   * @relationship containment
   */
  ownedActual?: IParameterableElement;
  /**
   * templateBinding
   * 
   * @type TemplateBinding
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite parameterSubstitution
   */
  templateBinding: string;
}

// Type aliases for TemplateParameterSubstitution
export type TemplateParameterSubstitutionInput = Partial<ITemplateParameterSubstitution>;
export type TemplateParameterSubstitutionOutput = ITemplateParameterSubstitution;
