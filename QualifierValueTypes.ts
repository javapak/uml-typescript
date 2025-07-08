import { IElement } from './IElement';
import { IInputPin } from './IInputPin';
import { IProperty } from './IProperty';
import { IQualifierValue } from './IQualifierValue';
import { QualifierValue } from './QualifierValue';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for QualifierValue
 */
export type PartialQualifierValue = Partial<IQualifierValue>;
export type RequiredQualifierValue = Required<IQualifierValue>;
export type QualifierValueUnion = IQualifierValue | IElement;
export type QualifierValueFactory = () => QualifierValue;
export type QualifierValueValidator = (instance: IQualifierValue) => ValidationResult;
