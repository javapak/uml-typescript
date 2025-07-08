/**
 * Implementation class for Vertex
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { IComment } from './IComment';
import { INamedElement } from './INamedElement';
import { IRegion } from './IRegion';
import { IStringExpression } from './IStringExpression';
import { IVertex } from './IVertex';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Vertex extends NamedElement implements IVertex {
  /**
   * container
   * 
   * @type Region
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite subvertex
   */
  public container?: string;

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

  constructor(init?: Partial<IVertex>) {
    super(init);

    this.container = init?.container;
  }
  getContainer(): string | undefined {
    return this.container;
  }

  setContainer(value: string | undefined): void {
    this.container = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IVertex {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.container !== undefined && { container: this.container }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.container !== undefined) {
      result.container = this.container;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Vertex {
    return new Vertex(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IVertex>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Vertex)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Vertex{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Vertex {
    const instance = new Vertex();

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
    if (json.container !== undefined) {
      instance.container = json.container;
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

  static validate(instance: IVertex): ValidationResult {
    if (instance instanceof Vertex) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Vertex(instance);
    return temp.validate();
  }
}
