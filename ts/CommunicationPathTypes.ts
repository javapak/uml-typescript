import { CommunicationPath } from './CommunicationPath';
import { IAssociation } from './IAssociation';
import { ICommunicationPath } from './ICommunicationPath';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for CommunicationPath
 */
export type PartialCommunicationPath = Partial<ICommunicationPath>;
export type RequiredCommunicationPath = Required<ICommunicationPath>;
export type CommunicationPathUnion = ICommunicationPath | IAssociation;
export type CommunicationPathFactory = () => CommunicationPath;
export type CommunicationPathValidator = (instance: ICommunicationPath) => ValidationResult;
