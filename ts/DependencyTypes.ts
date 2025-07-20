import { Dependency } from './Dependency';
import { IDependency } from './IDependency';
import { IDirectedRelationship } from './IDirectedRelationship';
import { INamedElement } from './INamedElement';
import { IPackageableElement } from './IPackageableElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Dependency
 */
export type PartialDependency = Partial<IDependency>;
export type RequiredDependency = Required<IDependency>;
export type DependencyUnion = IDependency | IPackageableElement | IDirectedRelationship;
export type DependencyFactory = () => Dependency;
export type DependencyValidator = (instance: IDependency) => ValidationResult;
