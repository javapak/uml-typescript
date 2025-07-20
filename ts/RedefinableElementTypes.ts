import { INamedElement } from './INamedElement';
import { IRedefinableElement } from './IRedefinableElement';
import { RedefinableElement } from './RedefinableElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for RedefinableElement
 */
export type PartialRedefinableElement = Partial<IRedefinableElement>;
export type RequiredRedefinableElement = Required<IRedefinableElement>;
export type RedefinableElementUnion = IRedefinableElement | INamedElement;
export type RedefinableElementFactory = () => RedefinableElement;
export type RedefinableElementValidator = (instance: IRedefinableElement) => ValidationResult;
