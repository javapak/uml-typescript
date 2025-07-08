/**
 * Interface for ActivityEdge
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends RedefinableElement
 */
import { IActivity } from './IActivity';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { IRedefinableElement } from './IRedefinableElement';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IValueSpecification } from './IValueSpecification';
import { ValueSpecification } from './ValueSpecification';

export interface IActivityEdge extends IRedefinableElement {
  /**
   * activity
   * 
   * @type Activity
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite edge
   */
  activity?: string;
  /**
   * guard
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  guard?: IValueSpecification;
  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite edge
   */
  inPartition?: Set<string>;
  /**
   * interrupts
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite interruptingEdge
   */
  interrupts?: string;
  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite edge
   */
  inStructuredNode?: string;
  /**
   * target
   * 
   * @type ActivityNode
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite incoming
   */
  target: string;
  /**
   * source
   * 
   * @type ActivityNode
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite outgoing
   */
  source: string;
  /**
   * redefinedEdge
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  redefinedEdge?: Set<string>;
  /**
   * weight
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  weight?: IValueSpecification;
}

// Type aliases for ActivityEdge
export type ActivityEdgeInput = Partial<IActivityEdge>;
export type ActivityEdgeOutput = IActivityEdge;
export type ActivityEdgeUnion = IActivityEdge | IControlFlow | IObjectFlow;
