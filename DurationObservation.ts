/**
 * Implementation class for DurationObservation
 * 
 * @since UML 2.5
 * @package uml
 * @extends Observation
 */
import { IComment } from './IComment';
import { IDurationObservation } from './IDurationObservation';
import { INamedElement } from './INamedElement';
import { IObservation } from './IObservation';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { Observation } from './Observation';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class DurationObservation extends Observation implements IDurationObservation {
  /**
   * event
   * 
   * @type NamedElement
   * @multiplicity [1..2]
   * @relationship cross-reference
   */
  public event: string[] = [];

  /**
   * firstEvent
   * 
   * @type Boolean
   * @multiplicity [0..2]
   */
  public firstEvent: Set<boolean> = new Set();

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


  constructor(init?: Partial<IDurationObservation>) {
    super(init);

    this.event = init?.event ? [...init.event] : [];
    this.firstEvent = init?.firstEvent ? new Set(init.firstEvent) : new Set();
  }
  getEvent(): string[] {
    return this.event;
  }

  setEvent(value: string[]): void {
    this.event = value;
  }

  getFirstEvent(): Set<boolean> {
    return this.firstEvent;
  }

  setFirstEvent(value: Set<boolean>): void {
    this.firstEvent = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IDurationObservation {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      event: this.event,
      firstEvent: this.firstEvent,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.event = [...this.event];
    result.firstEvent = Array.from(this.firstEvent);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): DurationObservation {
    return new DurationObservation(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IDurationObservation>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof DurationObservation)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `DurationObservation{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): DurationObservation {
    const instance = new DurationObservation();

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
    if (json.event && Array.isArray(json.event)) {
      instance.event = [...json.event];
    }
    if (json.firstEvent && Array.isArray(json.firstEvent)) {
      instance.firstEvent = new Set(json.firstEvent);
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
    if (this.event == null) {
      errors.push({
        property: 'event',
        message: 'event is required',
        code: 'REQUIRED'
      });
    }
    if (this.event) {
      if (Array.from(this.event).length < 1) {
        errors.push({
          property: 'event',
          message: 'event must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
      if (this.event.length > 2) {
        errors.push({
          property: 'event',
          message: 'event must have at most 2 elements',
          code: 'MAX_LENGTH'
        });
      }
    }
    if (this.firstEvent) {
      if (this.firstEvent.length > 2) {
        errors.push({
          property: 'firstEvent',
          message: 'firstEvent must have at most 2 elements',
          code: 'MAX_LENGTH'
        });
      }
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

  static validate(instance: IDurationObservation): ValidationResult {
    if (instance instanceof DurationObservation) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new DurationObservation(instance);
    return temp.validate();
  }
}
