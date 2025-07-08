import { CollaborationUse } from './CollaborationUse';
import { ICollaboration } from './ICollaboration';
import { ICollaborationUse } from './ICollaborationUse';
import { IDependency } from './IDependency';
import { INamedElement } from './INamedElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for CollaborationUse
 */
export type PartialCollaborationUse = Partial<ICollaborationUse>;
export type RequiredCollaborationUse = Required<ICollaborationUse>;
export type CollaborationUseUnion = ICollaborationUse | INamedElement;
export type CollaborationUseFactory = () => CollaborationUse;
export type CollaborationUseValidator = (instance: ICollaborationUse) => ValidationResult;
