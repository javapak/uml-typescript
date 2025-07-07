import { DeploymentTarget } from './DeploymentTarget';
import { IDeployment } from './IDeployment';
import { IDeploymentTarget } from './IDeploymentTarget';
import { INamedElement } from './INamedElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for DeploymentTarget
 */
export type PartialDeploymentTarget = Partial<IDeploymentTarget>;
export type RequiredDeploymentTarget = Required<IDeploymentTarget>;
export type DeploymentTargetKey = Pick<IDeploymentTarget, 'name' | 'nameExpression'>;
export type DeploymentTargetMetadata = Pick<IDeploymentTarget, 'ownedComment' | 'visibility'>;
export type DeploymentTargetSummary = Pick<IDeploymentTarget, 'eAnnotations' | 'ownedComment' | 'name'>;
export type DeploymentTargetUnion = IDeploymentTarget | INamedElement;
export type DeploymentTargetFactory = () => DeploymentTarget;
export type DeploymentTargetValidator = (instance: IDeploymentTarget) => ValidationResult;
