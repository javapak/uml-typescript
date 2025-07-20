/**
 * Interface for ActivityPartition
 * 
 * @since UML 2.5
 * @package uml
 * @extends ActivityGroup
 */
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IElement } from './IElement';

export interface IActivityPartition extends IActivityGroup {
  /**
   * isDimension
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isDimension: boolean;
  /**
   * isExternal
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isExternal: boolean;
  /**
   * node
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite inPartition
   */
  node?: Set<string>;
  /**
   * represents
   * 
   * @type Element
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  represents?: string;
  /**
   * subpartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite superPartition
   */
  subpartition?: Set<IActivityPartition>;
  /**
   * superPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite subpartition
   */
  superPartition?: string;
  /**
   * edge
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite inPartition
   */
  edge?: Set<string>;
}

// Type aliases for ActivityPartition
export type ActivityPartitionInput = Partial<IActivityPartition>;
export type ActivityPartitionOutput = IActivityPartition;
