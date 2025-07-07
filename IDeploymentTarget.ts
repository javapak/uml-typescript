/**
 * Interface for DeploymentTarget
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { Deployment } from './Deployment';
import { IDeployment } from './IDeployment';
import { INamedElement } from './INamedElement';

export interface IDeploymentTarget extends INamedElement {
  /**
   * deployment
   * 
   * @type Deployment
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite location
   */
  deployment: Set<IDeployment>;
}

// Type aliases for DeploymentTarget
export type DeploymentTargetInput = Partial<IDeploymentTarget>;
export type DeploymentTargetOutput = IDeploymentTarget;
export type DeploymentTargetUnion = IDeploymentTarget | IProperty | IInstanceSpecification | INode;
