import { IElement } from './IElement';
import { INamedElement } from './INamedElement';
import { IStringExpression } from './IStringExpression';
import { NamedElement } from './NamedElement';
import { ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

/**
 * Utility types for NamedElement
 */
export type PartialNamedElement = Partial<INamedElement>;
export type RequiredNamedElement = Required<INamedElement>;
export type NamedElementKey = Pick<INamedElement, 'name' | 'nameExpression' | 'ownedComment' | 'visibility'>;
export type NamedElementMetadata = Pick<INamedElement, 'name' | 'nameExpression' | 'ownedComment' | 'visibility'>;
export type NamedElementSummary = Pick<INamedElement, 'name' | 'nameExpression' | 'ownedComment' | 'visibility'>;
export type NamedElementUnion = INamedElement | IElement;
export type NamedElementFactory = () => NamedElement;
export type NamedElementValidator = (instance: INamedElement) => ValidationResult;
