/**
 * Implementation class for InteractionFragment
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { IComment } from './IComment';
import { IGeneralOrdering } from './IGeneralOrdering';
import { IInteraction } from './IInteraction';
import { IInteractionFragment } from './IInteractionFragment';
import { IInteractionOperand } from './IInteractionOperand';
import { ILifeline } from './ILifeline';
import { INamedElement } from './INamedElement';
import { IStringExpression } from './IStringExpression';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class InteractionFragment extends NamedElement implements IInteractionFragment {
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

  constructor(init?: Partial<IInteractionFragment>) {
    super(init);

    this.covered = init?.covered ? new Set(init.covered) : new Set();
    this.enclosingOperand = init?.enclosingOperand;
    this.enclosingInteraction = init?.enclosingInteraction;
    this.generalOrdering = init?.generalOrdering ? new Set(init.generalOrdering) : new Set();
  }
  getCovered(): Set<string> {
    return this.covered;
  }

  setCovered(value: Set<string>): void {
    this.covered = value;
  }

  getEnclosingOperand(): string | undefined {
    return this.enclosingOperand;
  }

  setEnclosingOperand(value: string | undefined): void {
    this.enclosingOperand = value;
  }

  getEnclosingInteraction(): string | undefined {
    return this.enclosingInteraction;
  }

  setEnclosingInteraction(value: string | undefined): void {
    this.enclosingInteraction = value;
  }

  getGeneralOrdering(): Set<IGeneralOrdering> {
    return this.generalOrdering;
  }

  setGeneralOrdering(value: Set<IGeneralOrdering>): void {
    this.generalOrdering = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IInteractionFragment {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      covered: this.covered,
      ...(this.enclosingOperand !== undefined && { enclosingOperand: this.enclosingOperand }),
      ...(this.enclosingInteraction !== undefined && { enclosingInteraction: this.enclosingInteraction }),
      generalOrdering: this.generalOrdering,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.covered = Array.from(this.covered);
    if (this.enclosingOperand !== undefined) {
      result.enclosingOperand = this.enclosingOperand;
    }
    if (this.enclosingInteraction !== undefined) {
      result.enclosingInteraction = this.enclosingInteraction;
    }
    result.generalOrdering = Array.from(this.generalOrdering);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): InteractionFragment {
    return new InteractionFragment(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IInteractionFragment>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof InteractionFragment)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `InteractionFragment{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): InteractionFragment {
    const instance = new InteractionFragment();

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
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IInteractionFragment): ValidationResult {
    if (instance instanceof InteractionFragment) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new InteractionFragment(instance);
    return temp.validate();
  }
}
