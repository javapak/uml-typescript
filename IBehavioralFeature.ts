/**
 * Interface for BehavioralFeature
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Namespace, Feature
 */
import { CallConcurrencyKind } from './CallConcurrencyKind';
import { IBehavior } from './IBehavior';
import { IFeature } from './IFeature';
import { INamespace } from './INamespace';
import { IParameter } from './IParameter';
import { IParameterSet } from './IParameterSet';
import { IType } from './IType';
import { Parameter } from './Parameter';
import { ParameterSet } from './ParameterSet';

export interface IBehavioralFeature extends INamespace, IFeature {
  /**
   * concurrency
   * 
   * @type CallConcurrencyKind
   * @multiplicity [1..1]
   */
  concurrency: CallConcurrencyKind;
  /**
   * isAbstract
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isAbstract: boolean;
  /**
   * method
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite specification
   */
  method?: Set<string>;
  /**
   * ownedParameter
   * 
   * @type Parameter
   * @multiplicity [0..*]
   * @relationship containment
   */
  ownedParameter?: IParameter[];
  /**
   * ownedParameterSet
   * 
   * @type ParameterSet
   * @multiplicity [0..*]
   * @relationship containment
   */
  ownedParameterSet?: Set<IParameterSet>;
  /**
   * raisedException
   * 
   * @type Type
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  raisedException?: Set<string>;
}

// Type aliases for BehavioralFeature
export type BehavioralFeatureInput = Partial<IBehavioralFeature>;
export type BehavioralFeatureOutput = IBehavioralFeature;
export type BehavioralFeatureUnion = IBehavioralFeature | IOperation | IReception;
