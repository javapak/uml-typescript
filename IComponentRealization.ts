/**
 * Interface for ComponentRealization
 * 
 * @since UML 2.5
 * @package uml
 * @extends Realization
 */
import { IClassifier } from './IClassifier';
import { IComponent } from './IComponent';
import { IRealization } from './IRealization';

export interface IComponentRealization extends IRealization {
  /**
   * realizingClassifier
   * 
   * @type Classifier
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  realizingClassifier: Set<IClassifier | string>;
  /**
   * abstraction
   * 
   * @type Component
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite realization
   */
  abstraction?: IComponent | string;
}

// Type aliases for ComponentRealization
export type ComponentRealizationInput = Partial<IComponentRealization>;
export type ComponentRealizationOutput = IComponentRealization;
