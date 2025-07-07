/**
 * Implementation class for InteractionFragment
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { Comment } from './Comment';
import { GeneralOrdering } from './GeneralOrdering';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IGeneralOrdering } from './IGeneralOrdering';
import { IInteraction } from './IInteraction';
import { IInteractionFragment } from './IInteractionFragment';
import { IInteractionOperand } from './IInteractionOperand';
import { ILifeline } from './ILifeline';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
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
  public covered: Set<ILifeline | string> = new Set();

  /**
   * enclosingOperand
   * 
   * @type InteractionOperand
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite fragment
   */
  public enclosingOperand?: IInteractionOperand | string = undefined;

  /**
   * enclosingInteraction
   * 
   * @type Interaction
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite fragment
   */
  public enclosingInteraction?: IInteraction | string = undefined;

  /**
   * generalOrdering
   * 
   * @type GeneralOrdering
   * @multiplicity [0..*]
   * @relationship containment
   */
  public generalOrdering: Set<IGeneralOrdering> = new Set();

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

  constructor(init?: Partial<IInteractionFragment>) {
    super(init);
    this.covered = init?.covered ?? new Set();
    this.enclosingOperand = init?.enclosingOperand ?? undefined;
    this.enclosingInteraction = init?.enclosingInteraction ?? undefined;
    this.generalOrdering = init?.generalOrdering ?? new Set();
  }
  getCovered(): Set<ILifeline | string> {
    return this.covered;
  }

  setCovered(value: Set<ILifeline | string>): void {
    this.covered = value;
  }

  getEnclosingOperand(): IInteractionOperand | string | undefined {
    return this.enclosingOperand;
  }

  setEnclosingOperand(value: IInteractionOperand | string | undefined): void {
    this.enclosingOperand = value;
  }

  getEnclosingInteraction(): IInteraction | string | undefined {
    return this.enclosingInteraction;
  }

  setEnclosingInteraction(value: IInteraction | string | undefined): void {
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
