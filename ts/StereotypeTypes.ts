import { IClass } from './IClass';
import { IImage } from './IImage';
import { IStereotype } from './IStereotype';
import { Stereotype } from './Stereotype';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Stereotype
 */
export type PartialStereotype = Partial<IStereotype>;
export type RequiredStereotype = Required<IStereotype>;
export type StereotypeUnion = IStereotype | IClass;
export type StereotypeFactory = () => Stereotype;
export type StereotypeValidator = (instance: IStereotype) => ValidationResult;
