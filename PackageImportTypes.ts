import { IDirectedRelationship } from './IDirectedRelationship';
import { INamespace } from './INamespace';
import { IPackage } from './IPackage';
import { IPackageImport } from './IPackageImport';
import { PackageImport } from './PackageImport';
import { ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

/**
 * Utility types for PackageImport
 */
export type PartialPackageImport = Partial<IPackageImport>;
export type RequiredPackageImport = Required<IPackageImport>;
export type PackageImportKey = Pick<IPackageImport, 'importingNamespace'>;
export type PackageImportMetadata = Pick<IPackageImport, 'ownedComment' | 'visibility'>;
export type PackageImportSummary = Pick<IPackageImport, 'eAnnotations' | 'ownedComment' | 'importedPackage'>;
export type PackageImportUnion = IPackageImport | IDirectedRelationship;
export type PackageImportFactory = () => PackageImport;
export type PackageImportValidator = (instance: IPackageImport) => ValidationResult;
