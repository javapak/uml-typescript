/**
 * Implementation class for TimeConstraint
 * 
 * @since UML 2.5
 * @package uml
 * @extends IntervalConstraint
 */
import { IComment } from './IComment';
import { IElement } from './IElement';
import { IIntervalConstraint } from './IIntervalConstraint';
import { INamespace } from './INamespace';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { ITimeConstraint } from './ITimeConstraint';
import { IValueSpecification } from './IValueSpecification';
import { IntervalConstraint } from './IntervalConstraint';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class TimeConstraint extends IntervalConstraint implements ITimeConstraint {
  /**
   * firstEvent
   * 
   * @type Boolean
   * @multiplicity [0..1]
   */
  public firstEvent?: boolean;

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
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: string;

  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: string;

  /**
   * constrainedElement
   * 
   * @type Element
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public constrainedElement: string[] = [];

  /**
   * context
   * 
   * @type Namespace
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedRule
   */
  public context?: string;

  /**
   * specification
   * 
   * @type ValueSpecification
   * @multiplicity [1..1]
   * @relationship containment
   */
  public specification!: IValueSpecification;


  constructor(init?: Partial<ITimeConstraint>) {
    super(init);

    this.firstEvent = init?.firstEvent;
  }
  getFirstEvent(): boolean | undefined {
    return this.firstEvent;
  }

  setFirstEvent(value: boolean | undefined): void {
    this.firstEvent = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ITimeConstraint {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.firstEvent !== undefined && { firstEvent: this.firstEvent }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.firstEvent !== undefined) {
      result.firstEvent = this.firstEvent;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): TimeConstraint {
    return new TimeConstraint(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ITimeConstraint>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof TimeConstraint)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `TimeConstraint{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): TimeConstraint {
    const instance = new TimeConstraint();

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
    if (json.owningTemplateParameter !== undefined) {
      instance.owningTemplateParameter = json.owningTemplateParameter;
    }
    if (json.templateParameter !== undefined) {
      instance.templateParameter = json.templateParameter;
    }
    if (json.constrainedElement && Array.isArray(json.constrainedElement)) {
      instance.constrainedElement = [...json.constrainedElement];
    }
    if (json.context !== undefined) {
      instance.context = json.context;
    }
    instance.specification = json.specification;
    if (json.firstEvent !== undefined) {
      instance.firstEvent = json.firstEvent;
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
    if (this.constrainedElement) {
    }
    if (this.specification == null) {
      errors.push({
        property: 'specification',
        message: 'specification is required',
        code: 'REQUIRED'
      });
    }
    if (this.firstEvent !== undefined) {
      if (typeof this.firstEvent !== 'boolean') {
        errors.push({
          property: 'firstEvent',
          message: 'firstEvent must be a boolean',
          code: 'TYPE_ERROR',
          value: this.firstEvent
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ITimeConstraint): ValidationResult {
    if (instance instanceof TimeConstraint) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new TimeConstraint(instance);
    return temp.validate();
  }
}
