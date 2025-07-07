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
export type ConsiderIgnoreFragmentKey = Pick<IConsiderIgnoreFragment, 'name' | 'nameExpression'>;
export type ConsiderIgnoreFragmentMetadata = Pick<IConsiderIgnoreFragment, 'ownedComment' | 'visibility'>;
export type ConsiderIgnoreFragmentSummary = Pick<IConsiderIgnoreFragment, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ConsiderIgnoreFragmentUnion = IConsiderIgnoreFragment | ICombinedFragment;
export type ConsiderIgnoreFragmentFactory = () => ConsiderIgnoreFragment;
export type ConsiderIgnoreFragmentValidator = (instance: IConsiderIgnoreFragment) => ValidationResult;
