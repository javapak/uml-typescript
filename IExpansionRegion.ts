/**
 * Interface for ExpansionRegion
 * 
 * @since UML 2.5
 * @package uml
 * @extends StructuredActivityNode
 */
import { ExpansionKind } from './ExpansionKind';
import { IExpansionNode } from './IExpansionNode';
import { IStructuredActivityNode } from './IStructuredActivityNode';

export interface IExpansionRegion extends IStructuredActivityNode {
  /**
   * mode
   * 
   * @type ExpansionKind
   * @multiplicity [1..1]
   */
  mode: ExpansionKind;
  /**
   * outputElement
   * 
   * @type ExpansionNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite regionAsOutput
   */
  outputElement?: Set<string>;
  /**
   * inputElement
   * 
   * @type ExpansionNode
   * @multiplicity [1..*]
   * @relationship cross-reference
   * @opposite regionAsInput
   */
  inputElement: Set<string>;
}

// Type aliases for ExpansionRegion
export type ExpansionRegionInput = Partial<IExpansionRegion>;
export type ExpansionRegionOutput = IExpansionRegion;
