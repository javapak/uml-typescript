import { EModelElement } from './EModelElement';
import { IEAnnotation } from './IEAnnotation';
import { IEModelElement } from './IEModelElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for EModelElement
 */
export type PartialEModelElement = Partial<IEModelElement>;
export type RequiredEModelElement = Required<IEModelElement>;
export type EModelElementFactory = () => EModelElement;
export type EModelElementValidator = (instance: IEModelElement) => ValidationResult;
