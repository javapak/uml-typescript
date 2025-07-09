/**
 * Implementation class for InteractionUse
 * 
 * @since UML 2.5
 * @package uml
 * @extends InteractionFragment
 */
import { IComment } from './IComment';
import { IGate } from './IGate';
import { IGeneralOrdering } from './IGeneralOrdering';
import { IInteraction } from './IInteraction';
import { IInteractionFragment } from './IInteractionFragment';
import { IInteractionOperand } from './IInteractionOperand';
import { IInteractionUse } from './IInteractionUse';
import { ILifeline } from './ILifeline';
import { IProperty } from './IProperty';
import { IStringExpression } from './IStringExpression';
import { IValueSpecification } from './IValueSpecification';
import { InteractionFragment } from './InteractionFragment';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class InteractionUse extends InteractionFragment implements IInteractionUse {
  /**
   * actualGate
   * 
   * @type Gate
   * @multiplicity [0..*]
   * @relationship containment
   */
  public actualGate: Set<IGate> = new Set();

  /**
   * argument
   * 
   * @type ValueSpecification
   * @multiplicity [0..*]
   * @relationship containment
   */
  public argument: IValueSpecification[] = [];

  /**
   * refersTo
   * 
   * @type Interaction
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public refersTo!: string;

  /**
   * returnValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public returnValue?: IValueSpecification;

  /**
   * returnValueRecipient
   * 
   * @type Property
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public returnValueRecipient?: string;

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


  constructor(init?: Partial<IInteractionUse>) {
    super(init);

    this.actualGate = init?.actualGate ? new Set(init.actualGate) : new Set();
    this.argument = init?.argument ? [...init.argument] : [];
    this.refersTo = init?.refersTo ?? '';
    this.returnValue = init?.returnValue;
    this.returnValueRecipient = init?.returnValueRecipient;
  }
  getActualGate(): Set<IGate> {
    return this.actualGate;
  }

  setActualGate(value: Set<IGate>): void {
    this.actualGate = value;
  }

  getArgument(): IValueSpecification[] {
    return this.argument;
  }

  setArgument(value: IValueSpecification[]): void {
    this.argument = value;
  }

  getRefersTo(): string {
    return this.refersTo;
  }

  setRefersTo(value: string): void {
    this.refersTo = value;
  }

  getReturnValue(): IValueSpecification | undefined {
    return this.returnValue;
  }

  setReturnValue(value: IValueSpecification | undefined): void {
    this.returnValue = value;
  }

  getReturnValueRecipient(): string | undefined {
    return this.returnValueRecipient;
  }

  setReturnValueRecipient(value: string | undefined): void {
    this.returnValueRecipient = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IInteractionUse {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      actualGate: this.actualGate,
      argument: this.argument,
      refersTo: this.refersTo,
      ...(this.returnValue !== undefined && { returnValue: this.returnValue }),
      ...(this.returnValueRecipient !== undefined && { returnValueRecipient: this.returnValueRecipient }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.actualGate = Array.from(this.actualGate);
    result.argument = [...this.argument];
    result.refersTo = this.refersTo;
    if (this.returnValue !== undefined) {
      result.returnValue = this.returnValue;
    }
    if (this.returnValueRecipient !== undefined) {
      result.returnValueRecipient = this.returnValueRecipient;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): InteractionUse {
    return new InteractionUse(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IInteractionUse>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof InteractionUse)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `InteractionUse{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): InteractionUse {
    const instance = new InteractionUse();

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
    if (json.actualGate && Array.isArray(json.actualGate)) {
      instance.actualGate = new Set(json.actualGate);
    }
    if (json.argument && Array.isArray(json.argument)) {
      instance.argument = [...json.argument];
    }
    instance.refersTo = json.refersTo;
    if (json.returnValue !== undefined) {
      instance.returnValue = json.returnValue;
    }
    if (json.returnValueRecipient !== undefined) {
      instance.returnValueRecipient = json.returnValueRecipient;
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
    if (this.actualGate) {
    }
    if (this.argument) {
    }
    if (this.refersTo == null) {
      errors.push({
        property: 'refersTo',
        message: 'refersTo is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IInteractionUse): ValidationResult {
    if (instance instanceof InteractionUse) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new InteractionUse(instance);
    return temp.validate();
  }
}
