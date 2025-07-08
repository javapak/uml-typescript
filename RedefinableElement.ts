/**
 * Implementation class for RedefinableElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { IComment } from './IComment';
import { INamedElement } from './INamedElement';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class RedefinableElement extends NamedElement implements IRedefinableElement {
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

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

  constructor(init?: Partial<IRedefinableElement>) {
    super(init);

    this.isLeaf = init?.isLeaf ?? false;
  }
  getIsLeaf(): boolean {
    return this.isLeaf;
  }

  setIsLeaf(value: boolean): void {
    this.isLeaf = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IRedefinableElement {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      isLeaf: this.isLeaf,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.isLeaf = this.isLeaf;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): RedefinableElement {
    return new RedefinableElement(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IRedefinableElement>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof RedefinableElement)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `RedefinableElement{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): RedefinableElement {
    const instance = new RedefinableElement();

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
    instance.isLeaf = json.isLeaf;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.isLeaf == null) {
      errors.push({
        property: 'isLeaf',
        message: 'isLeaf is required',
        code: 'REQUIRED'
      });
    }
    if (this.isLeaf !== undefined) {
      if (typeof this.isLeaf !== 'boolean') {
        errors.push({
          property: 'isLeaf',
          message: 'isLeaf must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isLeaf
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IRedefinableElement): ValidationResult {
    if (instance instanceof RedefinableElement) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new RedefinableElement(instance);
    return temp.validate();
  }
}
