import { DeployedArtifact } from './DeployedArtifact';
import { IDeployedArtifact } from './IDeployedArtifact';
import { INamedElement } from './INamedElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for DeployedArtifact
 */
export type PartialDeployedArtifact = Partial<IDeployedArtifact>;
export type RequiredDeployedArtifact = Required<IDeployedArtifact>;
export type DeployedArtifactUnion = IDeployedArtifact | INamedElement;
export type DeployedArtifactFactory = () => DeployedArtifact;
export type DeployedArtifactValidator = (instance: IDeployedArtifact) => ValidationResult;
