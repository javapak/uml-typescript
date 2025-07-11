import { Connector } from './Connector';
import { IAssociation } from './IAssociation';
import { IBehavior } from './IBehavior';
import { IConnector } from './IConnector';
import { IConnectorEnd } from './IConnectorEnd';
import { IFeature } from './IFeature';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Connector
 */
export type PartialConnector = Partial<IConnector>;
export type RequiredConnector = Required<IConnector>;
export type ConnectorUnion = IConnector | IFeature;
export type ConnectorFactory = () => Connector;
export type ConnectorValidator = (instance: IConnector) => ValidationResult;
