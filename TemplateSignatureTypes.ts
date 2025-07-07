import { IElement } from './IElement';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { ITemplateableElement } from './ITemplateableElement';
import { TemplateSignature } from './TemplateSignature';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for TemplateSignature
 */
export type PartialTemplateSignature = Partial<ITemplateSignature>;
export type RequiredTemplateSignature = Required<ITemplateSignature>;
export type TemplateSignatureMetadata = Pick<ITemplateSignature, 'ownedComment' | 'ownedParameter'>;
export type TemplateSignatureSummary = Pick<ITemplateSignature, 'eAnnotations' | 'ownedComment' | 'parameter'>;
export type TemplateSignatureUnion = ITemplateSignature | IElement;
export type TemplateSignatureFactory = () => TemplateSignature;
export type TemplateSignatureValidator = (instance: ITemplateSignature) => ValidationResult;
