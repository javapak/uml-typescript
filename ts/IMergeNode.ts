/**
 * Interface for MergeNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends ControlNode
 */
import { IControlNode } from './IControlNode';

export interface IMergeNode extends IControlNode {
}

// Type aliases for MergeNode
export type MergeNodeInput = Partial<IMergeNode>;
export type MergeNodeOutput = IMergeNode;
