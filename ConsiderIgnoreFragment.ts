/**
 * Implementation class for ConsiderIgnoreFragment
 * 
 * @since UML 2.5
 * @package uml
 * @extends CombinedFragment
 */
import { CombinedFragment } from './CombinedFragment';
import { ICombinedFragment } from './ICombinedFragment';
import { IComment } from './IComment';
import { IConsiderIgnoreFragment } from './IConsiderIgnoreFragment';
import { IGate } from './IGate';
import { IGeneralOrdering } from './IGeneralOrdering';
import { IInteraction } from './IInteraction';
import { IInteractionOperand } from './IInteractionOperand';
import { ILifeline } from './ILifeline';
import { INamedElement } from './INamedElement';
import { IStringExpression } from './IStringExpression';
import { InteractionOperatorKind } from './InteractionOperatorKind';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ConsiderIgnoreFragment extends CombinedFragment implements IConsiderIgnoreFragment {
  /**
   * message
   * 
   * @type NamedElement
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public message: Set<string> = new Set();

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

  /**
   * cfragmentGate
   * 
   * @type Gate
   * @multiplicity [0..*]
   * @relationship containment
   */
  public cfragmentGate: Set<IGate> = new Set();

  /**
   * interactionOperator
   * 
   * @type InteractionOperatorKind
   * @multiplicity [1..1]
   */
  public interactionOperator: InteractionOperatorKind = InteractionOperatorKind.seq;
  /**
   * operand
   * 
   * @type InteractionOperand
   * @multiplicity [1..*]
   * @relationship containment
   */
  public operand: IInteractionOperand[] = [];


  constructor(init?: Partial<IConsiderIgnoreFragment>) {
    super(init);

    this.message = init?.message ? new Set(init.message) : new Set();
  }
  getMessage(): Set<string> {
    return this.message;
  }

  setMessage(value: Set<string>): void {
    this.message = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IConsiderIgnoreFragment {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      message: this.message,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.message = Array.from(this.message);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ConsiderIgnoreFragment {
    return new ConsiderIgnoreFragment(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IConsiderIgnoreFragment>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ConsiderIgnoreFragment)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ConsiderIgnoreFragment{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ConsiderIgnoreFragment {
    const instance = new ConsiderIgnoreFragment();

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
    if (json.cfragmentGate && Array.isArray(json.cfragmentGate)) {
      instance.cfragmentGate = new Set(json.cfragmentGate);
    }
    instance.interactionOperator = json.interactionOperator;
    if (json.operand && Array.isArray(json.operand)) {
      instance.operand = [...json.operand];
    }
    if (json.message && Array.isArray(json.message)) {
      instance.message = new Set(json.message);
    }

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
    if (this.covered) {
    }
    if (this.generalOrdering) {
    }
    if (this.cfragmentGate) {
    }
    if (this.interactionOperator == null) {
      errors.push({
        property: 'interactionOperator',
        message: 'interactionOperator is required',
        code: 'REQUIRED'
      });
    }
    if (this.interactionOperator !== undefined) {
    }
    if (this.operand == null) {
      errors.push({
        property: 'operand',
        message: 'operand is required',
        code: 'REQUIRED'
      });
    }
    if (this.operand) {
      if (Array.from(this.operand).length < 1) {
        errors.push({
          property: 'operand',
          message: 'operand must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    if (this.message) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IConsiderIgnoreFragment): ValidationResult {
    if (instance instanceof ConsiderIgnoreFragment) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ConsiderIgnoreFragment(instance);
    return temp.validate();
  }
}
