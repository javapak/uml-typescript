/**
 * Implementation class for LiteralReal
 * 
 * @since UML 2.5
 * @package uml
 * @extends LiteralSpecification
 */
import { IComment } from './IComment';
import { ILiteralReal } from './ILiteralReal';
import { ILiteralSpecification } from './ILiteralSpecification';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IType } from './IType';
import { LiteralSpecification } from './LiteralSpecification';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class LiteralReal extends LiteralSpecification implements ILiteralReal {
  /**
   * value
   * 
   * @type Real
   * @multiplicity [1..1]
   */
  public value!: number;

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


  constructor(init?: Partial<ILiteralReal>) {
    super(init);

    this.value = init?.value ?? 0;
  }
  getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    this.value = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ILiteralReal {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      value: this.value,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.value = this.value;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): LiteralReal {
    return new LiteralReal(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ILiteralReal>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof LiteralReal)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `LiteralReal{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): LiteralReal {
    const instance = new LiteralReal();

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
    instance.value = json.value;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.value == null) {
      errors.push({
        property: 'value',
        message: 'value is required',
        code: 'REQUIRED'
      });
    }
    if (this.value !== undefined) {
      if (typeof this.value !== 'number' || !isFinite(this.value)) {
        errors.push({
          property: 'value',
          message: 'value must be a valid number',
          code: 'TYPE_ERROR',
          value: this.value
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ILiteralReal): ValidationResult {
    if (instance instanceof LiteralReal) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new LiteralReal(instance);
    return temp.validate();
  }
}
