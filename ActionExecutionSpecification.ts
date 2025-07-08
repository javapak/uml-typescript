/**
 * Implementation class for ActionExecutionSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @extends ExecutionSpecification
 */
import { ExecutionSpecification } from './ExecutionSpecification';
import { IAction } from './IAction';
import { IActionExecutionSpecification } from './IActionExecutionSpecification';
import { IComment } from './IComment';
import { IExecutionSpecification } from './IExecutionSpecification';
import { IGeneralOrdering } from './IGeneralOrdering';
import { IInteraction } from './IInteraction';
import { IInteractionOperand } from './IInteractionOperand';
import { ILifeline } from './ILifeline';
import { IOccurrenceSpecification } from './IOccurrenceSpecification';
import { IStringExpression } from './IStringExpression';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ActionExecutionSpecification extends ExecutionSpecification implements IActionExecutionSpecification {
  /**
   * action
   * 
   * @type Action
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public action!: string;

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
   * finish
   * 
   * @type OccurrenceSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public finish!: string;

  /**
   * start
   * 
   * @type OccurrenceSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public start!: string;


  constructor(init?: Partial<IActionExecutionSpecification>) {
    super(init);

    this.action = init?.action ?? '';
  }
  getAction(): string {
    return this.action;
  }

  setAction(value: string): void {
    this.action = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IActionExecutionSpecification {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      action: this.action,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.action = this.action;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ActionExecutionSpecification {
    return new ActionExecutionSpecification(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IActionExecutionSpecification>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ActionExecutionSpecification)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ActionExecutionSpecification{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ActionExecutionSpecification {
    const instance = new ActionExecutionSpecification();

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
    instance.finish = json.finish;
    instance.start = json.start;
    instance.action = json.action;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.action == null) {
      errors.push({
        property: 'action',
        message: 'action is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IActionExecutionSpecification): ValidationResult {
    if (instance instanceof ActionExecutionSpecification) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ActionExecutionSpecification(instance);
    return temp.validate();
  }
}
