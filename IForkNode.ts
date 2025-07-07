/**
 * Interface for ForkNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends ControlNode
 */
import { IControlNode } from './IControlNode';

export interface IForkNode extends IControlNode {
}

// Type aliases for ForkNode
export type ForkNodeInput = Partial<IForkNode>;
export type ForkNodeOutput = IForkNode;
