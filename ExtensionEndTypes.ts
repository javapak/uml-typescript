import { ExtensionEnd } from './ExtensionEnd';
import { IExtensionEnd } from './IExtensionEnd';
import { IProperty } from './IProperty';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ExtensionEnd
 */
export type PartialExtensionEnd = Partial<IExtensionEnd>;
export type RequiredExtensionEnd = Required<IExtensionEnd>;
export type ExtensionEndKey = Pick<IExtensionEnd, 'name' | 'nameExpression' | 'isID'>;
export type ExtensionEndMetadata = Pick<IExtensionEnd, 'ownedComment' | 'visibility'>;
export type ExtensionEndSummary = Pick<IExtensionEnd, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ExtensionEndUnion = IExtensionEnd | IProperty;
export type ExtensionEndFactory = () => ExtensionEnd;
export type ExtensionEndValidator = (instance: IExtensionEnd) => ValidationResult;
