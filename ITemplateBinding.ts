/**
 * Interface for TemplateBinding
 * 
 * @since UML 2.5
 * @package uml
 * @extends DirectedRelationship
 */
import { IDirectedRelationship } from './IDirectedRelationship';
import { ITemplateParameterSubstitution } from './ITemplateParameterSubstitution';
import { ITemplateSignature } from './ITemplateSignature';
import { ITemplateableElement } from './ITemplateableElement';
import { TemplateParameterSubstitution } from './TemplateParameterSubstitution';

export interface ITemplateBinding extends IDirectedRelationship {
  /**
   * parameterSubstitution
   * 
   * @type TemplateParameterSubstitution
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite templateBinding
   */
  parameterSubstitution: Set<ITemplateParameterSubstitution>;
  /**
   * signature
   * 
   * @type TemplateSignature
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  signature: ITemplateSignature | string;
  /**
   * boundElement
   * 
   * @type TemplateableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite templateBinding
   */
  boundElement: ITemplateableElement | string;
}

// Type aliases for TemplateBinding
export type TemplateBindingInput = Partial<ITemplateBinding>;
export type TemplateBindingOutput = ITemplateBinding;
