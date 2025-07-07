import { Element } from './Element';
import { IComment } from './IComment';
import { IEModelElement } from './IEModelElement';
import { IElement } from './IElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Element
 */
export type PartialElement = Partial<IElement>;
export type RequiredElement = Required<IElement>;
export type ElementMetadata = Pick<IElement, 'ownedComment'>;
export type ElementUnion = IElement | IEModelElement;
export type ElementFactory = () => Element;
export type ElementValidator = (instance: IElement) => ValidationResult;
