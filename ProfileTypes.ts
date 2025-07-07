import { IElementImport } from './IElementImport';
import { IPackage } from './IPackage';
import { IPackageImport } from './IPackageImport';
import { IProfile } from './IProfile';
import { Profile } from './Profile';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Profile
 */
export type PartialProfile = Partial<IProfile>;
export type RequiredProfile = Required<IProfile>;
export type ProfileKey = Pick<IProfile, 'name' | 'nameExpression'>;
export type ProfileMetadata = Pick<IProfile, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'metaclassReference' | 'metamodelReference'>;
export type ProfileSummary = Pick<IProfile, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ProfileUnion = IProfile | IPackage;
export type ProfileFactory = () => Profile;
export type ProfileValidator = (instance: IProfile) => ValidationResult;
