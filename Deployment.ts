/**
 * Implementation class for Deployment
 * 
 * @since UML 2.5
 * @package uml
 * @extends Dependency
 */
import { Dependency } from './Dependency';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IDeployedArtifact } from './IDeployedArtifact';
import { IDeployment } from './IDeployment';
import { IDeploymentSpecification } from './IDeploymentSpecification';
import { IDeploymentTarget } from './IDeploymentTarget';
import { INamedElement } from './INamedElement';
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
  public deployedArtifact: Set<string> = new Set();

  /**
   * location
   * 
   * @type DeploymentTarget
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite deployment
   */
  public location!: string;

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string;

  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression;

  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility: VisibilityKind | undefined = undefined;
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: string;

  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: string;

  /**
   * client
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public client: Set<string> = new Set();

  /**
   * supplier
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public supplier: Set<string> = new Set();


  constructor(init?: Partial<IDeployment>) {
    super(init);

    this.configuration = init?.configuration ? new Set(init.configuration) : new Set();
    this.deployedArtifact = init?.deployedArtifact ? new Set(init.deployedArtifact) : new Set();
    this.location = init?.location ?? '';
  }
  getConfiguration(): Set<IDeploymentSpecification> {
    return this.configuration;
  }

  setConfiguration(value: Set<IDeploymentSpecification>): void {
    this.configuration = value;
  }

  getDeployedArtifact(): Set<string> {
    return this.deployedArtifact;
  }

  setDeployedArtifact(value: Set<string>): void {
    this.deployedArtifact = value;
  }

  getLocation(): string {
    return this.location;
  }

  setLocation(value: string): void {
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
