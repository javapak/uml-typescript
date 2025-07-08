import { IInputPin } from './IInputPin';
import { IPin } from './IPin';
import { InputPin } from './InputPin';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InputPin
 */
export type PartialInputPin = Partial<IInputPin>;
export type RequiredInputPin = Required<IInputPin>;
export type InputPinUnion = IInputPin | IPin;
export type InputPinFactory = () => InputPin;
export type InputPinValidator = (instance: IInputPin) => ValidationResult;
