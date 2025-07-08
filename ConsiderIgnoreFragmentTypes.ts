import { ConsiderIgnoreFragment } from './ConsiderIgnoreFragment';
import { ICombinedFragment } from './ICombinedFragment';
import { IConsiderIgnoreFragment } from './IConsiderIgnoreFragment';
import { INamedElement } from './INamedElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ConsiderIgnoreFragment
 */
export type PartialConsiderIgnoreFragment = Partial<IConsiderIgnoreFragment>;
export type RequiredConsiderIgnoreFragment = Required<IConsiderIgnoreFragment>;
export type ConsiderIgnoreFragmentUnion = IConsiderIgnoreFragment | ICombinedFragment;
export type ConsiderIgnoreFragmentFactory = () => ConsiderIgnoreFragment;
export type ConsiderIgnoreFragmentValidator = (instance: IConsiderIgnoreFragment) => ValidationResult;
