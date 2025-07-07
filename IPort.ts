/**
 * Interface for Port
 * 
 * @since UML 2.5
 * @package uml
 * @extends Property
 */
import { IProperty } from './IProperty';
import { IProtocolStateMachine } from './IProtocolStateMachine';

export interface IPort extends IProperty {
  /**
   * isBehavior
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isBehavior: boolean;
  /**
   * isConjugated
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isConjugated: boolean;
  /**
   * isService
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isService: boolean;
  /**
   * protocol
   * 
   * @type ProtocolStateMachine
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  protocol?: IProtocolStateMachine | string;
  /**
   * redefinedPort
   * 
   * @type Port
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  redefinedPort: Set<IPort | string>;
}

// Type aliases for Port
export type PortInput = Partial<IPort>;
export type PortOutput = IPort;
