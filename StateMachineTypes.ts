import { IBehavior } from './IBehavior';
import { IPseudostate } from './IPseudostate';
import { IRegion } from './IRegion';
import { IState } from './IState';
import { IStateMachine } from './IStateMachine';
import { StateMachine } from './StateMachine';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for StateMachine
 */
export type PartialStateMachine = Partial<IStateMachine>;
export type RequiredStateMachine = Required<IStateMachine>;
export type StateMachineUnion = IStateMachine | IBehavior;
export type StateMachineFactory = () => StateMachine;
export type StateMachineValidator = (instance: IStateMachine) => ValidationResult;
