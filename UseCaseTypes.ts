import { IBehavioredClassifier } from './IBehavioredClassifier';
import { IClassifier } from './IClassifier';
import { IExtend } from './IExtend';
import { IExtensionPoint } from './IExtensionPoint';
import { IInclude } from './IInclude';
import { IUseCase } from './IUseCase';
import { UseCase } from './UseCase';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for UseCase
 */
export type PartialUseCase = Partial<IUseCase>;
export type RequiredUseCase = Required<IUseCase>;
export type UseCaseKey = Pick<IUseCase, 'name' | 'nameExpression'>;
export type UseCaseMetadata = Pick<IUseCase, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedBehavior'>;
export type UseCaseSummary = Pick<IUseCase, 'eAnnotations' | 'ownedComment' | 'name'>;
export type UseCaseUnion = IUseCase | IBehavioredClassifier;
export type UseCaseFactory = () => UseCase;
export type UseCaseValidator = (instance: IUseCase) => ValidationResult;
