/**
 * Implementation class for DeploymentTarget
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { IComment } from './IComment';
import { IDeployment } from './IDeployment';
import { IDeploymentTarget } from './IDeploymentTarget';
import { INamedElement } from './INamedElement';
import { IStringExpression } from './IStringExpression';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class DeploymentTarget extends NamedElement implements IDeploymentTarget {
  /**
   * deployment
   * 
   * @type Deployment
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite location
   */
  public deployment: Set<IDeployment> = new Set();

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

  constructor(init?: Partial<IDeploymentTarget>) {
    super(init);

    this.deployment = init?.deployment ? new Set(init.deployment) : new Set();
  }
  getDeployment(): Set<IDeployment> {
    return this.deployment;
  }

  setDeployment(value: Set<IDeployment>): void {
    this.deployment = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IDeploymentTarget {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      deployment: this.deployment,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.deployment = Array.from(this.deployment);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): DeploymentTarget {
    return new DeploymentTarget(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IDeploymentTarget>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof DeploymentTarget)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `DeploymentTarget{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): DeploymentTarget {
    const instance = new DeploymentTarget();

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
    if (json.deployment && Array.isArray(json.deployment)) {
      instance.deployment = new Set(json.deployment);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.deployment) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IDeploymentTarget): ValidationResult {
    if (instance instanceof DeploymentTarget) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new DeploymentTarget(instance);
    return temp.validate();
  }
}
