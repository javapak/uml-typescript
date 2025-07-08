import { IProtocolConformance } from './IProtocolConformance';
import { IProtocolStateMachine } from './IProtocolStateMachine';
import { IStateMachine } from './IStateMachine';
import { ProtocolStateMachine } from './ProtocolStateMachine';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ProtocolStateMachine
 */
export type PartialProtocolStateMachine = Partial<IProtocolStateMachine>;
export type RequiredProtocolStateMachine = Required<IProtocolStateMachine>;
export type ProtocolStateMachineUnion = IProtocolStateMachine | IStateMachine;
export type ProtocolStateMachineFactory = () => ProtocolStateMachine;
export type ProtocolStateMachineValidator = (instance: IProtocolStateMachine) => ValidationResult;
