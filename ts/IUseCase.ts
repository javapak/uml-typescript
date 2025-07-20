/**
 * Interface for UseCase
 * 
 * @since UML 2.5
 * @package uml
 * @extends BehavioredClassifier
 */
import { Extend } from './Extend';
import { ExtensionPoint } from './ExtensionPoint';
import { IBehavioredClassifier } from './IBehavioredClassifier';
import { IClassifier } from './IClassifier';
import { IExtend } from './IExtend';
import { IExtensionPoint } from './IExtensionPoint';
import { IInclude } from './IInclude';
import { Include } from './Include';

export interface IUseCase extends IBehavioredClassifier {
  /**
   * extend
   * 
   * @type Extend
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite extension
   */
  extend?: Set<IExtend>;
  /**
   * extensionPoint
   * 
   * @type ExtensionPoint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite useCase
   */
  extensionPoint?: Set<IExtensionPoint>;
  /**
   * include
   * 
   * @type Include
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite includingCase
   */
  include?: Set<IInclude>;
  /**
   * subject
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite useCase
   */
  subject?: Set<string>;
}

// Type aliases for UseCase
export type UseCaseInput = Partial<IUseCase>;
export type UseCaseOutput = IUseCase;
