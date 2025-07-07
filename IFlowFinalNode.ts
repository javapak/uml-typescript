/**
 * Interface for FlowFinalNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends FinalNode
 */
import { IFinalNode } from './IFinalNode';

export interface IFlowFinalNode extends IFinalNode {
}

// Type aliases for FlowFinalNode
export type FlowFinalNodeInput = Partial<IFlowFinalNode>;
export type FlowFinalNodeOutput = IFlowFinalNode;
