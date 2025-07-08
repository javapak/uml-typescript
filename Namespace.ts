/**
 * Implementation class for Namespace
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IPackageImport } from './IPackageImport';
import { IStringExpression } from './IStringExpression';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Namespace extends NamedElement implements INamespace {
  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

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

  constructor(init?: Partial<INamespace>) {
    super(init);

    this.ownedRule = init?.ownedRule ? new Set(init.ownedRule) : new Set();
    this.elementImport = init?.elementImport ? new Set(init.elementImport) : new Set();
    this.packageImport = init?.packageImport ? new Set(init.packageImport) : new Set();
  }
  getOwnedRule(): Set<IConstraint> {
    return this.ownedRule;
  }

  setOwnedRule(value: Set<IConstraint>): void {
    this.ownedRule = value;
  }

  getElementImport(): Set<IElementImport> {
    return this.elementImport;
  }

  setElementImport(value: Set<IElementImport>): void {
    this.elementImport = value;
  }

  getPackageImport(): Set<IPackageImport> {
    return this.packageImport;
  }

  setPackageImport(value: Set<IPackageImport>): void {
    this.packageImport = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): INamespace {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ownedRule: this.ownedRule,
      elementImport: this.elementImport,
      packageImport: this.packageImport,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.ownedRule = Array.from(this.ownedRule);
    result.elementImport = Array.from(this.elementImport);
    result.packageImport = Array.from(this.packageImport);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Namespace {
    return new Namespace(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<INamespace>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Namespace)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Namespace{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Namespace {
    const instance = new Namespace();

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
    if (json.ownedRule && Array.isArray(json.ownedRule)) {
      instance.ownedRule = new Set(json.ownedRule);
    }
    if (json.elementImport && Array.isArray(json.elementImport)) {
      instance.elementImport = new Set(json.elementImport);
    }
    if (json.packageImport && Array.isArray(json.packageImport)) {
      instance.packageImport = new Set(json.packageImport);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.ownedRule) {
    }
    if (this.elementImport) {
    }
    if (this.packageImport) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: INamespace): ValidationResult {
    if (instance instanceof Namespace) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Namespace(instance);
    return temp.validate();
  }
}
