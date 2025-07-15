/**
 * Interface for Artifact
 * 
 * @since UML 2.5
 * @package uml
 * @extends Classifier, DeployedArtifact
 */
import { IClassifier } from './IClassifier';
import { IDeployedArtifact } from './IDeployedArtifact';
import { IDeploymentSpecification } from './IDeploymentSpecification';
import { IManifestation } from './IManifestation';
import { IOperation } from './IOperation';
import { IProperty } from './IProperty';
import { Manifestation } from './Manifestation';
import { Operation } from './Operation';
import { Property } from './Property';

export interface IArtifact extends IClassifier, IDeployedArtifact {
  /**
   * fileName
   * 
   * @type String
   * @multiplicity [0..1]
   */
  fileName?: string;
  /**
   * manifestation
   * 
   * @type Manifestation
   * @multiplicity [0..*]
   * @relationship containment
   */
  manifestation?: Set<IManifestation>;
  /**
   * nestedArtifact
   * 
   * @type Artifact
   * @multiplicity [0..*]
   * @relationship containment
   */
  nestedArtifact?: Set<IArtifact>;
  /**
   * ownedAttribute
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   */
  ownedAttribute?: IProperty[];
  /**
   * ownedOperation
   * 
   * @type Operation
   * @multiplicity [0..*]
   * @relationship containment
   */
  ownedOperation?: IOperation[];
}

// Type aliases for Artifact
export type ArtifactInput = Partial<IArtifact>;
export type ArtifactOutput = IArtifact;
export type ArtifactUnion = IArtifact | IDeploymentSpecification;
