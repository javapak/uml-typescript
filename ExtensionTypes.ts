import { Extension } from './Extension';
import { IAssociation } from './IAssociation';
import { IExtension } from './IExtension';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Extension
 */
export type PartialExtension = Partial<IExtension>;
export type RequiredExtension = Required<IExtension>;
export type ExtensionKey = Pick<IExtension, 'name' | 'nameExpression'>;
export type ExtensionMetadata = Pick<IExtension, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedEnd'>;
export type ExtensionSummary = Pick<IExtension, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ExtensionUnion = IExtension | IAssociation;
export type ExtensionFactory = () => Extension;
export type ExtensionValidator = (instance: IExtension) => ValidationResult;
