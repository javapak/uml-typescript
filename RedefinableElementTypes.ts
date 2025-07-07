import { INamedElement } from './INamedElement';
import { IRedefinableElement } from './IRedefinableElement';
import { RedefinableElement } from './RedefinableElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for RedefinableElement
 */
export type PartialRedefinableElement = Partial<IRedefinableElement>;
export type RequiredRedefinableElement = Required<IRedefinableElement>;
export type RedefinableElementKey = Pick<IRedefinableElement, 'name' | 'nameExpression'>;
export type RedefinableElementMetadata = Pick<IRedefinableElement, 'ownedComment' | 'visibility'>;
export type RedefinableElementSummary = Pick<IRedefinableElement, 'eAnnotations' | 'ownedComment' | 'name'>;
export type RedefinableElementUnion = IRedefinableElement | INamedElement;
export type RedefinableElementFactory = () => RedefinableElement;
export type RedefinableElementValidator = (instance: IRedefinableElement) => ValidationResult;
