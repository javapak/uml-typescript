/**
 * Interface for SequenceNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends StructuredActivityNode
 */
import { ExecutableNode } from './ExecutableNode';
import { IExecutableNode } from './IExecutableNode';
import { IStructuredActivityNode } from './IStructuredActivityNode';

export interface ISequenceNode extends IStructuredActivityNode {
  /**
   * executableNode
   * 
   * @type ExecutableNode
   * @multiplicity [0..*]
   * @relationship containment
   */
  executableNode?: IExecutableNode[];
}

// Type aliases for SequenceNode
export type SequenceNodeInput = Partial<ISequenceNode>;
export type SequenceNodeOutput = ISequenceNode;
