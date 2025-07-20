import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IPackageImport } from './IPackageImport';
import { Namespace } from './Namespace';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Namespace
 */
export type PartialNamespace = Partial<INamespace>;
export type RequiredNamespace = Required<INamespace>;
export type NamespaceUnion = INamespace | INamedElement;
export type NamespaceFactory = () => Namespace;
export type NamespaceValidator = (instance: INamespace) => ValidationResult;
