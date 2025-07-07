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
export type NamespaceKey = Pick<INamespace, 'name' | 'nameExpression'>;
export type NamespaceMetadata = Pick<INamespace, 'ownedComment' | 'visibility' | 'ownedRule'>;
export type NamespaceSummary = Pick<INamespace, 'eAnnotations' | 'ownedComment' | 'name'>;
export type NamespaceUnion = INamespace | INamedElement;
export type NamespaceFactory = () => Namespace;
export type NamespaceValidator = (instance: INamespace) => ValidationResult;
