/**
 * Implementation class for InstanceValue
 * 
 * @since UML 2.5
 * @package uml
 * @extends ValueSpecification
 */
import { IComment } from './IComment';
import { IInstanceSpecification } from './IInstanceSpecification';
import { IInstanceValue } from './IInstanceValue';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class InstanceValue extends ValueSpecification implements IInstanceValue {
  /**
   * instance
   * 
   * @type InstanceSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public instance!: string;

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
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: string;


  constructor(init?: Partial<IInstanceValue>) {
    super(init);

    this.instance = init?.instance ?? '';
  }
  getInstance(): string {
    return this.instance;
  }

  setInstance(value: string): void {
    this.instance = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IInstanceValue {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      instance: this.instance,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.instance = this.instance;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): InstanceValue {
    return new InstanceValue(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IInstanceValue>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof InstanceValue)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `InstanceValue{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): InstanceValue {
    const instance = new InstanceValue();

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
    if (json.type !== undefined) {
      instance.type = json.type;
    }
    instance.instance = json.instance;

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
    if (this.instance == null) {
      errors.push({
        property: 'instance',
        message: 'instance is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IInstanceValue): ValidationResult {
    if (instance instanceof InstanceValue) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new InstanceValue(instance);
    return temp.validate();
  }
}
