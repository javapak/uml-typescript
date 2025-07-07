/**
 * Interface for Activity
 * 
 * @since UML 2.5
 * @package uml
 * @extends Behavior
 */
import { ActivityEdge } from './ActivityEdge';
import { ActivityGroup } from './ActivityGroup';
import { ActivityNode } from './ActivityNode';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IBehavior } from './IBehavior';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IVariable } from './IVariable';
import { StructuredActivityNode } from './StructuredActivityNode';
import { Variable } from './Variable';

export interface IActivity extends IBehavior {
  /**
   * ownedGroup
   * 
   * @type ActivityGroup
   * @multiplicity [0..*]
   * @relationship containment
   */
  ownedGroup: Set<IActivityGroup>;
  /**
   * edge
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite activity
   */
  edge: Set<IActivityEdge>;
  /**
   * variable
   * 
   * @type Variable
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite activityScope
   */
  variable: Set<IVariable>;
  /**
   * ownedNode
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship containment
   */
  ownedNode: Set<IActivityNode>;
  /**
   * isReadOnly
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isReadOnly: boolean;
  /**
   * isSingleExecution
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isSingleExecution: boolean;
  /**
   * partition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  partition: Set<IActivityPartition | string>;
  /**
   * structuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..*]
   * @relationship containment
   */
  structuredNode: Set<IStructuredActivityNode>;
}

// Type aliases for Activity
export type ActivityInput = Partial<IActivity>;
export type ActivityOutput = IActivity;
