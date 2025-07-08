import { IDirectedRelationship } from './IDirectedRelationship';
import { IPackage } from './IPackage';
import { IPackageMerge } from './IPackageMerge';
import { PackageMerge } from './PackageMerge';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for PackageMerge
 */
export type PartialPackageMerge = Partial<IPackageMerge>;
export type RequiredPackageMerge = Required<IPackageMerge>;
export type PackageMergeUnion = IPackageMerge | IDirectedRelationship;
export type PackageMergeFactory = () => PackageMerge;
export type PackageMergeValidator = (instance: IPackageMerge) => ValidationResult;
