/**
 * Interface for InformationItem
 * 
 * @since UML 2.5
 * @package uml
 * @extends Classifier
 */
import { IClassifier } from './IClassifier';

export interface IInformationItem extends IClassifier {
  /**
   * represented
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  represented: Set<IClassifier | string>;
}

// Type aliases for InformationItem
export type InformationItemInput = Partial<IInformationItem>;
export type InformationItemOutput = IInformationItem;
