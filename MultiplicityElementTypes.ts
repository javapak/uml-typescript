import { IElement } from './IElement';
import { IMultiplicityElement } from './IMultiplicityElement';
import { IValueSpecification } from './IValueSpecification';
import { MultiplicityElement } from './MultiplicityElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for MultiplicityElement
 */
export type PartialMultiplicityElement = Partial<IMultiplicityElement>;
export type RequiredMultiplicityElement = Required<IMultiplicityElement>;
export type MultiplicityElementUnion = IMultiplicityElement | IElement;
export type MultiplicityElementFactory = () => MultiplicityElement;
export type MultiplicityElementValidator = (instance: IMultiplicityElement) => ValidationResult;
