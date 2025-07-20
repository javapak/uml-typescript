/**
 * Implementation class for TimeEvent
 * 
 * @since UML 2.5
 * @package uml
 * @extends Event
 */
import { Event } from './Event';
import { IComment } from './IComment';
import { IEvent } from './IEvent';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { ITimeEvent } from './ITimeEvent';
import { ITimeExpression } from './ITimeExpression';
import { StringExpression } from './StringExpression';
import { TimeExpression } from './TimeExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class TimeEvent extends Event implements ITimeEvent {
  /**
   * isRelative
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isRelative!: boolean;

  /**
   * when
   * 
   * @type TimeExpression
   * @multiplicity [1..1]
   * @relationship containment
   */
  public when!: ITimeExpression;

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


  constructor(init?: Partial<ITimeEvent>) {
    super(init);

    this.isRelative = init?.isRelative ?? false;
    this.when = init?.when!;
  }
  getIsRelative(): boolean {
    return this.isRelative;
  }

  setIsRelative(value: boolean): void {
    this.isRelative = value;
  }

  getWhen(): ITimeExpression {
    return this.when;
  }

  setWhen(value: ITimeExpression): void {
    this.when = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ITimeEvent {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      isRelative: this.isRelative,
      when: this.when,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.isRelative = this.isRelative;
    result.when = this.when;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): TimeEvent {
    return new TimeEvent(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ITimeEvent>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof TimeEvent)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `TimeEvent{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): TimeEvent {
    const instance = new TimeEvent();

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
    instance.isRelative = json.isRelative;
    instance.when = json.when;

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
    if (this.isRelative == null) {
      errors.push({
        property: 'isRelative',
        message: 'isRelative is required',
        code: 'REQUIRED'
      });
    }
    if (this.isRelative !== undefined) {
      if (typeof this.isRelative !== 'boolean') {
        errors.push({
          property: 'isRelative',
          message: 'isRelative must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isRelative
        });
      }
    }
    if (this.when == null) {
      errors.push({
        property: 'when',
        message: 'when is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ITimeEvent): ValidationResult {
    if (instance instanceof TimeEvent) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new TimeEvent(instance);
    return temp.validate();
  }
}
