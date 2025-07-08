import { Enumeration } from './Enumeration';
import { IDataType } from './IDataType';
import { IEnumeration } from './IEnumeration';
import { IEnumerationLiteral } from './IEnumerationLiteral';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Enumeration
 */
export type PartialEnumeration = Partial<IEnumeration>;
export type RequiredEnumeration = Required<IEnumeration>;
export type EnumerationUnion = IEnumeration | IDataType;
export type EnumerationFactory = () => Enumeration;
export type EnumerationValidator = (instance: IEnumeration) => ValidationResult;
