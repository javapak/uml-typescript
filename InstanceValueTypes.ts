import { IInstanceSpecification } from './IInstanceSpecification';
import { IInstanceValue } from './IInstanceValue';
import { IValueSpecification } from './IValueSpecification';
import { InstanceValue } from './InstanceValue';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InstanceValue
 */
export type PartialInstanceValue = Partial<IInstanceValue>;
export type RequiredInstanceValue = Required<IInstanceValue>;
export type InstanceValueUnion = IInstanceValue | IValueSpecification;
export type InstanceValueFactory = () => InstanceValue;
export type InstanceValueValidator = (instance: IInstanceValue) => ValidationResult;
