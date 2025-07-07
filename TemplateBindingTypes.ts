import { IDirectedRelationship } from './IDirectedRelationship';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameterSubstitution } from './ITemplateParameterSubstitution';
import { ITemplateSignature } from './ITemplateSignature';
import { ITemplateableElement } from './ITemplateableElement';
import { TemplateBinding } from './TemplateBinding';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for TemplateBinding
 */
export type PartialTemplateBinding = Partial<ITemplateBinding>;
export type RequiredTemplateBinding = Required<ITemplateBinding>;
export type TemplateBindingMetadata = Pick<ITemplateBinding, 'ownedComment'>;
export type TemplateBindingSummary = Pick<ITemplateBinding, 'eAnnotations' | 'ownedComment' | 'parameterSubstitution'>;
export type TemplateBindingUnion = ITemplateBinding | IDirectedRelationship;
export type TemplateBindingFactory = () => TemplateBinding;
export type TemplateBindingValidator = (instance: ITemplateBinding) => ValidationResult;
