/**
 * Interface for LinkEndCreationData
 * 
 * @since UML 2.5
 * @package uml
 * @extends LinkEndData
 */
import { IInputPin } from './IInputPin';
import { ILinkEndData } from './ILinkEndData';

export interface ILinkEndCreationData extends ILinkEndData {
  /**
   * insertAt
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  insertAt?: string;
  /**
   * isReplaceAll
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isReplaceAll: boolean;
}

// Type aliases for LinkEndCreationData
export type LinkEndCreationDataInput = Partial<ILinkEndCreationData>;
export type LinkEndCreationDataOutput = ILinkEndCreationData;
