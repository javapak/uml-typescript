/**
 * Interface for GeneralizationSet
 * 
 * @since UML 2.5
 * @package uml
 * @extends PackageableElement
 */
import { IClassifier } from './IClassifier';
import { IGeneralization } from './IGeneralization';
import { IPackageableElement } from './IPackageableElement';

export interface IGeneralizationSet extends IPackageableElement {
  /**
   * isCovering
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isCovering: boolean;
  /**
   * isDisjoint
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isDisjoint: boolean;
  /**
   * powertype
   * 
   * @type Classifier
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite powertypeExtent
   */
  powertype?: IClassifier | string;
  /**
   * generalization
   * 
   * @type Generalization
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite generalizationSet
   */
  generalization: Set<IGeneralization | string>;
}

// Type aliases for GeneralizationSet
export type GeneralizationSetInput = Partial<IGeneralizationSet>;
export type GeneralizationSetOutput = IGeneralizationSet;
