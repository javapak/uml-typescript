/**
 * Implementation class for Feature
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends RedefinableElement
 */
import { IComment } from './IComment';
import { IFeature } from './IFeature';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { RedefinableElement } from './RedefinableElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Feature extends RedefinableElement implements IFeature {
  /**
   * isStatic
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isStatic!: boolean;

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
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;


  constructor(init?: Partial<IFeature>) {
    super(init);

    this.isStatic = init?.isStatic ?? false;
  }
  getIsStatic(): boolean {
    return this.isStatic;
  }

  setIsStatic(value: boolean): void {
    this.isStatic = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IFeature {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      isStatic: this.isStatic,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.isStatic = this.isStatic;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Feature {
    return new Feature(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IFeature>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Feature)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Feature{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Feature {
    const instance = new Feature();

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
    instance.isStatic = json.isStatic;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.isStatic == null) {
      errors.push({
        property: 'isStatic',
        message: 'isStatic is required',
        code: 'REQUIRED'
      });
    }
    if (this.isStatic !== undefined) {
      if (typeof this.isStatic !== 'boolean') {
        errors.push({
          property: 'isStatic',
          message: 'isStatic must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isStatic
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IFeature): ValidationResult {
    if (instance instanceof Feature) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Feature(instance);
    return temp.validate();
  }
}
