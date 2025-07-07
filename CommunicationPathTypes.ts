import { CommunicationPath } from './CommunicationPath';
import { IAssociation } from './IAssociation';
import { ICommunicationPath } from './ICommunicationPath';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for CommunicationPath
 */
export type PartialCommunicationPath = Partial<ICommunicationPath>;
export type RequiredCommunicationPath = Required<ICommunicationPath>;
export type CommunicationPathKey = Pick<ICommunicationPath, 'name' | 'nameExpression'>;
export type CommunicationPathMetadata = Pick<ICommunicationPath, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedEnd'>;
export type CommunicationPathSummary = Pick<ICommunicationPath, 'eAnnotations' | 'ownedComment' | 'name'>;
export type CommunicationPathUnion = ICommunicationPath | IAssociation;
export type CommunicationPathFactory = () => CommunicationPath;
export type CommunicationPathValidator = (instance: ICommunicationPath) => ValidationResult;
