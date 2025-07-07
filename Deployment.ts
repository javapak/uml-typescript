/**
 * Implementation class for Deployment
 * 
 * @since UML 2.5
 * @package uml
 * @extends Dependency
 */
import { Comment } from './Comment';
import { Dependency } from './Dependency';
import { DeploymentSpecification } from './DeploymentSpecification';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IDeployedArtifact } from './IDeployedArtifact';
import { IDeployment } from './IDeployment';
import { IDeploymentSpecification } from './IDeploymentSpecification';
import { IDeploymentTarget } from './IDeploymentTarget';
import { IElement } from './IElement';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Deployment extends Dependency implements IDeployment {
  /**
   * configuration
   * 
   * @type DeploymentSpecification
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite deployment
   */
  public configuration: Set<IDeploymentSpecification> = new Set();

  /**
   * deployedArtifact
   * 
   * @type DeployedArtifact
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public deployedArtifact: Set<IDeployedArtifact | string> = new Set();

  /**
   * location
   * 
   * @type DeploymentTarget
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite deployment
   */
  public location!: IDeploymentTarget | string;

  // Inherited from Dependency
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Dependency
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from Dependency
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from Dependency
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from Dependency
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from Dependency
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Dependency
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Dependency
  /**
   * client
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public client: Set<INamedElement | string> = new Set();

  // Inherited from Dependency
  /**
   * supplier
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public supplier: Set<INamedElement | string> = new Set();

  constructor(init?: Partial<IDeployment>) {
    super(init);
    this.configuration = init?.configuration ?? new Set();
    this.deployedArtifact = init?.deployedArtifact ?? new Set();
    this.location = init?.location!;
  }
  getConfiguration(): Set<IDeploymentSpecification> {
    return this.configuration;
  }

  setConfiguration(value: Set<IDeploymentSpecification>): void {
    this.configuration = value;
  }

  getDeployedArtifact(): Set<IDeployedArtifact | string> {
    return this.deployedArtifact;
  }

  setDeployedArtifact(value: Set<IDeployedArtifact | string>): void {
    this.deployedArtifact = value;
  }

  getLocation(): IDeploymentTarget | string {
    return this.location;
  }

  setLocation(value: IDeploymentTarget | string): void {
    this.location = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IDeployment {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      configuration: this.configuration,
      deployedArtifact: this.deployedArtifact,
      location: this.location,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.configuration = Array.from(this.configuration);
    result.deployedArtifact = Array.from(this.deployedArtifact);
    result.location = this.location;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Deployment {
    return new Deployment(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IDeployment>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Deployment)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Deployment{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Deployment {
    const instance = new Deployment();

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
    if (json.owningTemplateParameter !== undefined) {
      instance.owningTemplateParameter = json.owningTemplateParameter;
    }
    if (json.templateParameter !== undefined) {
      instance.templateParameter = json.templateParameter;
    }
    if (json.client && Array.isArray(json.client)) {
      instance.client = new Set(json.client);
    }
    if (json.supplier && Array.isArray(json.supplier)) {
      instance.supplier = new Set(json.supplier);
    }
    if (json.configuration && Array.isArray(json.configuration)) {
      instance.configuration = new Set(json.configuration);
    }
    if (json.deployedArtifact && Array.isArray(json.deployedArtifact)) {
      instance.deployedArtifact = new Set(json.deployedArtifact);
    }
    instance.location = json.location;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.configuration) {
    }
    if (this.deployedArtifact) {
    }
    if (this.location == null) {
      errors.push({
        property: 'location',
        message: 'location is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IDeployment): ValidationResult {
    if (instance instanceof Deployment) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Deployment(instance);
    return temp.validate();
  }
}
