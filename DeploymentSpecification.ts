/**
 * Implementation class for DeploymentSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @extends Artifact
 */
import { Artifact } from './Artifact';
import { CollaborationUse } from './CollaborationUse';
import { Comment } from './Comment';
import { Constraint } from './Constraint';
import { ElementImport } from './ElementImport';
import { Generalization } from './Generalization';
import { IArtifact } from './IArtifact';
import { IClassifier } from './IClassifier';
import { ICollaborationUse } from './ICollaborationUse';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IDeployment } from './IDeployment';
import { IDeploymentSpecification } from './IDeploymentSpecification';
import { IElement } from './IElement';
import { IElementImport } from './IElementImport';
import { IFeature } from './IFeature';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { IManifestation } from './IManifestation';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IOperation } from './IOperation';
import { IPackage } from './IPackage';
import { IPackageImport } from './IPackageImport';
import { IPackageableElement } from './IPackageableElement';
import { IProperty } from './IProperty';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { ISubstitution } from './ISubstitution';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { IUseCase } from './IUseCase';
import { Manifestation } from './Manifestation';
import { Operation } from './Operation';
import { PackageImport } from './PackageImport';
import { Property } from './Property';
import { StringExpression } from './StringExpression';
import { Substitution } from './Substitution';
import { TemplateBinding } from './TemplateBinding';
import { TemplateSignature } from './TemplateSignature';
import { UseCase } from './UseCase';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class DeploymentSpecification extends Artifact implements IDeploymentSpecification {
  /**
   * deploymentLocation
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public deploymentLocation?: string = undefined;

  /**
   * executionLocation
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public executionLocation?: string = undefined;

  /**
   * deployment
   * 
   * @type Deployment
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite configuration
   */
  public deployment?: IDeployment | string = undefined;

  // Inherited from Artifact
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Artifact
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from Artifact
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from Artifact
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from Artifact
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from Artifact
  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  // Inherited from Artifact
  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  // Inherited from Artifact
  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

  // Inherited from Artifact
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from Artifact
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Artifact
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Artifact
  /**
   * templateBinding
   * 
   * @type TemplateBinding
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite boundElement
   */
  public templateBinding: Set<ITemplateBinding> = new Set();

  // Inherited from Artifact
  /**
   * ownedTemplateSignature
   * 
   * @type TemplateSignature
   * @multiplicity [0..1]
   * @relationship containment
   * @opposite template
   */
  public ownedTemplateSignature?: ITemplateSignature = undefined;

  // Inherited from Artifact
  /**
   * collaborationUse
   * 
   * @type CollaborationUse
   * @multiplicity [0..*]
   * @relationship containment
   */
  public collaborationUse: Set<ICollaborationUse> = new Set();

  // Inherited from Artifact
  /**
   * generalization
   * 
   * @type Generalization
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite specific
   */
  public generalization: Set<IGeneralization> = new Set();

  // Inherited from Artifact
  /**
   * powertypeExtent
   * 
   * @type GeneralizationSet
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite powertype
   */
  public powertypeExtent: Set<IGeneralizationSet | string> = new Set();

  // Inherited from Artifact
  /**
   * isAbstract
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isAbstract!: boolean;

  // Inherited from Artifact
  /**
   * isFinalSpecialization
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isFinalSpecialization!: boolean;

  // Inherited from Artifact
  /**
   * ownedUseCase
   * 
   * @type UseCase
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedUseCase: Set<IUseCase> = new Set();

  // Inherited from Artifact
  /**
   * useCase
   * 
   * @type UseCase
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite subject
   */
  public useCase: Set<IUseCase | string> = new Set();

  // Inherited from Artifact
  /**
   * redefinedClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedClassifier: Set<IClassifier | string> = new Set();

  // Inherited from Artifact
  /**
   * representation
   * 
   * @type CollaborationUse
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public representation?: ICollaborationUse | string = undefined;

  // Inherited from Artifact
  /**
   * substitution
   * 
   * @type Substitution
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite substitutingClassifier
   */
  public substitution: Set<ISubstitution> = new Set();

  // Inherited from Artifact
  /**
   * fileName
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public fileName?: string = undefined;

  // Inherited from Artifact
  /**
   * manifestation
   * 
   * @type Manifestation
   * @multiplicity [0..*]
   * @relationship containment
   */
  public manifestation: Set<IManifestation> = new Set();

  // Inherited from Artifact
  /**
   * nestedArtifact
   * 
   * @type Artifact
   * @multiplicity [0..*]
   * @relationship containment
   */
  public nestedArtifact: Set<IArtifact> = new Set();

  // Inherited from Artifact
  /**
   * ownedAttribute
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedAttribute: IProperty[] = [];

  // Inherited from Artifact
  /**
   * ownedOperation
   * 
   * @type Operation
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedOperation: IOperation[] = [];

  constructor(init?: Partial<IDeploymentSpecification>) {
    super(init);
    this.deploymentLocation = init?.deploymentLocation ?? undefined;
    this.executionLocation = init?.executionLocation ?? undefined;
    this.deployment = init?.deployment ?? undefined;
  }
  getDeploymentLocation(): string | undefined {
    return this.deploymentLocation;
  }

  setDeploymentLocation(value: string | undefined): void {
    this.deploymentLocation = value;
  }

  getExecutionLocation(): string | undefined {
    return this.executionLocation;
  }

  setExecutionLocation(value: string | undefined): void {
    this.executionLocation = value;
  }

  getDeployment(): IDeployment | string | undefined {
    return this.deployment;
  }

  setDeployment(value: IDeployment | string | undefined): void {
    this.deployment = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IDeploymentSpecification {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.deploymentLocation !== undefined && { deploymentLocation: this.deploymentLocation }),
      ...(this.executionLocation !== undefined && { executionLocation: this.executionLocation }),
      ...(this.deployment !== undefined && { deployment: this.deployment }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.deploymentLocation !== undefined) {
      result.deploymentLocation = this.deploymentLocation;
    }
    if (this.executionLocation !== undefined) {
      result.executionLocation = this.executionLocation;
    }
    if (this.deployment !== undefined) {
      result.deployment = this.deployment;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): DeploymentSpecification {
    return new DeploymentSpecification(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IDeploymentSpecification>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof DeploymentSpecification)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `DeploymentSpecification{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): DeploymentSpecification {
    const instance = new DeploymentSpecification();

    if (json.eAnnotations && Array.isArray(json.eAnnotations)) {
      instance.eAnnotations = [...json.eAnnotations];
    }
    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    if (json.name !== undefined) {
      instance.name = json.name;
    }
    if (json.nameExpression !== undefined) {
      instance.nameExpression = json.nameExpression;
    }
    if (json.visibility !== undefined) {
      instance.visibility = json.visibility;
    }
    if (json.ownedRule && Array.isArray(json.ownedRule)) {
      instance.ownedRule = new Set(json.ownedRule);
    }
    if (json.elementImport && Array.isArray(json.elementImport)) {
      instance.elementImport = new Set(json.elementImport);
    }
    if (json.packageImport && Array.isArray(json.packageImport)) {
      instance.packageImport = new Set(json.packageImport);
    }
    instance.isLeaf = json.isLeaf;
    if (json.owningTemplateParameter !== undefined) {
      instance.owningTemplateParameter = json.owningTemplateParameter;
    }
    if (json.templateParameter !== undefined) {
      instance.templateParameter = json.templateParameter;
    }
    if (json.templateBinding && Array.isArray(json.templateBinding)) {
      instance.templateBinding = new Set(json.templateBinding);
    }
    if (json.ownedTemplateSignature !== undefined) {
      instance.ownedTemplateSignature = json.ownedTemplateSignature;
    }
    if (json.collaborationUse && Array.isArray(json.collaborationUse)) {
      instance.collaborationUse = new Set(json.collaborationUse);
    }
    if (json.generalization && Array.isArray(json.generalization)) {
      instance.generalization = new Set(json.generalization);
    }
    if (json.powertypeExtent && Array.isArray(json.powertypeExtent)) {
      instance.powertypeExtent = new Set(json.powertypeExtent);
    }
    instance.isAbstract = json.isAbstract;
    instance.isFinalSpecialization = json.isFinalSpecialization;
    if (json.ownedUseCase && Array.isArray(json.ownedUseCase)) {
      instance.ownedUseCase = new Set(json.ownedUseCase);
    }
    if (json.useCase && Array.isArray(json.useCase)) {
      instance.useCase = new Set(json.useCase);
    }
    if (json.redefinedClassifier && Array.isArray(json.redefinedClassifier)) {
      instance.redefinedClassifier = new Set(json.redefinedClassifier);
    }
    if (json.representation !== undefined) {
      instance.representation = json.representation;
    }
    if (json.substitution && Array.isArray(json.substitution)) {
      instance.substitution = new Set(json.substitution);
    }
    if (json.fileName !== undefined) {
      instance.fileName = json.fileName;
    }
    if (json.manifestation && Array.isArray(json.manifestation)) {
      instance.manifestation = new Set(json.manifestation);
    }
    if (json.nestedArtifact && Array.isArray(json.nestedArtifact)) {
      instance.nestedArtifact = new Set(json.nestedArtifact);
    }
    if (json.ownedAttribute && Array.isArray(json.ownedAttribute)) {
      instance.ownedAttribute = [...json.ownedAttribute];
    }
    if (json.ownedOperation && Array.isArray(json.ownedOperation)) {
      instance.ownedOperation = [...json.ownedOperation];
    }
    if (json.deploymentLocation !== undefined) {
      instance.deploymentLocation = json.deploymentLocation;
    }
    if (json.executionLocation !== undefined) {
      instance.executionLocation = json.executionLocation;
    }
    if (json.deployment !== undefined) {
      instance.deployment = json.deployment;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.deploymentLocation !== undefined) {
      if (typeof this.deploymentLocation !== 'string') {
        errors.push({
          property: 'deploymentLocation',
          message: 'deploymentLocation must be a string',
          code: 'TYPE_ERROR',
          value: this.deploymentLocation
        });
      }
    }
    if (this.executionLocation !== undefined) {
      if (typeof this.executionLocation !== 'string') {
        errors.push({
          property: 'executionLocation',
          message: 'executionLocation must be a string',
          code: 'TYPE_ERROR',
          value: this.executionLocation
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IDeploymentSpecification): ValidationResult {
    if (instance instanceof DeploymentSpecification) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new DeploymentSpecification(instance);
    return temp.validate();
  }
}
