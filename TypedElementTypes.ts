import { INamedElement } from './INamedElement';
import { IType } from './IType';
import { ITypedElement } from './ITypedElement';
import { TypedElement } from './TypedElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for TypedElement
 */
export type PartialTypedElement = Partial<ITypedElement>;
export type RequiredTypedElement = Required<ITypedElement>;
export type TypedElementUnion = ITypedElement | INamedElement;
export type TypedElementFactory = () => TypedElement;
export type TypedElementValidator = (instance: ITypedElement) => ValidationResult;
