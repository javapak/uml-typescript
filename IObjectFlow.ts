/**
 * Interface for ObjectFlow
 * 
 * @since UML 2.5
 * @package uml
 * @extends ActivityEdge
 */
import { IActivityEdge } from './IActivityEdge';
import { IBehavior } from './IBehavior';

export interface IObjectFlow extends IActivityEdge {
  /**
   * isMulticast
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isMulticast: boolean;
  /**
   * isMultireceive
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isMultireceive: boolean;
  /**
   * selection
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  selection?: string;
  /**
   * transformation
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  transformation?: string;
}

// Type aliases for ObjectFlow
export type ObjectFlowInput = Partial<IObjectFlow>;
export type ObjectFlowOutput = IObjectFlow;
