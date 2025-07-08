/**
 * Interface for ClassifierTemplateParameter
 * 
 * @since UML 2.5
 * @package uml
 * @extends TemplateParameter
 */
import { IClassifier } from './IClassifier';
import { ITemplateParameter } from './ITemplateParameter';

export interface IClassifierTemplateParameter extends ITemplateParameter {
  /**
   * allowSubstitutable
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  allowSubstitutable: boolean;
  /**
   * constrainingClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  constrainingClassifier?: Set<string>;
}

// Type aliases for ClassifierTemplateParameter
export type ClassifierTemplateParameterInput = Partial<IClassifierTemplateParameter>;
export type ClassifierTemplateParameterOutput = IClassifierTemplateParameter;
