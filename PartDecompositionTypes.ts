import { IInteractionUse } from './IInteractionUse';
import { IPartDecomposition } from './IPartDecomposition';
import { PartDecomposition } from './PartDecomposition';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for PartDecomposition
 */
export type PartialPartDecomposition = Partial<IPartDecomposition>;
export type RequiredPartDecomposition = Required<IPartDecomposition>;
export type PartDecompositionKey = Pick<IPartDecomposition, 'name' | 'nameExpression'>;
export type PartDecompositionMetadata = Pick<IPartDecomposition, 'ownedComment' | 'visibility'>;
export type PartDecompositionSummary = Pick<IPartDecomposition, 'eAnnotations' | 'ownedComment' | 'name'>;
export type PartDecompositionUnion = IPartDecomposition | IInteractionUse;
export type PartDecompositionFactory = () => PartDecomposition;
export type PartDecompositionValidator = (instance: IPartDecomposition) => ValidationResult;
