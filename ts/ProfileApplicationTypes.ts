import { IDirectedRelationship } from './IDirectedRelationship';
import { IPackage } from './IPackage';
import { IProfile } from './IProfile';
import { IProfileApplication } from './IProfileApplication';
import { ProfileApplication } from './ProfileApplication';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ProfileApplication
 */
export type PartialProfileApplication = Partial<IProfileApplication>;
export type RequiredProfileApplication = Required<IProfileApplication>;
export type ProfileApplicationUnion = IProfileApplication | IDirectedRelationship;
export type ProfileApplicationFactory = () => ProfileApplication;
export type ProfileApplicationValidator = (instance: IProfileApplication) => ValidationResult;
