/**
 * Interface for InterfaceRealization
 * 
 * @since UML 2.5
 * @package uml
 * @extends Realization
 */
import { IBehavioredClassifier } from './IBehavioredClassifier';
import { IInterface } from './IInterface';
import { IRealization } from './IRealization';

export interface IInterfaceRealization extends IRealization {
  /**
   * contract
   * 
   * @type Interface
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  contract: string;
  /**
   * implementingClassifier
   * 
   * @type BehavioredClassifier
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite interfaceRealization
   */
  implementingClassifier: string;
}

// Type aliases for InterfaceRealization
export type InterfaceRealizationInput = Partial<IInterfaceRealization>;
export type InterfaceRealizationOutput = IInterfaceRealization;
