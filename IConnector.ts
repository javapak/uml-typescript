/**
 * Interface for Connector
 * 
 * @since UML 2.5
 * @package uml
 * @extends Feature
 */
import { ConnectorEnd } from './ConnectorEnd';
import { IAssociation } from './IAssociation';
import { IBehavior } from './IBehavior';
import { IConnectorEnd } from './IConnectorEnd';
import { IFeature } from './IFeature';

export interface IConnector extends IFeature {
  /**
   * contract
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  contract: Set<IBehavior | string>;
  /**
   * end
   * 
   * @type ConnectorEnd
   * @multiplicity [2..*]
   * @relationship containment
   */
  end: IConnectorEnd[];
  /**
   * redefinedConnector
   * 
   * @type Connector
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  redefinedConnector: Set<IConnector | string>;
  /**
   * type
   * 
   * @type Association
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  type?: IAssociation | string;
}

// Type aliases for Connector
export type ConnectorInput = Partial<IConnector>;
export type ConnectorOutput = IConnector;
