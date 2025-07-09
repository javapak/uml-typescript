/**
 * Implementation class for InstanceSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @extends DeploymentTarget, PackageableElement, DeployedArtifact
 */
import { DeployedArtifact } from './DeployedArtifact';
import { DeploymentTarget } from './DeploymentTarget';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IDeployedArtifact } from './IDeployedArtifact';
import { IDeployment } from './IDeployment';
import { IDeploymentTarget } from './IDeploymentTarget';
import { IInstanceSpecification } from './IInstanceSpecification';
import { IPackageableElement } from './IPackageableElement';
import { ISlot } from './ISlot';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IValueSpecification } from './IValueSpecification';
import { PackageableElement } from './PackageableElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class InstanceSpecification extends DeploymentTarget implements IInstanceSpecification {
  /**
   * classifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public classifier: Set<string> = new Set();

  /**
   * slot
   * 
   * @type Slot
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite owningInstance
   */
  public slot: Set<ISlot> = new Set();

  /**
   * specification
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public specification?: IValueSpecification;

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
   * deployment
   * 
   * @type Deployment
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite location
   */
  public deployment: Set<IDeployment> = new Set();

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


  constructor(init?: Partial<IInstanceSpecification>) {
    super(init);

    this.classifier = init?.classifier ? new Set(init.classifier) : new Set();
    this.slot = init?.slot ? new Set(init.slot) : new Set();
    this.specification = init?.specification;
  }
  getClassifier(): Set<string> {
    return this.classifier;
  }

  setClassifier(value: Set<string>): void {
    this.classifier = value;
  }

  getSlot(): Set<ISlot> {
    return this.slot;
  }

  setSlot(value: Set<ISlot>): void {
    this.slot = value;
  }

  getSpecification(): IValueSpecification | undefined {
    return this.specification;
  }

  setSpecification(value: IValueSpecification | undefined): void {
    this.specification = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IInstanceSpecification {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      classifier: this.classifier,
      slot: this.slot,
      ...(this.specification !== undefined && { specification: this.specification }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.classifier = Array.from(this.classifier);
    result.slot = Array.from(this.slot);
    if (this.specification !== undefined) {
      result.specification = this.specification;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): InstanceSpecification {
    return new InstanceSpecification(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IInstanceSpecification>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof InstanceSpecification)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `InstanceSpecification{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): InstanceSpecification {
    const instance = new InstanceSpecification();

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
    if (json.owningTemplateParameter !== undefined) {
      instance.owningTemplateParameter = json.owningTemplateParameter;
    }
    if (json.templateParameter !== undefined) {
      instance.templateParameter = json.templateParameter;
    }
    if (json.classifier && Array.isArray(json.classifier)) {
      instance.classifier = new Set(json.classifier);
    }
    if (json.slot && Array.isArray(json.slot)) {
      instance.slot = new Set(json.slot);
    }
    if (json.specification !== undefined) {
      instance.specification = json.specification;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.ownedComment) {
    }
    if (this.name !== undefined) {
      if (typeof this.name !== 'string') {
        errors.push({
          property: 'name',
          message: 'name must be a string',
          code: 'TYPE_ERROR',
          value: this.name
        });
      }
    }
    if (this.visibility !== undefined) {
    }
    if (this.deployment) {
    }
    if (this.classifier) {
    }
    if (this.slot) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IInstanceSpecification): ValidationResult {
    if (instance instanceof InstanceSpecification) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new InstanceSpecification(instance);
    return temp.validate();
  }
}
