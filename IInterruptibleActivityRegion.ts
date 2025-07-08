/**
 * Interface for InterruptibleActivityRegion
 * 
 * @since UML 2.5
 * @package uml
 * @extends ActivityGroup
 */
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';

export interface IInterruptibleActivityRegion extends IActivityGroup {
  /**
   * interruptingEdge
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite interrupts
   */
  interruptingEdge?: Set<string>;
  /**
   * node
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite inInterruptibleRegion
   */
  node?: Set<string>;
}

// Type aliases for InterruptibleActivityRegion
export type InterruptibleActivityRegionInput = Partial<IInterruptibleActivityRegion>;
export type InterruptibleActivityRegionOutput = IInterruptibleActivityRegion;
