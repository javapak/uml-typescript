/**
 * Implementation class for TimeObservation
 * 
 * @since UML 2.5
 * @package uml
 * @extends Observation
 */
import { IComment } from './IComment';
import { INamedElement } from './INamedElement';
import { IObservation } from './IObservation';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { ITimeObservation } from './ITimeObservation';
import { Observation } from './Observation';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class TimeObservation extends Observation implements ITimeObservation {
  /**
   * event
   * 
   * @type NamedElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public event!: string;

  /**
   * firstEvent
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public firstEvent!: boolean;

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


  constructor(init?: Partial<ITimeObservation>) {
    super(init);

    this.event = init?.event ?? '';
    this.firstEvent = init?.firstEvent ?? false;
  }
  getEvent(): string {
    return this.event;
  }

  setEvent(value: string): void {
    this.event = value;
  }

  getFirstEvent(): boolean {
    return this.firstEvent;
  }

  setFirstEvent(value: boolean): void {
    this.firstEvent = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ITimeObservation {
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

    result.event = this.event;
    result.firstEvent = this.firstEvent;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): TimeObservation {
    return new TimeObservation(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ITimeObservation>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof TimeObservation)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `TimeObservation{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): TimeObservation {
    const instance = new TimeObservation();

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
    instance.event = json.event;
    instance.firstEvent = json.firstEvent;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.event == null) {
      errors.push({
        property: 'event',
        message: 'event is required',
        code: 'REQUIRED'
      });
    }
    if (this.firstEvent == null) {
      errors.push({
        property: 'firstEvent',
        message: 'firstEvent is required',
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

  static validate(instance: ITimeObservation): ValidationResult {
    if (instance instanceof TimeObservation) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new TimeObservation(instance);
    return temp.validate();
  }
}
