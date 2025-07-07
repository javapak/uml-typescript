/**
 * Interface for InitialNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends ControlNode
 */
import { IControlNode } from './IControlNode';

export interface IInitialNode extends IControlNode {
}

// Type aliases for InitialNode
export type InitialNodeInput = Partial<IInitialNode>;
export type InitialNodeOutput = IInitialNode;
