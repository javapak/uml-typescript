import { Artifact } from './Artifact';
import { IArtifact } from './IArtifact';
import { IClassifier } from './IClassifier';
import { IDeployedArtifact } from './IDeployedArtifact';
import { IManifestation } from './IManifestation';
import { IOperation } from './IOperation';
import { IProperty } from './IProperty';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Artifact
 */
export type PartialArtifact = Partial<IArtifact>;
export type RequiredArtifact = Required<IArtifact>;
export type ArtifactKey = Pick<IArtifact, 'name' | 'nameExpression' | 'fileName'>;
export type ArtifactMetadata = Pick<IArtifact, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedAttribute' | 'ownedOperation'>;
export type ArtifactSummary = Pick<IArtifact, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ArtifactUnion = IArtifact | IClassifier | IDeployedArtifact;
export type ArtifactFactory = () => Artifact;
export type ArtifactValidator = (instance: IArtifact) => ValidationResult;
