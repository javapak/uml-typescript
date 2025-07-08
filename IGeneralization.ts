/**
 * Interface for Generalization
 * 
 * @since UML 2.5
 * @package uml
 * @extends DirectedRelationship
 */
import { IClassifier } from './IClassifier';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IGeneralizationSet } from './IGeneralizationSet';

export interface IGeneralization extends IDirectedRelationship {
  /**
   * general
   * 
   * @type Classifier
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  general: string;
  /**
   * generalizationSet
   * 
   * @type GeneralizationSet
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite generalization
   */
  generalizationSet?: Set<string>;
  /**
   * isSubstitutable
   * 
   * @type Boolean
   * @multiplicity [0..1]
   */
  isSubstitutable?: boolean;
  /**
   * specific
   * 
   * @type Classifier
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite generalization
   */
  specific: string;
}

// Type aliases for Generalization
export type GeneralizationInput = Partial<IGeneralization>;
export type GeneralizationOutput = IGeneralization;
