import { ExtensionPoint } from './ExtensionPoint';
import { IExtensionPoint } from './IExtensionPoint';
import { IRedefinableElement } from './IRedefinableElement';
import { IUseCase } from './IUseCase';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ExtensionPoint
 */
export type PartialExtensionPoint = Partial<IExtensionPoint>;
export type RequiredExtensionPoint = Required<IExtensionPoint>;
export type ExtensionPointUnion = IExtensionPoint | IRedefinableElement;
export type ExtensionPointFactory = () => ExtensionPoint;
export type ExtensionPointValidator = (instance: IExtensionPoint) => ValidationResult;
