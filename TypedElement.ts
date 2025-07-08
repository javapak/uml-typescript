/**
 * Implementation class for TypedElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { IComment } from './IComment';
import { INamedElement } from './INamedElement';
import { IStringExpression } from './IStringExpression';
import { IType } from './IType';
import { ITypedElement } from './ITypedElement';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class TypedElement extends NamedElement implements ITypedElement {
  /**
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: string;

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

  constructor(init?: Partial<ITypedElement>) {
    super(init);

    this.type = init?.type;
  }
  getType(): string | undefined {
    return this.type;
  }

  setType(value: string | undefined): void {
    this.type = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ITypedElement {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.type !== undefined && { type: this.type }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.type !== undefined) {
      result.type = this.type;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): TypedElement {
    return new TypedElement(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ITypedElement>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof TypedElement)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `TypedElement{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): TypedElement {
    const instance = new TypedElement();

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
    if (json.type !== undefined) {
      instance.type = json.type;
    }

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

  static validate(instance: ITypedElement): ValidationResult {
    if (instance instanceof TypedElement) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new TypedElement(instance);
    return temp.validate();
  }
}
