import { FinalState } from './FinalState';
import { IFinalState } from './IFinalState';
import { IState } from './IState';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for FinalState
 */
export type PartialFinalState = Partial<IFinalState>;
export type RequiredFinalState = Required<IFinalState>;
export type FinalStateKey = Pick<IFinalState, 'name' | 'nameExpression'>;
export type FinalStateMetadata = Pick<IFinalState, 'ownedComment' | 'visibility' | 'ownedRule'>;
export type FinalStateSummary = Pick<IFinalState, 'eAnnotations' | 'ownedComment' | 'name'>;
export type FinalStateUnion = IFinalState | IState;
export type FinalStateFactory = () => FinalState;
export type FinalStateValidator = (instance: IFinalState) => ValidationResult;
