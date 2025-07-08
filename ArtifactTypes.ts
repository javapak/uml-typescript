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
export type ArtifactKey = Pick<IArtifact, 'fileName'>;
export type ArtifactSummary = Pick<IArtifact, 'fileName'>;
export type ArtifactUnion = IArtifact | IClassifier | IDeployedArtifact;
export type ArtifactFactory = () => Artifact;
export type ArtifactValidator = (instance: IArtifact) => ValidationResult;
