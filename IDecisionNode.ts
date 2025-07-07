/**
 * Interface for DecisionNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends ControlNode
 */
import { IBehavior } from './IBehavior';
import { IControlNode } from './IControlNode';
import { IObjectFlow } from './IObjectFlow';

export interface IDecisionNode extends IControlNode {
  /**
   * decisionInput
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  decisionInput?: IBehavior | string;
  /**
   * decisionInputFlow
   * 
   * @type ObjectFlow
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  decisionInputFlow?: IObjectFlow | string;
}

// Type aliases for DecisionNode
export type DecisionNodeInput = Partial<IDecisionNode>;
export type DecisionNodeOutput = IDecisionNode;
