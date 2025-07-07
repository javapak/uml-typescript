import { IInputPin } from './IInputPin';
import { IPin } from './IPin';
import { InputPin } from './InputPin';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InputPin
 */
export type PartialInputPin = Partial<IInputPin>;
export type RequiredInputPin = Required<IInputPin>;
export type InputPinKey = Pick<IInputPin, 'name' | 'nameExpression'>;
export type InputPinMetadata = Pick<IInputPin, 'ownedComment' | 'visibility'>;
export type InputPinSummary = Pick<IInputPin, 'eAnnotations' | 'ownedComment' | 'name'>;
export type InputPinUnion = IInputPin | IPin;
export type InputPinFactory = () => InputPin;
export type InputPinValidator = (instance: IInputPin) => ValidationResult;
