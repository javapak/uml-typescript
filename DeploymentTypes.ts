import { Deployment } from './Deployment';
import { IDependency } from './IDependency';
import { IDeployedArtifact } from './IDeployedArtifact';
import { IDeployment } from './IDeployment';
import { IDeploymentSpecification } from './IDeploymentSpecification';
import { IDeploymentTarget } from './IDeploymentTarget';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Deployment
 */
export type PartialDeployment = Partial<IDeployment>;
export type RequiredDeployment = Required<IDeployment>;
export type DeploymentUnion = IDeployment | IDependency;
export type DeploymentFactory = () => Deployment;
export type DeploymentValidator = (instance: IDeployment) => ValidationResult;
