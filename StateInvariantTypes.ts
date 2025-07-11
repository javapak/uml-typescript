import { IConstraint } from './IConstraint';
import { IInteractionFragment } from './IInteractionFragment';
import { IStateInvariant } from './IStateInvariant';
import { StateInvariant } from './StateInvariant';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for StateInvariant
 */
export type PartialStateInvariant = Partial<IStateInvariant>;
export type RequiredStateInvariant = Required<IStateInvariant>;
export type StateInvariantUnion = IStateInvariant | IInteractionFragment;
export type StateInvariantFactory = () => StateInvariant;
export type StateInvariantValidator = (instance: IStateInvariant) => ValidationResult;
