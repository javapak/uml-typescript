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
export type RedefinableTemplateSignatureUnion = IRedefinableTemplateSignature | IRedefinableElement | ITemplateSignature;
export type RedefinableTemplateSignatureFactory = () => RedefinableTemplateSignature;
export type RedefinableTemplateSignatureValidator = (instance: IRedefinableTemplateSignature) => ValidationResult;
