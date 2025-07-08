/**
 * Implementation class for Extend
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement, DirectedRelationship
 */
import { Constraint } from './Constraint';
import { DirectedRelationship } from './DirectedRelationship';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IExtend } from './IExtend';
import { IExtensionPoint } from './IExtensionPoint';
import { INamedElement } from './INamedElement';
import { IStringExpression } from './IStringExpression';
import { IUseCase } from './IUseCase';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Extend extends NamedElement implements IExtend {
  /**
   * condition
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship containment
   */
  public condition?: IConstraint;

  /**
   * extendedCase
   * 
   * @type UseCase
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public extendedCase!: string;

  /**
   * extensionLocation
   * 
   * @type ExtensionPoint
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public extensionLocation: string[] = [];

  /**
   * extension
   * 
   * @type UseCase
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite extend
   */
  public extension!: string;

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
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();


  constructor(init?: Partial<IExtend>) {
    super(init);

    this.condition = init?.condition;
    this.extendedCase = init?.extendedCase ?? '';
    this.extensionLocation = init?.extensionLocation ? [...init.extensionLocation] : [];
    this.extension = init?.extension ?? '';
  }
  getCondition(): IConstraint | undefined {
    return this.condition;
  }

  setCondition(value: IConstraint | undefined): void {
    this.condition = value;
  }

  getExtendedCase(): string {
    return this.extendedCase;
  }

  setExtendedCase(value: string): void {
    this.extendedCase = value;
  }

  getExtensionLocation(): string[] {
    return this.extensionLocation;
  }

  setExtensionLocation(value: string[]): void {
    this.extensionLocation = value;
  }

  getExtension(): string {
    return this.extension;
  }

  setExtension(value: string): void {
    this.extension = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IExtend {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.condition !== undefined && { condition: this.condition }),
      extendedCase: this.extendedCase,
      extensionLocation: this.extensionLocation,
      extension: this.extension,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.condition !== undefined) {
      result.condition = this.condition;
    }
    result.extendedCase = this.extendedCase;
    result.extensionLocation = [...this.extensionLocation];
    result.extension = this.extension;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Extend {
    return new Extend(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IExtend>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Extend)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Extend{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Extend {
    const instance = new Extend();

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
    if (json.condition !== undefined) {
      instance.condition = json.condition;
    }
    instance.extendedCase = json.extendedCase;
    if (json.extensionLocation && Array.isArray(json.extensionLocation)) {
      instance.extensionLocation = [...json.extensionLocation];
    }
    instance.extension = json.extension;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.extendedCase == null) {
      errors.push({
        property: 'extendedCase',
        message: 'extendedCase is required',
        code: 'REQUIRED'
      });
    }
    if (this.extensionLocation == null) {
      errors.push({
        property: 'extensionLocation',
        message: 'extensionLocation is required',
        code: 'REQUIRED'
      });
    }
    if (this.extensionLocation) {
      if (Array.from(this.extensionLocation).length < 1) {
        errors.push({
          property: 'extensionLocation',
          message: 'extensionLocation must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    if (this.extension == null) {
      errors.push({
        property: 'extension',
        message: 'extension is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IExtend): ValidationResult {
    if (instance instanceof Extend) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Extend(instance);
    return temp.validate();
  }
}
