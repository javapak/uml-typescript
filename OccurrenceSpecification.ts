/**
 * Implementation class for OccurrenceSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @extends InteractionFragment
 */
import { IComment } from './IComment';
import { IGeneralOrdering } from './IGeneralOrdering';
import { IInteraction } from './IInteraction';
import { IInteractionFragment } from './IInteractionFragment';
import { IInteractionOperand } from './IInteractionOperand';
import { ILifeline } from './ILifeline';
import { IOccurrenceSpecification } from './IOccurrenceSpecification';
import { IStringExpression } from './IStringExpression';
import { InteractionFragment } from './InteractionFragment';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class OccurrenceSpecification extends InteractionFragment implements IOccurrenceSpecification {
  /**
   * toAfter
   * 
   * @type GeneralOrdering
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite before
   */
  public toAfter: Set<string> = new Set();

  /**
   * toBefore
   * 
   * @type GeneralOrdering
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite after
   */
  public toBefore: Set<string> = new Set();

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
   * covered
   * 
   * @type Lifeline
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite coveredBy
   */
  public covered: Set<string> = new Set();

  /**
   * enclosingOperand
   * 
   * @type InteractionOperand
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite fragment
   */
  public enclosingOperand?: string;

  /**
   * enclosingInteraction
   * 
   * @type Interaction
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite fragment
   */
  public enclosingInteraction?: string;

  /**
   * generalOrdering
   * 
   * @type GeneralOrdering
   * @multiplicity [0..*]
   * @relationship containment
   */
  public generalOrdering: Set<IGeneralOrdering> = new Set();


  constructor(init?: Partial<IOccurrenceSpecification>) {
    super(init);

    this.toAfter = init?.toAfter ? new Set(init.toAfter) : new Set();
    this.toBefore = init?.toBefore ? new Set(init.toBefore) : new Set();
  }
  getToAfter(): Set<string> {
    return this.toAfter;
  }

  setToAfter(value: Set<string>): void {
    this.toAfter = value;
  }

  getToBefore(): Set<string> {
    return this.toBefore;
  }

  setToBefore(value: Set<string>): void {
    this.toBefore = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IOccurrenceSpecification {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      toAfter: this.toAfter,
      toBefore: this.toBefore,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.toAfter = Array.from(this.toAfter);
    result.toBefore = Array.from(this.toBefore);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): OccurrenceSpecification {
    return new OccurrenceSpecification(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IOccurrenceSpecification>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof OccurrenceSpecification)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `OccurrenceSpecification{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): OccurrenceSpecification {
    const instance = new OccurrenceSpecification();

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
    if (json.covered && Array.isArray(json.covered)) {
      instance.covered = new Set(json.covered);
    }
    if (json.enclosingOperand !== undefined) {
      instance.enclosingOperand = json.enclosingOperand;
    }
    if (json.enclosingInteraction !== undefined) {
      instance.enclosingInteraction = json.enclosingInteraction;
    }
    if (json.generalOrdering && Array.isArray(json.generalOrdering)) {
      instance.generalOrdering = new Set(json.generalOrdering);
    }
    if (json.toAfter && Array.isArray(json.toAfter)) {
      instance.toAfter = new Set(json.toAfter);
    }
    if (json.toBefore && Array.isArray(json.toBefore)) {
      instance.toBefore = new Set(json.toBefore);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.toAfter) {
    }
    if (this.toBefore) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IOccurrenceSpecification): ValidationResult {
    if (instance instanceof OccurrenceSpecification) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new OccurrenceSpecification(instance);
    return temp.validate();
  }
}
