/**
 * Implementation class for Continuation
 * 
 * @since UML 2.5
 * @package uml
 * @extends InteractionFragment
 */
import { Comment } from './Comment';
import { GeneralOrdering } from './GeneralOrdering';
import { IComment } from './IComment';
import { IContinuation } from './IContinuation';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IGeneralOrdering } from './IGeneralOrdering';
import { IInteraction } from './IInteraction';
import { IInteractionFragment } from './IInteractionFragment';
import { IInteractionOperand } from './IInteractionOperand';
import { ILifeline } from './ILifeline';
import { INamespace } from './INamespace';
import { IStringExpression } from './IStringExpression';
import { InteractionFragment } from './InteractionFragment';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Continuation extends InteractionFragment implements IContinuation {
  /**
   * setting
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public setting!: boolean;

  // Inherited from InteractionFragment
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from InteractionFragment
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from InteractionFragment
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from InteractionFragment
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from InteractionFragment
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from InteractionFragment
  /**
   * covered
   * 
   * @type Lifeline
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite coveredBy
   */
  public covered: Set<ILifeline | string> = new Set();

  // Inherited from InteractionFragment
  /**
   * enclosingOperand
   * 
   * @type InteractionOperand
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite fragment
   */
  public enclosingOperand?: IInteractionOperand | string = undefined;

  // Inherited from InteractionFragment
  /**
   * enclosingInteraction
   * 
   * @type Interaction
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite fragment
   */
  public enclosingInteraction?: IInteraction | string = undefined;

  // Inherited from InteractionFragment
  /**
   * generalOrdering
   * 
   * @type GeneralOrdering
   * @multiplicity [0..*]
   * @relationship containment
   */
  public generalOrdering: Set<IGeneralOrdering> = new Set();

  constructor(init?: Partial<IContinuation>) {
    super(init);
    this.setting = init?.setting!;
  }
  getSetting(): boolean {
    return this.setting;
  }

  setSetting(value: boolean): void {
    this.setting = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IContinuation {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      setting: this.setting,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.setting = this.setting;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Continuation {
    return new Continuation(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IContinuation>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Continuation)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Continuation{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Continuation {
    const instance = new Continuation();

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
    instance.setting = json.setting;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.setting == null) {
      errors.push({
        property: 'setting',
        message: 'setting is required',
        code: 'REQUIRED'
      });
    }
    if (this.setting !== undefined) {
      if (typeof this.setting !== 'boolean') {
        errors.push({
          property: 'setting',
          message: 'setting must be a boolean',
          code: 'TYPE_ERROR',
          value: this.setting
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IContinuation): ValidationResult {
    if (instance instanceof Continuation) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Continuation(instance);
    return temp.validate();
  }
}
