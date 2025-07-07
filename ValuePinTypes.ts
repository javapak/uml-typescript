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
export type ValuePinKey = Pick<IValuePin, 'name' | 'nameExpression'>;
export type ValuePinMetadata = Pick<IValuePin, 'ownedComment' | 'visibility'>;
export type ValuePinSummary = Pick<IValuePin, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ValuePinUnion = IValuePin | IInputPin;
export type ValuePinFactory = () => ValuePin;
export type ValuePinValidator = (instance: IValuePin) => ValidationResult;
