import { IDataType } from './IDataType';
import { IPrimitiveType } from './IPrimitiveType';
import { PrimitiveType } from './PrimitiveType';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for PrimitiveType
 */
export type PartialPrimitiveType = Partial<IPrimitiveType>;
export type RequiredPrimitiveType = Required<IPrimitiveType>;
export type PrimitiveTypeUnion = IPrimitiveType | IDataType;
export type PrimitiveTypeFactory = () => PrimitiveType;
export type PrimitiveTypeValidator = (instance: IPrimitiveType) => ValidationResult;
