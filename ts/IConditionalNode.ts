/**
 * Interface for ConditionalNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends StructuredActivityNode
 */
import { Clause } from './Clause';
import { IClause } from './IClause';
import { IOutputPin } from './IOutputPin';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { OutputPin } from './OutputPin';

export interface IConditionalNode extends IStructuredActivityNode {
  /**
   * clause
   * 
   * @type Clause
   * @multiplicity [1..*]
   * @relationship containment
   */
  clause: Set<IClause>;
  /**
   * isAssured
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isAssured: boolean;
  /**
   * isDeterminate
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isDeterminate: boolean;
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  result?: IOutputPin[];
}

// Type aliases for ConditionalNode
export type ConditionalNodeInput = Partial<IConditionalNode>;
export type ConditionalNodeOutput = IConditionalNode;
