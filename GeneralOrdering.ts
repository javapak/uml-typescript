/**
 * Implementation class for GeneralOrdering
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement
 */
import { Comment } from './Comment';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IGeneralOrdering } from './IGeneralOrdering';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IOccurrenceSpecification } from './IOccurrenceSpecification';
import { IStringExpression } from './IStringExpression';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class GeneralOrdering extends NamedElement implements IGeneralOrdering {
  /**
   * after
   * 
   * @type OccurrenceSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite toBefore
   */
  public after!: IOccurrenceSpecification | string;

  /**
   * before
   * 
   * @type OccurrenceSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite toAfter
   */
  public before!: IOccurrenceSpecification | string;

  // Inherited from NamedElement
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from NamedElement
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from NamedElement
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from NamedElement
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from NamedElement
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  constructor(init?: Partial<IGeneralOrdering>) {
    super(init);
    this.after = init?.after!;
    this.before = init?.before!;
  }
  getAfter(): IOccurrenceSpecification | string {
    return this.after;
  }

  setAfter(value: IOccurrenceSpecification | string): void {
    this.after = value;
  }

  getBefore(): IOccurrenceSpecification | string {
    return this.before;
  }

  setBefore(value: IOccurrenceSpecification | string): void {
    this.before = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IGeneralOrdering {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      after: this.after,
      before: this.before,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.after = this.after;
    result.before = this.before;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): GeneralOrdering {
    return new GeneralOrdering(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IGeneralOrdering>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof GeneralOrdering)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `GeneralOrdering{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): GeneralOrdering {
    const instance = new GeneralOrdering();

    if (json.eAnnotations && Array.isArray(json.eAnnotations)) {
      instance.eAnnotations = [...json.eAnnotations];
    }
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
    instance.after = json.after;
    instance.before = json.before;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.after == null) {
      errors.push({
        property: 'after',
        message: 'after is required',
        code: 'REQUIRED'
      });
    }
    if (this.before == null) {
      errors.push({
        property: 'before',
        message: 'before is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IGeneralOrdering): ValidationResult {
    if (instance instanceof GeneralOrdering) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new GeneralOrdering(instance);
    return temp.validate();
  }
}
