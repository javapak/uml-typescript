import { IElement } from './IElement';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateSignature } from './ITemplateSignature';
import { ITemplateableElement } from './ITemplateableElement';
import { TemplateableElement } from './TemplateableElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for TemplateableElement
 */
export type PartialTemplateableElement = Partial<ITemplateableElement>;
export type RequiredTemplateableElement = Required<ITemplateableElement>;
export type TemplateableElementMetadata = Pick<ITemplateableElement, 'ownedComment' | 'ownedTemplateSignature'>;
export type TemplateableElementSummary = Pick<ITemplateableElement, 'eAnnotations' | 'ownedComment' | 'templateBinding'>;
export type TemplateableElementUnion = ITemplateableElement | IElement;
export type TemplateableElementFactory = () => TemplateableElement;
export type TemplateableElementValidator = (instance: ITemplateableElement) => ValidationResult;
