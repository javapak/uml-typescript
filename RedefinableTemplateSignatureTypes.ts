import { IRedefinableElement } from './IRedefinableElement';
import { IRedefinableTemplateSignature } from './IRedefinableTemplateSignature';
import { ITemplateSignature } from './ITemplateSignature';
import { RedefinableTemplateSignature } from './RedefinableTemplateSignature';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for RedefinableTemplateSignature
 */
export type PartialRedefinableTemplateSignature = Partial<IRedefinableTemplateSignature>;
export type RequiredRedefinableTemplateSignature = Required<IRedefinableTemplateSignature>;
export type RedefinableTemplateSignatureKey = Pick<IRedefinableTemplateSignature, 'name' | 'nameExpression'>;
export type RedefinableTemplateSignatureMetadata = Pick<IRedefinableTemplateSignature, 'ownedComment' | 'visibility' | 'ownedParameter'>;
export type RedefinableTemplateSignatureSummary = Pick<IRedefinableTemplateSignature, 'eAnnotations' | 'ownedComment' | 'name'>;
export type RedefinableTemplateSignatureUnion = IRedefinableTemplateSignature | IRedefinableElement | ITemplateSignature;
export type RedefinableTemplateSignatureFactory = () => RedefinableTemplateSignature;
export type RedefinableTemplateSignatureValidator = (instance: IRedefinableTemplateSignature) => ValidationResult;
