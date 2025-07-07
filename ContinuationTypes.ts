import { Continuation } from './Continuation';
import { IContinuation } from './IContinuation';
import { IInteractionFragment } from './IInteractionFragment';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Continuation
 */
export type PartialContinuation = Partial<IContinuation>;
export type RequiredContinuation = Required<IContinuation>;
export type ContinuationKey = Pick<IContinuation, 'name' | 'nameExpression'>;
export type ContinuationMetadata = Pick<IContinuation, 'ownedComment' | 'visibility'>;
export type ContinuationSummary = Pick<IContinuation, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ContinuationUnion = IContinuation | IInteractionFragment;
export type ContinuationFactory = () => Continuation;
export type ContinuationValidator = (instance: IContinuation) => ValidationResult;
