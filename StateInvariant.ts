/**
 * Implementation class for StateInvariant
 * 
 * @since UML 2.5
 * @package uml
 * @extends InteractionFragment
 */
import { Constraint } from './Constraint';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IGeneralOrdering } from './IGeneralOrdering';
import { IInteraction } from './IInteraction';
import { IInteractionFragment } from './IInteractionFragment';
import { IInteractionOperand } from './IInteractionOperand';
import { ILifeline } from './ILifeline';
import { IStateInvariant } from './IStateInvariant';
import { IStringExpression } from './IStringExpression';
import { InteractionFragment } from './InteractionFragment';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class StateInvariant extends InteractionFragment implements IStateInvariant {
  /**
   * invariant
   * 
   * @type Constraint
   * @multiplicity [1..1]
   * @relationship containment
   */
  public invariant!: IConstraint;

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


  constructor(init?: Partial<IStateInvariant>) {
    super(init);

    this.invariant = init?.invariant!;
  }
  getInvariant(): IConstraint {
    return this.invariant;
  }

  setInvariant(value: IConstraint): void {
    this.invariant = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IStateInvariant {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      invariant: this.invariant,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.invariant = this.invariant;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): StateInvariant {
    return new StateInvariant(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IStateInvariant>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof StateInvariant)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `StateInvariant{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): StateInvariant {
    const instance = new StateInvariant();

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
    instance.invariant = json.invariant;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.invariant == null) {
      errors.push({
        property: 'invariant',
        message: 'invariant is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IStateInvariant): ValidationResult {
    if (instance instanceof StateInvariant) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new StateInvariant(instance);
    return temp.validate();
  }
}
