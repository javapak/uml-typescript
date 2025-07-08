/**
 * Interface for JoinNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends ControlNode
 */
import { IControlNode } from './IControlNode';
import { IValueSpecification } from './IValueSpecification';
import { ValueSpecification } from './ValueSpecification';

export interface IJoinNode extends IControlNode {
  /**
   * isCombineDuplicate
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isCombineDuplicate: boolean;
  /**
   * joinSpec
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  joinSpec?: IValueSpecification;
}

// Type aliases for JoinNode
export type JoinNodeInput = Partial<IJoinNode>;
export type JoinNodeOutput = IJoinNode;
