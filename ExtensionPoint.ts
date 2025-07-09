/**
 * Implementation class for ExtensionPoint
 * 
 * @since UML 2.5
 * @package uml
 * @extends RedefinableElement
 */
import { IComment } from './IComment';
import { IExtensionPoint } from './IExtensionPoint';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { IUseCase } from './IUseCase';
import { RedefinableElement } from './RedefinableElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ExtensionPoint extends RedefinableElement implements IExtensionPoint {
  /**
   * useCase
   * 
   * @type UseCase
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite extensionPoint
   */
  public useCase!: string;

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


  constructor(init?: Partial<IExtensionPoint>) {
    super(init);

    this.useCase = init?.useCase ?? '';
  }
  getUseCase(): string {
    return this.useCase;
  }

  setUseCase(value: string): void {
    this.useCase = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IExtensionPoint {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      useCase: this.useCase,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.useCase = this.useCase;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ExtensionPoint {
    return new ExtensionPoint(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IExtensionPoint>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ExtensionPoint)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ExtensionPoint{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ExtensionPoint {
    const instance = new ExtensionPoint();

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
    instance.useCase = json.useCase;

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
    if (this.useCase == null) {
      errors.push({
        property: 'useCase',
        message: 'useCase is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IExtensionPoint): ValidationResult {
    if (instance instanceof ExtensionPoint) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ExtensionPoint(instance);
    return temp.validate();
  }
}
