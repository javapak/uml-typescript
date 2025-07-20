import { ConnectorEnd } from './ConnectorEnd';
import { IConnectableElement } from './IConnectableElement';
import { IConnectorEnd } from './IConnectorEnd';
import { IMultiplicityElement } from './IMultiplicityElement';
import { IProperty } from './IProperty';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ConnectorEnd
 */
export type PartialConnectorEnd = Partial<IConnectorEnd>;
export type RequiredConnectorEnd = Required<IConnectorEnd>;
export type ConnectorEndUnion = IConnectorEnd | IMultiplicityElement;
export type ConnectorEndFactory = () => ConnectorEnd;
export type ConnectorEndValidator = (instance: IConnectorEnd) => ValidationResult;
