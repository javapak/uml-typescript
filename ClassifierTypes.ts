import { Classifier } from './Classifier';
import { IClassifier } from './IClassifier';
import { ICollaborationUse } from './ICollaborationUse';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { INamespace } from './INamespace';
import { IRedefinableElement } from './IRedefinableElement';
import { ISubstitution } from './ISubstitution';
import { ITemplateableElement } from './ITemplateableElement';
import { IType } from './IType';
import { IUseCase } from './IUseCase';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Classifier
 */
export type PartialClassifier = Partial<IClassifier>;
export type RequiredClassifier = Required<IClassifier>;
export type ClassifierKey = Pick<IClassifier, 'name' | 'nameExpression'>;
export type ClassifierMetadata = Pick<IClassifier, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase'>;
export type ClassifierSummary = Pick<IClassifier, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ClassifierUnion = IClassifier | INamespace | IRedefinableElement | IType | ITemplateableElement;
export type ClassifierFactory = () => Classifier;
export type ClassifierValidator = (instance: IClassifier) => ValidationResult;
