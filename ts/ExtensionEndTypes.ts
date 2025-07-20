import { ExtensionEnd } from './ExtensionEnd';
import { IExtensionEnd } from './IExtensionEnd';
import { IProperty } from './IProperty';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ExtensionEnd
 */
export type PartialExtensionEnd = Partial<IExtensionEnd>;
export type RequiredExtensionEnd = Required<IExtensionEnd>;
export type ExtensionEndUnion = IExtensionEnd | IProperty;
export type ExtensionEndFactory = () => ExtensionEnd;
export type ExtensionEndValidator = (instance: IExtensionEnd) => ValidationResult;
