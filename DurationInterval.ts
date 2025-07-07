/**
 * Implementation class for DurationInterval
 * 
 * @since UML 2.5
 * @package uml
 * @extends Interval
 */
import { Comment } from './Comment';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IDurationInterval } from './IDurationInterval';
import { IElement } from './IElement';
import { IInterval } from './IInterval';
import { INamespace } from './INamespace';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';
import { Interval } from './Interval';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class DurationInterval extends Interval implements IDurationInterval {
  // Inherited from Interval
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Interval
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from Interval
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from Interval
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from Interval
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from Interval
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Interval
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Interval
  /**
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: IType | string = undefined;

  // Inherited from Interval
  /**
   * max
   * 
   * @type ValueSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public max!: IValueSpecification | string;

  // Inherited from Interval
  /**
   * min
   * 
   * @type ValueSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public min!: IValueSpecification | string;

  constructor(init?: Partial<IDurationInterval>) {
    super(init);
  }
  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IDurationInterval {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };


    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): DurationInterval {
    return new DurationInterval(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IDurationInterval>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof DurationInterval)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `DurationInterval{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): DurationInterval {
    const instance = new DurationInterval();

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
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IDurationInterval): ValidationResult {
    if (instance instanceof DurationInterval) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new DurationInterval(instance);
    return temp.validate();
  }
}
