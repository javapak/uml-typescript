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
export type InstanceSpecificationKey = Pick<IInstanceSpecification, 'name' | 'nameExpression'>;
export type InstanceSpecificationMetadata = Pick<IInstanceSpecification, 'ownedComment' | 'visibility'>;
export type InstanceSpecificationSummary = Pick<IInstanceSpecification, 'eAnnotations' | 'ownedComment' | 'name'>;
export type InstanceSpecificationUnion = IInstanceSpecification | IDeploymentTarget | IPackageableElement | IDeployedArtifact;
export type InstanceSpecificationFactory = () => InstanceSpecification;
export type InstanceSpecificationValidator = (instance: IInstanceSpecification) => ValidationResult;
