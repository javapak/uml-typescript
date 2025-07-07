/**
 * Interface for ControlNode
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends ActivityNode
 */
import { IActivityNode } from './IActivityNode';

export interface IControlNode extends IActivityNode {
}

// Type aliases for ControlNode
export type ControlNodeInput = Partial<IControlNode>;
export type ControlNodeOutput = IControlNode;
export type ControlNodeUnion = IControlNode | IFinalNode | IDecisionNode | IForkNode | IInitialNode | IJoinNode | IMergeNode;
