/**
 * Implementation class for Message
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement
 */
import { IComment } from './IComment';
import { IConnector } from './IConnector';
import { IInteraction } from './IInteraction';
import { IMessage } from './IMessage';
import { IMessageEnd } from './IMessageEnd';
import { INamedElement } from './INamedElement';
import { IStringExpression } from './IStringExpression';
import { IValueSpecification } from './IValueSpecification';
import { MessageSort } from './MessageSort';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Message extends NamedElement implements IMessage {
  /**
   * argument
   * 
   * @type ValueSpecification
   * @multiplicity [0..*]
   * @relationship containment
   */
  public argument: IValueSpecification[] = [];

  /**
   * connector
   * 
   * @type Connector
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public connector?: string;

  /**
   * interaction
   * 
   * @type Interaction
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite message
   */
  public interaction!: string;

  /**
   * messageSort
   * 
   * @type MessageSort
   * @multiplicity [1..1]
   */
  public messageSort!: MessageSort;

  /**
   * receiveEvent
   * 
   * @type MessageEnd
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public receiveEvent?: string;

  /**
   * sendEvent
   * 
   * @type MessageEnd
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public sendEvent?: string;

  /**
   * signature
   * 
   * @type NamedElement
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public signature?: string;

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

  constructor(init?: Partial<IMessage>) {
    super(init);

    this.argument = init?.argument ? [...init.argument] : [];
    this.connector = init?.connector;
    this.interaction = init?.interaction ?? '';
    this.messageSort = init?.messageSort!;
    this.receiveEvent = init?.receiveEvent;
    this.sendEvent = init?.sendEvent;
    this.signature = init?.signature;
  }
  getArgument(): IValueSpecification[] {
    return this.argument;
  }

  setArgument(value: IValueSpecification[]): void {
    this.argument = value;
  }

  getConnector(): string | undefined {
    return this.connector;
  }

  setConnector(value: string | undefined): void {
    this.connector = value;
  }

  getInteraction(): string {
    return this.interaction;
  }

  setInteraction(value: string): void {
    this.interaction = value;
  }

  getMessageSort(): MessageSort {
    return this.messageSort;
  }

  setMessageSort(value: MessageSort): void {
    this.messageSort = value;
  }

  getReceiveEvent(): string | undefined {
    return this.receiveEvent;
  }

  setReceiveEvent(value: string | undefined): void {
    this.receiveEvent = value;
  }

  getSendEvent(): string | undefined {
    return this.sendEvent;
  }

  setSendEvent(value: string | undefined): void {
    this.sendEvent = value;
  }

  getSignature(): string | undefined {
    return this.signature;
  }

  setSignature(value: string | undefined): void {
    this.signature = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IMessage {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      argument: this.argument,
      ...(this.connector !== undefined && { connector: this.connector }),
      interaction: this.interaction,
      messageSort: this.messageSort,
      ...(this.receiveEvent !== undefined && { receiveEvent: this.receiveEvent }),
      ...(this.sendEvent !== undefined && { sendEvent: this.sendEvent }),
      ...(this.signature !== undefined && { signature: this.signature }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.argument = [...this.argument];
    if (this.connector !== undefined) {
      result.connector = this.connector;
    }
    result.interaction = this.interaction;
    result.messageSort = this.messageSort;
    if (this.receiveEvent !== undefined) {
      result.receiveEvent = this.receiveEvent;
    }
    if (this.sendEvent !== undefined) {
      result.sendEvent = this.sendEvent;
    }
    if (this.signature !== undefined) {
      result.signature = this.signature;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Message {
    return new Message(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IMessage>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Message)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Message{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Message {
    const instance = new Message();

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
    if (json.argument && Array.isArray(json.argument)) {
      instance.argument = [...json.argument];
    }
    if (json.connector !== undefined) {
      instance.connector = json.connector;
    }
    instance.interaction = json.interaction;
    instance.messageSort = json.messageSort;
    if (json.receiveEvent !== undefined) {
      instance.receiveEvent = json.receiveEvent;
    }
    if (json.sendEvent !== undefined) {
      instance.sendEvent = json.sendEvent;
    }
    if (json.signature !== undefined) {
      instance.signature = json.signature;
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
    if (this.argument) {
    }
    if (this.interaction == null) {
      errors.push({
        property: 'interaction',
        message: 'interaction is required',
        code: 'REQUIRED'
      });
    }
    if (this.messageSort == null) {
      errors.push({
        property: 'messageSort',
        message: 'messageSort is required',
        code: 'REQUIRED'
      });
    }
    if (this.messageSort !== undefined) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IMessage): ValidationResult {
    if (instance instanceof Message) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Message(instance);
    return temp.validate();
  }
}
