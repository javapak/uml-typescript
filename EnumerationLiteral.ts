/**
 * Implementation class for EnumerationLiteral
 * 
 * @since UML 2.5
 * @package uml
 * @extends InstanceSpecification
 */
import { Comment } from './Comment';
import { Deployment } from './Deployment';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IDeployment } from './IDeployment';
import { IElement } from './IElement';
import { IEnumeration } from './IEnumeration';
import { IEnumerationLiteral } from './IEnumerationLiteral';
import { IInstanceSpecification } from './IInstanceSpecification';
import { INamespace } from './INamespace';
import { IPackageableElement } from './IPackageableElement';
import { ISlot } from './ISlot';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IValueSpecification } from './IValueSpecification';
import { InstanceSpecification } from './InstanceSpecification';
import { Slot } from './Slot';
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
  public enumeration!: IEnumeration | string;

  // Inherited from InstanceSpecification
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from InstanceSpecification
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from InstanceSpecification
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from InstanceSpecification
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from InstanceSpecification
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from InstanceSpecification
  /**
   * deployment
   * 
   * @type Deployment
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite location
   */
  public deployment: Set<IDeployment> = new Set();

  // Inherited from InstanceSpecification
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from InstanceSpecification
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from InstanceSpecification
  /**
   * classifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public classifier: Set<IClassifier | string> = new Set();

  // Inherited from InstanceSpecification
  /**
   * slot
   * 
   * @type Slot
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite owningInstance
   */
  public slot: Set<ISlot> = new Set();

  // Inherited from InstanceSpecification
  /**
   * specification
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public specification?: IValueSpecification = undefined;

  constructor(init?: Partial<IEnumerationLiteral>) {
    super(init);
    this.enumeration = init?.enumeration!;
  }
  getEnumeration(): IEnumeration | string {
    return this.enumeration;
  }

  setEnumeration(value: IEnumeration | string): void {
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
