/**
 * Interface for OpaqueBehavior
 * 
 * @since UML 2.5
 * @package uml
 * @extends Behavior
 */
import { IBehavior } from './IBehavior';

export interface IOpaqueBehavior extends IBehavior {
  /**
   * body
   * 
   * @type String
   * @multiplicity [0..*]
   */
  body?: string[];
  /**
   * language
   * 
   * @type String
   * @multiplicity [0..*]
   */
  language?: string[];
}

// Type aliases for OpaqueBehavior
export type OpaqueBehaviorInput = Partial<IOpaqueBehavior>;
export type OpaqueBehaviorOutput = IOpaqueBehavior;
export type OpaqueBehaviorUnion = IOpaqueBehavior | IFunctionBehavior;
