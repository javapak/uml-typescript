import { IClassifier } from './IClassifier';
import { IDeployedArtifact } from './IDeployedArtifact';
import { IDeploymentTarget } from './IDeploymentTarget';
import { IInstanceSpecification } from './IInstanceSpecification';
import { IPackageableElement } from './IPackageableElement';
import { ISlot } from './ISlot';
import { IValueSpecification } from './IValueSpecification';
import { InstanceSpecification } from './InstanceSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InstanceSpecification
 */
export type PartialInstanceSpecification = Partial<IInstanceSpecification>;
export type RequiredInstanceSpecification = Required<IInstanceSpecification>;
export type InstanceSpecificationUnion = IInstanceSpecification | IDeploymentTarget | IPackageableElement | IDeployedArtifact;
export type InstanceSpecificationFactory = () => InstanceSpecification;
export type InstanceSpecificationValidator = (instance: IInstanceSpecification) => ValidationResult;
