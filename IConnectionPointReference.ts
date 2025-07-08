/**
 * Interface for ConnectionPointReference
 * 
 * @since UML 2.5
 * @package uml
 * @extends Vertex
 */
import { IPseudostate } from './IPseudostate';
import { IState } from './IState';
import { IVertex } from './IVertex';

export interface IConnectionPointReference extends IVertex {
  /**
   * entry
   * 
   * @type Pseudostate
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  entry?: Set<string>;
  /**
   * exit
   * 
   * @type Pseudostate
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  exit?: Set<string>;
  /**
   * state
   * 
   * @type State
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite connection
   */
  state?: string;
}

// Type aliases for ConnectionPointReference
export type ConnectionPointReferenceInput = Partial<IConnectionPointReference>;
export type ConnectionPointReferenceOutput = IConnectionPointReference;
