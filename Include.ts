/**
 * Implementation class for Include
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement, DirectedRelationship
 */
import { DirectedRelationship } from './DirectedRelationship';
import { IComment } from './IComment';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IInclude } from './IInclude';
import { INamedElement } from './INamedElement';
import { IStringExpression } from './IStringExpression';
import { IUseCase } from './IUseCase';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Include extends NamedElement implements IInclude {
  /**
   * addition
   * 
   * @type UseCase
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public addition!: string;

  /**
   * includingCase
   * 
   * @type UseCase
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite include
   */
  public includingCase!: string;

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


  constructor(init?: Partial<IInclude>) {
    super(init);

    this.addition = init?.addition ?? '';
    this.includingCase = init?.includingCase ?? '';
  }
  getAddition(): string {
    return this.addition;
  }

  setAddition(value: string): void {
    this.addition = value;
  }

  getIncludingCase(): string {
    return this.includingCase;
  }

  setIncludingCase(value: string): void {
    this.includingCase = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IInclude {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      addition: this.addition,
      includingCase: this.includingCase,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.addition = this.addition;
    result.includingCase = this.includingCase;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Include {
    return new Include(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IInclude>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Include)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Include{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Include {
    const instance = new Include();

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
    instance.addition = json.addition;
    instance.includingCase = json.includingCase;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.addition == null) {
      errors.push({
        property: 'addition',
        message: 'addition is required',
        code: 'REQUIRED'
      });
    }
    if (this.includingCase == null) {
      errors.push({
        property: 'includingCase',
        message: 'includingCase is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IInclude): ValidationResult {
    if (instance instanceof Include) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Include(instance);
    return temp.validate();
  }
}
