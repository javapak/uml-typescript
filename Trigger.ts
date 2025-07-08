/**
 * Implementation class for Trigger
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement
 */
import { IComment } from './IComment';
import { IEvent } from './IEvent';
import { INamedElement } from './INamedElement';
import { IPort } from './IPort';
import { IStringExpression } from './IStringExpression';
import { ITrigger } from './ITrigger';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Trigger extends NamedElement implements ITrigger {
  /**
   * event
   * 
   * @type Event
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public event!: string;

  /**
   * port
   * 
   * @type Port
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public port: Set<string> = new Set();

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

  constructor(init?: Partial<ITrigger>) {
    super(init);

    this.event = init?.event ?? '';
    this.port = init?.port ? new Set(init.port) : new Set();
  }
  getEvent(): string {
    return this.event;
  }

  setEvent(value: string): void {
    this.event = value;
  }

  getPort(): Set<string> {
    return this.port;
  }

  setPort(value: Set<string>): void {
    this.port = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ITrigger {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      event: this.event,
      port: this.port,
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
    result.port = Array.from(this.port);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Trigger {
    return new Trigger(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ITrigger>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Trigger)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Trigger{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Trigger {
    const instance = new Trigger();

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
    instance.event = json.event;
    if (json.port && Array.isArray(json.port)) {
      instance.port = new Set(json.port);
    }

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
    if (this.port) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ITrigger): ValidationResult {
    if (instance instanceof Trigger) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Trigger(instance);
    return temp.validate();
  }
}
