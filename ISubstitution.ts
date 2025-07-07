/**
 * Interface for Substitution
 * 
 * @since UML 2.5
 * @package uml
 * @extends Realization
 */
import { IClassifier } from './IClassifier';
import { IRealization } from './IRealization';

export interface ISubstitution extends IRealization {
  /**
   * contract
   * 
   * @type Classifier
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  contract: IClassifier | string;
  /**
   * substitutingClassifier
   * 
   * @type Classifier
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite substitution
   */
  substitutingClassifier: IClassifier | string;
}

// Type aliases for Substitution
export type SubstitutionInput = Partial<ISubstitution>;
export type SubstitutionOutput = ISubstitution;
