import { FinalState } from './FinalState';
import { IFinalState } from './IFinalState';
import { IState } from './IState';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for FinalState
 */
export type PartialFinalState = Partial<IFinalState>;
export type RequiredFinalState = Required<IFinalState>;
export type FinalStateUnion = IFinalState | IState;
export type FinalStateFactory = () => FinalState;
export type FinalStateValidator = (instance: IFinalState) => ValidationResult;
