/**
 * Implementation class for ExecutionSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends InteractionFragment
 */
import { IComment } from './IComment';
import { IExecutionSpecification } from './IExecutionSpecification';
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

export class ExecutionSpecification extends InteractionFragment implements IExecutionSpecification {
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


  constructor(init?: Partial<IExecutionSpecification>) {
    super(init);

    this.finish = init?.finish ?? '';
    this.start = init?.start ?? '';
  }
  getFinish(): string {
    return this.finish;
  }

  setFinish(value: string): void {
    this.finish = value;
  }

  getStart(): string {
    return this.start;
  }

  setStart(value: string): void {
    this.start = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IExecutionSpecification {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      finish: this.finish,
      start: this.start,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.finish = this.finish;
    result.start = this.start;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ExecutionSpecification {
    return new ExecutionSpecification(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IExecutionSpecification>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ExecutionSpecification)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ExecutionSpecification{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ExecutionSpecification {
    const instance = new ExecutionSpecification();

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
    if (this.finish == null) {
      errors.push({
        property: 'finish',
        message: 'finish is required',
        code: 'REQUIRED'
      });
    }
    if (this.start == null) {
      errors.push({
        property: 'start',
        message: 'start is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IExecutionSpecification): ValidationResult {
    if (instance instanceof ExecutionSpecification) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ExecutionSpecification(instance);
    return temp.validate();
  }
}
