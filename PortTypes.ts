import { IPort } from './IPort';
import { IProperty } from './IProperty';
import { IProtocolStateMachine } from './IProtocolStateMachine';
import { Port } from './Port';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Port
 */
export type PartialPort = Partial<IPort>;
export type RequiredPort = Required<IPort>;
export type PortKey = Pick<IPort, 'provided'>;
export type PortUnion = IPort | IProperty;
export type PortFactory = () => Port;
export type PortValidator = (instance: IPort) => ValidationResult;
