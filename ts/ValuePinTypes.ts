import { IInputPin } from './IInputPin';
import { IValuePin } from './IValuePin';
import { IValueSpecification } from './IValueSpecification';
import { ValidationResult } from './ValidationTypes';
import { ValuePin } from './ValuePin';

/**
 * Utility types for ValuePin
 */
export type PartialValuePin = Partial<IValuePin>;
export type RequiredValuePin = Required<IValuePin>;
export type ValuePinUnion = IValuePin | IInputPin;
export type ValuePinFactory = () => ValuePin;
export type ValuePinValidator = (instance: IValuePin) => ValidationResult;
