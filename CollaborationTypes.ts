import { Collaboration } from './Collaboration';
import { IBehavioredClassifier } from './IBehavioredClassifier';
import { ICollaboration } from './ICollaboration';
import { IConnectableElement } from './IConnectableElement';
import { IStructuredClassifier } from './IStructuredClassifier';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Collaboration
 */
export type PartialCollaboration = Partial<ICollaboration>;
export type RequiredCollaboration = Required<ICollaboration>;
export type CollaborationKey = Pick<ICollaboration, 'name' | 'nameExpression'>;
export type CollaborationMetadata = Pick<ICollaboration, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedAttribute' | 'ownedConnector' | 'ownedBehavior'>;
export type CollaborationSummary = Pick<ICollaboration, 'eAnnotations' | 'ownedComment' | 'name'>;
export type CollaborationUnion = ICollaboration | IStructuredClassifier | IBehavioredClassifier;
export type CollaborationFactory = () => Collaboration;
export type CollaborationValidator = (instance: ICollaboration) => ValidationResult;
