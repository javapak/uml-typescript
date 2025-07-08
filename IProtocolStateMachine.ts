/**
 * Interface for ProtocolStateMachine
 * 
 * @since UML 2.5
 * @package uml
 * @extends StateMachine
 */
import { IProtocolConformance } from './IProtocolConformance';
import { IStateMachine } from './IStateMachine';
import { ProtocolConformance } from './ProtocolConformance';

export interface IProtocolStateMachine extends IStateMachine {
  /**
   * conformance
   * 
   * @type ProtocolConformance
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite specificMachine
   */
  conformance?: Set<IProtocolConformance>;
}

// Type aliases for ProtocolStateMachine
export type ProtocolStateMachineInput = Partial<IProtocolStateMachine>;
export type ProtocolStateMachineOutput = IProtocolStateMachine;
