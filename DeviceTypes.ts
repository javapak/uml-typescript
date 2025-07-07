import { Device } from './Device';
import { IDevice } from './IDevice';
import { INode } from './INode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Device
 */
export type PartialDevice = Partial<IDevice>;
export type RequiredDevice = Required<IDevice>;
export type DeviceKey = Pick<IDevice, 'name' | 'nameExpression'>;
export type DeviceMetadata = Pick<IDevice, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedAttribute' | 'ownedConnector' | 'ownedBehavior' | 'ownedOperation' | 'ownedReception'>;
export type DeviceSummary = Pick<IDevice, 'eAnnotations' | 'ownedComment' | 'name'>;
export type DeviceUnion = IDevice | INode;
export type DeviceFactory = () => Device;
export type DeviceValidator = (instance: IDevice) => ValidationResult;
