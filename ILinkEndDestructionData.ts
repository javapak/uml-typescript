/**
 * Interface for LinkEndDestructionData
 * 
 * @since UML 2.5
 * @package uml
 * @extends LinkEndData
 */
import { IInputPin } from './IInputPin';
import { ILinkEndData } from './ILinkEndData';

export interface ILinkEndDestructionData extends ILinkEndData {
  /**
   * destroyAt
   * 
   * @type InputPin
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  destroyAt?: string;
  /**
   * isDestroyDuplicates
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isDestroyDuplicates: boolean;
}

// Type aliases for LinkEndDestructionData
export type LinkEndDestructionDataInput = Partial<ILinkEndDestructionData>;
export type LinkEndDestructionDataOutput = ILinkEndDestructionData;
