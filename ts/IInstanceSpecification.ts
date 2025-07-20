/**
 * Interface for InstanceSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @extends DeploymentTarget, PackageableElement, DeployedArtifact
 */
import { IClassifier } from './IClassifier';
import { IDeployedArtifact } from './IDeployedArtifact';
import { IDeploymentTarget } from './IDeploymentTarget';
import { IEnumerationLiteral } from './IEnumerationLiteral';
import { IPackageableElement } from './IPackageableElement';
import { ISlot } from './ISlot';
import { IValueSpecification } from './IValueSpecification';
import { Slot } from './Slot';
import { ValueSpecification } from './ValueSpecification';

export interface IInstanceSpecification extends IDeploymentTarget, IPackageableElement, IDeployedArtifact {
  /**
   * classifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  classifier?: Set<string>;
  /**
   * slot
   * 
   * @type Slot
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite owningInstance
   */
  slot?: Set<ISlot>;
  /**
   * specification
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  specification?: IValueSpecification;
}

// Type aliases for InstanceSpecification
export type InstanceSpecificationInput = Partial<IInstanceSpecification>;
export type InstanceSpecificationOutput = IInstanceSpecification;
export type InstanceSpecificationUnion = IInstanceSpecification | IEnumerationLiteral;
