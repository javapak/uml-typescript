/**
 * Interface for ActivityParameterNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends ObjectNode
 */
import { IObjectNode } from './IObjectNode';
import { IParameter } from './IParameter';

export interface IActivityParameterNode extends IObjectNode {
  /**
   * parameter
   * 
   * @type Parameter
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  parameter: string;
}

// Type aliases for ActivityParameterNode
export type ActivityParameterNodeInput = Partial<IActivityParameterNode>;
export type ActivityParameterNodeOutput = IActivityParameterNode;
