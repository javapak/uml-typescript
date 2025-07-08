/**
 * Implementation class for Interval
 * 
 * @since UML 2.5
 * @package uml
 * @extends ValueSpecification
 */
import { IComment } from './IComment';
import { IInterval } from './IInterval';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class Interval extends ValueSpecification implements IInterval {
  /**
   * max
   * 
   * @type ValueSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public max!: string;

  /**
   * min
   * 
   * @type ValueSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public min!: string;

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


  constructor(init?: Partial<IInterval>) {
    super(init);

    this.max = init?.max ?? '';
    this.min = init?.min ?? '';
  }
  getMax(): string {
    return this.max;
  }

  setMax(value: string): void {
    this.max = value;
  }

  getMin(): string {
    return this.min;
  }

  setMin(value: string): void {
    this.min = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IInterval {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      max: this.max,
      min: this.min,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.max = this.max;
    result.min = this.min;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Interval {
    return new Interval(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IInterval>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Interval)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Interval{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Interval {
    const instance = new Interval();

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
    instance.max = json.max;
    instance.min = json.min;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.max == null) {
      errors.push({
        property: 'max',
        message: 'max is required',
        code: 'REQUIRED'
      });
    }
    if (this.min == null) {
      errors.push({
        property: 'min',
        message: 'min is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IInterval): ValidationResult {
    if (instance instanceof Interval) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Interval(instance);
    return temp.validate();
  }
}
