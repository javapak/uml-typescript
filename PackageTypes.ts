import { INamespace } from './INamespace';
import { IPackage } from './IPackage';
import { IPackageMerge } from './IPackageMerge';
import { IPackageableElement } from './IPackageableElement';
import { IProfileApplication } from './IProfileApplication';
import { ITemplateableElement } from './ITemplateableElement';
import { Package } from './Package';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Package
 */
export type PartialPackage = Partial<IPackage>;
export type RequiredPackage = Required<IPackage>;
export type PackageUnion = IPackage | INamespace | IPackageableElement | ITemplateableElement;
export type PackageFactory = () => Package;
export type PackageValidator = (instance: IPackage) => ValidationResult;
