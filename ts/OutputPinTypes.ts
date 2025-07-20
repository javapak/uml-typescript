import { IOutputPin } from './IOutputPin';
import { IPin } from './IPin';
import { OutputPin } from './OutputPin';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for OutputPin
 */
export type PartialOutputPin = Partial<IOutputPin>;
export type RequiredOutputPin = Required<IOutputPin>;
export type OutputPinUnion = IOutputPin | IPin;
export type OutputPinFactory = () => OutputPin;
export type OutputPinValidator = (instance: IOutputPin) => ValidationResult;
