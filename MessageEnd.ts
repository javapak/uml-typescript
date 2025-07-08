/**
 * Implementation class for MessageEnd
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { IComment } from './IComment';
import { IMessage } from './IMessage';
import { IMessageEnd } from './IMessageEnd';
import { INamedElement } from './INamedElement';
import { IStringExpression } from './IStringExpression';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class MessageEnd extends NamedElement implements IMessageEnd {
  /**
   * message
   * 
   * @type Message
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public message?: string;

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

  constructor(init?: Partial<IMessageEnd>) {
    super(init);

    this.message = init?.message;
  }
  getMessage(): string | undefined {
    return this.message;
  }

  setMessage(value: string | undefined): void {
    this.message = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IMessageEnd {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.message !== undefined && { message: this.message }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.message !== undefined) {
      result.message = this.message;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): MessageEnd {
    return new MessageEnd(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IMessageEnd>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof MessageEnd)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `MessageEnd{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): MessageEnd {
    const instance = new MessageEnd();

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
    if (json.message !== undefined) {
      instance.message = json.message;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IMessageEnd): ValidationResult {
    if (instance instanceof MessageEnd) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new MessageEnd(instance);
    return temp.validate();
  }
}
