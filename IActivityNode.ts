/**
 * Interface for ActivityNode
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends RedefinableElement, ActivityContent
 */
import { IActivityContent } from './IActivityContent';
import { IActivityEdge } from './IActivityEdge';
import { IActivityPartition } from './IActivityPartition';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { IRedefinableElement } from './IRedefinableElement';
import { IStructuredActivityNode } from './IStructuredActivityNode';

export interface IActivityNode extends IRedefinableElement, IActivityContent {
  /**
   * inInterruptibleRegion
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  inInterruptibleRegion?: Set<string>;
  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite node
   */
  inStructuredNode?: string;
  /**
   * incoming
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite target
   */
  incoming?: Set<string>;
  /**
   * outgoing
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite source
   */
  outgoing?: Set<string>;
  /**
   * redefinedNode
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  redefinedNode?: Set<string>;
  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  inPartition?: Set<string>;
}

// Type aliases for ActivityNode
export type ActivityNodeInput = Partial<IActivityNode>;
export type ActivityNodeOutput = IActivityNode;
export type ActivityNodeUnion = IActivityNode | IExecutableNode | IObjectNode | IControlNode;
