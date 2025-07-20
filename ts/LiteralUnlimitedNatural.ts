/**
 * Implementation class for LiteralUnlimitedNatural
 * 
 * @since UML 2.5
 * @package uml
 * @extends LiteralSpecification
 */
import { IComment } from './IComment';
import { ILiteralSpecification } from './ILiteralSpecification';
import { ILiteralUnlimitedNatural } from './ILiteralUnlimitedNatural';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IType } from './IType';
import { LiteralSpecification } from './LiteralSpecification';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class LiteralUnlimitedNatural extends LiteralSpecification implements ILiteralUnlimitedNatural {
  /**
   * value
   * 
   * @type UnlimitedNatural
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


  constructor(init?: Partial<ILiteralUnlimitedNatural>) {
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
  toJSON(): ILiteralUnlimitedNatural {
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
  clone(): LiteralUnlimitedNatural {
    return new LiteralUnlimitedNatural(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ILiteralUnlimitedNatural>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof LiteralUnlimitedNatural)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `LiteralUnlimitedNatural{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): LiteralUnlimitedNatural {
    const instance = new LiteralUnlimitedNatural();

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
    if (this.value == null) {
      errors.push({
        property: 'value',
        message: 'value is required',
        code: 'REQUIRED'
      });
    }
    if (this.value !== undefined) {
      if (typeof this.value !== 'number' || !Number.isInteger(this.value)) {
        errors.push({
          property: 'value',
          message: 'value must be an integer',
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

  static validate(instance: ILiteralUnlimitedNatural): ValidationResult {
    if (instance instanceof LiteralUnlimitedNatural) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new LiteralUnlimitedNatural(instance);
    return temp.validate();
  }
}
