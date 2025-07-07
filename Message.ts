/**
 * Implementation class for Message
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement
 */
import { Comment } from './Comment';
import { IComment } from './IComment';
import { IConnector } from './IConnector';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IInteraction } from './IInteraction';
import { IMessage } from './IMessage';
import { IMessageEnd } from './IMessageEnd';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IStringExpression } from './IStringExpression';
import { IValueSpecification } from './IValueSpecification';
import { MessageKind } from './MessageKind';
import { MessageSort } from './MessageSort';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
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
  public connector?: IConnector | string = undefined;

  /**
   * interaction
   * 
   * @type Interaction
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite message
   */
  public interaction!: IInteraction | string;

  /**
   * messageSort
   * 
   * @type MessageSort
   * @multiplicity [1..1]
   */
  public messageSort!: any;

  /**
   * receiveEvent
   * 
   * @type MessageEnd
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public receiveEvent?: IMessageEnd | string = undefined;

  /**
   * sendEvent
   * 
   * @type MessageEnd
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public sendEvent?: IMessageEnd | string = undefined;

  /**
   * signature
   * 
   * @type NamedElement
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public signature?: INamedElement | string = undefined;

  // Inherited from NamedElement
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from NamedElement
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from NamedElement
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from NamedElement
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from NamedElement
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  constructor(init?: Partial<IMessage>) {
    super(init);
    this.argument = init?.argument ?? [];
    this.connector = init?.connector ?? undefined;
    this.interaction = init?.interaction!;
    this.messageSort = init?.messageSort!;
    this.receiveEvent = init?.receiveEvent ?? undefined;
    this.sendEvent = init?.sendEvent ?? undefined;
    this.signature = init?.signature ?? undefined;
  }
  getArgument(): IValueSpecification[] {
    return this.argument;
  }

  setArgument(value: IValueSpecification[]): void {
    this.argument = value;
  }

  getConnector(): IConnector | string | undefined {
    return this.connector;
  }

  setConnector(value: IConnector | string | undefined): void {
    this.connector = value;
  }

  getInteraction(): IInteraction | string {
    return this.interaction;
  }

  setInteraction(value: IInteraction | string): void {
    this.interaction = value;
  }

  getMessageSort(): any {
    return this.messageSort;
  }

  setMessageSort(value: any): void {
    this.messageSort = value;
  }

  getReceiveEvent(): IMessageEnd | string | undefined {
    return this.receiveEvent;
  }

  setReceiveEvent(value: IMessageEnd | string | undefined): void {
    this.receiveEvent = value;
  }

  getSendEvent(): IMessageEnd | string | undefined {
    return this.sendEvent;
  }

  setSendEvent(value: IMessageEnd | string | undefined): void {
    this.sendEvent = value;
  }

  getSignature(): INamedElement | string | undefined {
    return this.signature;
  }

  setSignature(value: INamedElement | string | undefined): void {
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
