/**
 * Interface for DeployedArtifact
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { IArtifact } from './IArtifact';
import { IInstanceSpecification } from './IInstanceSpecification';
import { INamedElement } from './INamedElement';

export interface IDeployedArtifact extends INamedElement {
}

// Type aliases for DeployedArtifact
export type DeployedArtifactInput = Partial<IDeployedArtifact>;
export type DeployedArtifactOutput = IDeployedArtifact;
export type DeployedArtifactUnion = IDeployedArtifact | IArtifact | IInstanceSpecification;
