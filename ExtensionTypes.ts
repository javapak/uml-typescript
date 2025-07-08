import { Extension } from './Extension';
import { IAssociation } from './IAssociation';
import { IExtension } from './IExtension';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Extension
 */
export type PartialExtension = Partial<IExtension>;
export type RequiredExtension = Required<IExtension>;
export type ExtensionUnion = IExtension | IAssociation;
export type ExtensionFactory = () => Extension;
export type ExtensionValidator = (instance: IExtension) => ValidationResult;
