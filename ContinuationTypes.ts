import { Continuation } from './Continuation';
import { IContinuation } from './IContinuation';
import { IInteractionFragment } from './IInteractionFragment';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Continuation
 */
export type PartialContinuation = Partial<IContinuation>;
export type RequiredContinuation = Required<IContinuation>;
export type ContinuationUnion = IContinuation | IInteractionFragment;
export type ContinuationFactory = () => Continuation;
export type ContinuationValidator = (instance: IContinuation) => ValidationResult;
