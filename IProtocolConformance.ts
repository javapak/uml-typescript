/**
 * Interface for ProtocolConformance
 * 
 * @since UML 2.5
 * @package uml
 * @extends DirectedRelationship
 */
import { IDirectedRelationship } from './IDirectedRelationship';
import { IProtocolStateMachine } from './IProtocolStateMachine';

export interface IProtocolConformance extends IDirectedRelationship {
  /**
   * generalMachine
   * 
   * @type ProtocolStateMachine
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  generalMachine: IProtocolStateMachine | string;
  /**
   * specificMachine
   * 
   * @type ProtocolStateMachine
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite conformance
   */
  specificMachine: IProtocolStateMachine | string;
}

// Type aliases for ProtocolConformance
export type ProtocolConformanceInput = Partial<IProtocolConformance>;
export type ProtocolConformanceOutput = IProtocolConformance;
