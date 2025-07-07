import { ElementImport } from './ElementImport';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IElementImport } from './IElementImport';
import { INamespace } from './INamespace';
import { IPackageableElement } from './IPackageableElement';
import { ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

/**
 * Utility types for ElementImport
 */
export type PartialElementImport = Partial<IElementImport>;
export type RequiredElementImport = Required<IElementImport>;
export type ElementImportKey = Pick<IElementImport, 'importingNamespace'>;
export type ElementImportMetadata = Pick<IElementImport, 'ownedComment' | 'visibility'>;
export type ElementImportSummary = Pick<IElementImport, 'eAnnotations' | 'ownedComment' | 'alias'>;
export type ElementImportUnion = IElementImport | IDirectedRelationship;
export type ElementImportFactory = () => ElementImport;
export type ElementImportValidator = (instance: IElementImport) => ValidationResult;
