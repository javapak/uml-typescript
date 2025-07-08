/**
 * Interface for Deployment
 * 
 * @since UML 2.5
 * @package uml
 * @extends Dependency
 */
import { DeploymentSpecification } from './DeploymentSpecification';
import { IDependency } from './IDependency';
import { IDeployedArtifact } from './IDeployedArtifact';
import { IDeploymentSpecification } from './IDeploymentSpecification';
import { IDeploymentTarget } from './IDeploymentTarget';

export interface IDeployment extends IDependency {
  /**
   * configuration
   * 
   * @type DeploymentSpecification
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite deployment
   */
  configuration?: Set<IDeploymentSpecification>;
  /**
   * deployedArtifact
   * 
   * @type DeployedArtifact
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  deployedArtifact?: Set<string>;
  /**
   * location
   * 
   * @type DeploymentTarget
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite deployment
   */
  location: string;
}

// Type aliases for Deployment
export type DeploymentInput = Partial<IDeployment>;
export type DeploymentOutput = IDeployment;
