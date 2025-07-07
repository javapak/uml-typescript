/**
 * Interface for DeploymentSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @extends Artifact
 */
import { IArtifact } from './IArtifact';
import { IDeployment } from './IDeployment';

export interface IDeploymentSpecification extends IArtifact {
  /**
   * deploymentLocation
   * 
   * @type String
   * @multiplicity [0..1]
   */
  deploymentLocation?: string;
  /**
   * executionLocation
   * 
   * @type String
   * @multiplicity [0..1]
   */
  executionLocation?: string;
  /**
   * deployment
   * 
   * @type Deployment
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite configuration
   */
  deployment?: IDeployment | string;
}

// Type aliases for DeploymentSpecification
export type DeploymentSpecificationInput = Partial<IDeploymentSpecification>;
export type DeploymentSpecificationOutput = IDeploymentSpecification;
