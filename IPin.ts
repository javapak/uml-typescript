/**
 * Interface for Pin
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends ObjectNode, MultiplicityElement
 */
import { IMultiplicityElement } from './IMultiplicityElement';
import { IObjectNode } from './IObjectNode';

export interface IPin extends IObjectNode, IMultiplicityElement {
  /**
   * isControl
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isControl: boolean;
}

// Type aliases for Pin
export type PinInput = Partial<IPin>;
export type PinOutput = IPin;
export type PinUnion = IPin | IInputPin | IOutputPin;
