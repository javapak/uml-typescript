import { INamedElement } from './INamedElement';
import { IPackageableElement } from './IPackageableElement';
import { IParameterableElement } from './IParameterableElement';
import { PackageableElement } from './PackageableElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for PackageableElement
 */
export type PartialPackageableElement = Partial<IPackageableElement>;
export type RequiredPackageableElement = Required<IPackageableElement>;
export type PackageableElementKey = Pick<IPackageableElement, 'name' | 'nameExpression'>;
export type PackageableElementMetadata = Pick<IPackageableElement, 'ownedComment' | 'visibility'>;
export type PackageableElementSummary = Pick<IPackageableElement, 'eAnnotations' | 'ownedComment' | 'name'>;
export type PackageableElementUnion = IPackageableElement | INamedElement | IParameterableElement;
export type PackageableElementFactory = () => PackageableElement;
export type PackageableElementValidator = (instance: IPackageableElement) => ValidationResult;
