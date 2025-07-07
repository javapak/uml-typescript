/**
 * Interface for BehavioredClassifier
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Classifier
 */
import { Behavior } from './Behavior';
import { IBehavior } from './IBehavior';
import { IClassifier } from './IClassifier';
import { IInterfaceRealization } from './IInterfaceRealization';
import { InterfaceRealization } from './InterfaceRealization';

export interface IBehavioredClassifier extends IClassifier {
  /**
   * classifierBehavior
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  classifierBehavior?: IBehavior | string;
  /**
   * interfaceRealization
   * 
   * @type InterfaceRealization
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite implementingClassifier
   */
  interfaceRealization: Set<IInterfaceRealization>;
  /**
   * ownedBehavior
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship containment
   */
  ownedBehavior: Set<IBehavior>;
}

// Type aliases for BehavioredClassifier
export type BehavioredClassifierInput = Partial<IBehavioredClassifier>;
export type BehavioredClassifierOutput = IBehavioredClassifier;
export type BehavioredClassifierUnion = IBehavioredClassifier | IClass | ICollaboration | IUseCase | IActor;
