/**
 * Interface for Behavior
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Class
 */
import { IBehavioralFeature } from './IBehavioralFeature';
import { IClass } from './IClass';
import { IConstraint } from './IConstraint';
import { IParameter } from './IParameter';
import { IParameterSet } from './IParameterSet';
import { Parameter } from './Parameter';
import { ParameterSet } from './ParameterSet';

export interface IBehavior extends IClass {
  /**
   * specification
   * 
   * @type BehavioralFeature
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite method
   */
  specification?: string;
  /**
   * isReentrant
   * 
   * @type Boolean
   * @multiplicity [0..1]
   */
  isReentrant?: boolean;
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
   * postcondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  postcondition?: Set<string>;
  /**
   * precondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  precondition?: Set<string>;
  /**
   * redefinedBehavior
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  redefinedBehavior?: Set<string>;
}

// Type aliases for Behavior
export type BehaviorInput = Partial<IBehavior>;
export type BehaviorOutput = IBehavior;
export type BehaviorUnion = IBehavior | IActivity | IStateMachine | IOpaqueBehavior | IInteraction;
