/**
 * Implementation class for EnumerationLiteral
 * 
 * @since UML 2.5
 * @package uml
 * @extends InstanceSpecification
 */
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IDeployment } from './IDeployment';
import { IEnumeration } from './IEnumeration';
import { IEnumerationLiteral } from './IEnumerationLiteral';
import { IInstanceSpecification } from './IInstanceSpecification';
import { ISlot } from './ISlot';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IValueSpecification } from './IValueSpecification';
import { InstanceSpecification } from './InstanceSpecification';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class EnumerationLiteral extends InstanceSpecification implements IEnumerationLiteral {
  /**
   * enumeration
   * 
   * @type Enumeration
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite ownedLiteral
   */
  public enumeration!: string;

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


  constructor(init?: Partial<IEnumerationLiteral>) {
    super(init);

    this.enumeration = init?.enumeration ?? '';
  }
  getEnumeration(): string {
    return this.enumeration;
  }

  setEnumeration(value: string): void {
    this.enumeration = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IEnumerationLiteral {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      enumeration: this.enumeration,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.enumeration = this.enumeration;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): EnumerationLiteral {
    return new EnumerationLiteral(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IEnumerationLiteral>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof EnumerationLiteral)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `EnumerationLiteral{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): EnumerationLiteral {
    const instance = new EnumerationLiteral();

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
    instance.enumeration = json.enumeration;

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
    if (this.enumeration == null) {
      errors.push({
        property: 'enumeration',
        message: 'enumeration is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IEnumerationLiteral): ValidationResult {
    if (instance instanceof EnumerationLiteral) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new EnumerationLiteral(instance);
    return temp.validate();
  }
}
