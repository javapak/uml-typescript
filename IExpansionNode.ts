/**
 * Interface for ExpansionNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends ObjectNode
 */
import { IExpansionRegion } from './IExpansionRegion';
import { IObjectNode } from './IObjectNode';

export interface IExpansionNode extends IObjectNode {
  /**
   * regionAsInput
   * 
   * @type ExpansionRegion
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite inputElement
   */
  regionAsInput?: IExpansionRegion | string;
  /**
   * regionAsOutput
   * 
   * @type ExpansionRegion
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite outputElement
   */
  regionAsOutput?: IExpansionRegion | string;
}

// Type aliases for ExpansionNode
export type ExpansionNodeInput = Partial<IExpansionNode>;
export type ExpansionNodeOutput = IExpansionNode;
