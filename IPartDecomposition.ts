/**
 * Interface for PartDecomposition
 * 
 * @since UML 2.5
 * @package uml
 * @extends InteractionUse
 */
import { IInteractionUse } from './IInteractionUse';

export interface IPartDecomposition extends IInteractionUse {
}

// Type aliases for PartDecomposition
export type PartDecompositionInput = Partial<IPartDecomposition>;
export type PartDecompositionOutput = IPartDecomposition;
