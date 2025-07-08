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
export type ProfileUnion = IProfile | IPackage;
export type ProfileFactory = () => Profile;
export type ProfileValidator = (instance: IProfile) => ValidationResult;
