import { Device } from './Device';
import { IDevice } from './IDevice';
import { INode } from './INode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Device
 */
export type PartialDevice = Partial<IDevice>;
export type RequiredDevice = Required<IDevice>;
export type DeviceUnion = IDevice | INode;
export type DeviceFactory = () => Device;
export type DeviceValidator = (instance: IDevice) => ValidationResult;
