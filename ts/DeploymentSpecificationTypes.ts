import { DeploymentSpecification } from './DeploymentSpecification';
import { IArtifact } from './IArtifact';
import { IDeployment } from './IDeployment';
import { IDeploymentSpecification } from './IDeploymentSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for DeploymentSpecification
 */
export type PartialDeploymentSpecification = Partial<IDeploymentSpecification>;
export type RequiredDeploymentSpecification = Required<IDeploymentSpecification>;
export type DeploymentSpecificationUnion = IDeploymentSpecification | IArtifact;
export type DeploymentSpecificationFactory = () => DeploymentSpecification;
export type DeploymentSpecificationValidator = (instance: IDeploymentSpecification) => ValidationResult;
