import { CombinedFragment } from './CombinedFragment';
import { ICombinedFragment } from './ICombinedFragment';
import { IGate } from './IGate';
import { IInteractionFragment } from './IInteractionFragment';
import { IInteractionOperand } from './IInteractionOperand';
import { InteractionOperatorKind } from './InteractionOperatorKind';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for CombinedFragment
 */
export type PartialCombinedFragment = Partial<ICombinedFragment>;
export type RequiredCombinedFragment = Required<ICombinedFragment>;
export type CombinedFragmentUnion = ICombinedFragment | IInteractionFragment;
export type CombinedFragmentFactory = () => CombinedFragment;
export type CombinedFragmentValidator = (instance: ICombinedFragment) => ValidationResult;
