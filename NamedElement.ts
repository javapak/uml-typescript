/**
 * Implementation class for NamedElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Element
 */
import { Element } from './Element';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { INamedElement } from './INamedElement';
import { IStringExpression } from './IStringExpression';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class NamedElement extends Element implements INamedElement {
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
  public visibility?: VisibilityKind;

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();


  constructor(init?: Partial<INamedElement>) {
    super(init);

    this.name = init?.name;
    this.nameExpression = init?.nameExpression;
    this.visibility = init?.visibility;
  }
  getName(): string | undefined {
    return this.name;
  }

  setName(value: string | undefined): void {
    this.name = value;
  }

  getNameExpression(): IStringExpression | undefined {
    return this.nameExpression;
  }

  setNameExpression(value: IStringExpression | undefined): void {
    this.nameExpression = value;
  }

  getVisibility(): VisibilityKind | undefined {
    return this.visibility;
  }

  setVisibility(value: VisibilityKind | undefined): void {
    this.visibility = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): INamedElement {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.name !== undefined && { name: this.name }),
      ...(this.nameExpression !== undefined && { nameExpression: this.nameExpression }),
      ...(this.visibility !== undefined && { visibility: this.visibility }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.name !== undefined) {
      result.name = this.name;
    }
    if (this.nameExpression !== undefined) {
      result.nameExpression = this.nameExpression;
    }
    if (this.visibility !== undefined) {
      result.visibility = this.visibility;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): NamedElement {
    return new NamedElement(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<INamedElement>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof NamedElement)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `NamedElement{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): NamedElement {
    const instance = new NamedElement();

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

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
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
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: INamedElement): ValidationResult {
    if (instance instanceof NamedElement) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new NamedElement(instance);
    return temp.validate();
  }
}
