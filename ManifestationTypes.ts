import { IAbstraction } from './IAbstraction';
import { IManifestation } from './IManifestation';
import { IPackageableElement } from './IPackageableElement';
import { Manifestation } from './Manifestation';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Manifestation
 */
export type PartialManifestation = Partial<IManifestation>;
export type RequiredManifestation = Required<IManifestation>;
export type ManifestationKey = Pick<IManifestation, 'name' | 'nameExpression'>;
export type ManifestationMetadata = Pick<IManifestation, 'ownedComment' | 'visibility'>;
export type ManifestationSummary = Pick<IManifestation, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ManifestationUnion = IManifestation | IAbstraction;
export type ManifestationFactory = () => Manifestation;
export type ManifestationValidator = (instance: IManifestation) => ValidationResult;
