/**
 * Implementation class for ExecutionOccurrenceSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @extends OccurrenceSpecification
 */
import { Comment } from './Comment';
import { GeneralOrdering } from './GeneralOrdering';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IExecutionOccurrenceSpecification } from './IExecutionOccurrenceSpecification';
import { IExecutionSpecification } from './IExecutionSpecification';
import { IGeneralOrdering } from './IGeneralOrdering';
import { IInteraction } from './IInteraction';
import { IInteractionOperand } from './IInteractionOperand';
import { ILifeline } from './ILifeline';
import { INamespace } from './INamespace';
import { IOccurrenceSpecification } from './IOccurrenceSpecification';
import { IStringExpression } from './IStringExpression';
import { OccurrenceSpecification } from './OccurrenceSpecification';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ExecutionOccurrenceSpecification extends OccurrenceSpecification implements IExecutionOccurrenceSpecification {
  /**
   * execution
   * 
   * @type ExecutionSpecification
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public execution!: IExecutionSpecification | string;

  // Inherited from OccurrenceSpecification
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from OccurrenceSpecification
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from OccurrenceSpecification
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from OccurrenceSpecification
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from OccurrenceSpecification
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from OccurrenceSpecification
  /**
   * covered
   * 
   * @type Lifeline
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite coveredBy
   */
  public covered: Set<ILifeline | string> = new Set();

  // Inherited from OccurrenceSpecification
  /**
   * enclosingOperand
   * 
   * @type InteractionOperand
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite fragment
   */
  public enclosingOperand?: IInteractionOperand | string = undefined;

  // Inherited from OccurrenceSpecification
  /**
   * enclosingInteraction
   * 
   * @type Interaction
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite fragment
   */
  public enclosingInteraction?: IInteraction | string = undefined;

  // Inherited from OccurrenceSpecification
  /**
   * generalOrdering
   * 
   * @type GeneralOrdering
   * @multiplicity [0..*]
   * @relationship containment
   */
  public generalOrdering: Set<IGeneralOrdering> = new Set();

  // Inherited from OccurrenceSpecification
  /**
   * toAfter
   * 
   * @type GeneralOrdering
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite before
   */
  public toAfter: Set<IGeneralOrdering | string> = new Set();

  // Inherited from OccurrenceSpecification
  /**
   * toBefore
   * 
   * @type GeneralOrdering
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite after
   */
  public toBefore: Set<IGeneralOrdering | string> = new Set();

  constructor(init?: Partial<IExecutionOccurrenceSpecification>) {
    super(init);
    this.execution = init?.execution!;
  }
  getExecution(): IExecutionSpecification | string {
    return this.execution;
  }

  setExecution(value: IExecutionSpecification | string): void {
    this.execution = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IExecutionOccurrenceSpecification {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      execution: this.execution,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.execution = this.execution;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ExecutionOccurrenceSpecification {
    return new ExecutionOccurrenceSpecification(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IExecutionOccurrenceSpecification>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ExecutionOccurrenceSpecification)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ExecutionOccurrenceSpecification{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ExecutionOccurrenceSpecification {
    const instance = new ExecutionOccurrenceSpecification();

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
    if (json.toAfter && Array.isArray(json.toAfter)) {
      instance.toAfter = new Set(json.toAfter);
    }
    if (json.toBefore && Array.isArray(json.toBefore)) {
      instance.toBefore = new Set(json.toBefore);
    }
    instance.execution = json.execution;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.execution == null) {
      errors.push({
        property: 'execution',
        message: 'execution is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IExecutionOccurrenceSpecification): ValidationResult {
    if (instance instanceof ExecutionOccurrenceSpecification) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ExecutionOccurrenceSpecification(instance);
    return temp.validate();
  }
}
