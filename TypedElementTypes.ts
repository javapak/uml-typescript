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
export type TypedElementKey = Pick<ITypedElement, 'name' | 'nameExpression'>;
export type TypedElementMetadata = Pick<ITypedElement, 'ownedComment' | 'visibility'>;
export type TypedElementSummary = Pick<ITypedElement, 'eAnnotations' | 'ownedComment' | 'name'>;
export type TypedElementUnion = ITypedElement | INamedElement;
export type TypedElementFactory = () => TypedElement;
export type TypedElementValidator = (instance: ITypedElement) => ValidationResult;
