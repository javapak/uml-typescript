/**
 * Interface for ActivityFinalNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends FinalNode
 */
import { IFinalNode } from './IFinalNode';

export interface IActivityFinalNode extends IFinalNode {
}

// Type aliases for ActivityFinalNode
export type ActivityFinalNodeInput = Partial<IActivityFinalNode>;
export type ActivityFinalNodeOutput = IActivityFinalNode;
