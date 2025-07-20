/**
 * Interface for ConnectorEnd
 * 
 * @since UML 2.5
 * @package uml
 * @extends MultiplicityElement
 */
import { IConnectableElement } from './IConnectableElement';
import { IMultiplicityElement } from './IMultiplicityElement';
import { IProperty } from './IProperty';

export interface IConnectorEnd extends IMultiplicityElement {
  /**
   * partWithPort
   * 
   * @type Property
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  partWithPort?: string;
  /**
   * role
   * 
   * @type ConnectableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  role: string;
}

// Type aliases for ConnectorEnd
export type ConnectorEndInput = Partial<IConnectorEnd>;
export type ConnectorEndOutput = IConnectorEnd;
