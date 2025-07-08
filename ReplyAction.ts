/**
 * Implementation class for ReplyAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { Action } from './Action';
import { IAction } from './IAction';
import { IActivityEdge } from './IActivityEdge';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IExceptionHandler } from './IExceptionHandler';
import { IInputPin } from './IInputPin';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { IReplyAction } from './IReplyAction';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { ITrigger } from './ITrigger';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ReplyAction extends Action implements IReplyAction {
  /**
   * replyToCall
   * 
   * @type Trigger
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public replyToCall!: string;

  /**
   * replyValue
   * 
   * @type InputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  public replyValue: IInputPin[] = [];

  /**
   * returnInformation
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  public returnInformation!: IInputPin;

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
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  /**
   * inInterruptibleRegion
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inInterruptibleRegion: Set<string> = new Set();

  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite node
   */
  public inStructuredNode?: string;

  /**
   * incoming
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite target
   */
  public incoming: Set<string> = new Set();

  /**
   * outgoing
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite source
   */
  public outgoing: Set<string> = new Set();

  /**
   * redefinedNode
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedNode: Set<string> = new Set();

  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inPartition: Set<string> = new Set();

  /**
   * handler
   * 
   * @type ExceptionHandler
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite protectedNode
   */
  public handler: Set<IExceptionHandler> = new Set();

  /**
   * isLocallyReentrant
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLocallyReentrant!: boolean;

  /**
   * localPostcondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPostcondition: Set<IConstraint> = new Set();

  /**
   * localPrecondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPrecondition: Set<IConstraint> = new Set();


  constructor(init?: Partial<IReplyAction>) {
    super(init);

    this.replyToCall = init?.replyToCall ?? '';
    this.replyValue = init?.replyValue ? [...init.replyValue] : [];
    this.returnInformation = init?.returnInformation!;
  }
  getReplyToCall(): string {
    return this.replyToCall;
  }

  setReplyToCall(value: string): void {
    this.replyToCall = value;
  }

  getReplyValue(): IInputPin[] {
    return this.replyValue;
  }

  setReplyValue(value: IInputPin[]): void {
    this.replyValue = value;
  }

  getReturnInformation(): IInputPin {
    return this.returnInformation;
  }

  setReturnInformation(value: IInputPin): void {
    this.returnInformation = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IReplyAction {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      replyToCall: this.replyToCall,
      replyValue: this.replyValue,
      returnInformation: this.returnInformation,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.replyToCall = this.replyToCall;
    result.replyValue = [...this.replyValue];
    result.returnInformation = this.returnInformation;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ReplyAction {
    return new ReplyAction(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IReplyAction>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ReplyAction)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ReplyAction{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ReplyAction {
    const instance = new ReplyAction();

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
    instance.isLeaf = json.isLeaf;
    if (json.inInterruptibleRegion && Array.isArray(json.inInterruptibleRegion)) {
      instance.inInterruptibleRegion = new Set(json.inInterruptibleRegion);
    }
    if (json.inStructuredNode !== undefined) {
      instance.inStructuredNode = json.inStructuredNode;
    }
    if (json.incoming && Array.isArray(json.incoming)) {
      instance.incoming = new Set(json.incoming);
    }
    if (json.outgoing && Array.isArray(json.outgoing)) {
      instance.outgoing = new Set(json.outgoing);
    }
    if (json.redefinedNode && Array.isArray(json.redefinedNode)) {
      instance.redefinedNode = new Set(json.redefinedNode);
    }
    if (json.inPartition && Array.isArray(json.inPartition)) {
      instance.inPartition = new Set(json.inPartition);
    }
    if (json.handler && Array.isArray(json.handler)) {
      instance.handler = new Set(json.handler);
    }
    instance.isLocallyReentrant = json.isLocallyReentrant;
    if (json.localPostcondition && Array.isArray(json.localPostcondition)) {
      instance.localPostcondition = new Set(json.localPostcondition);
    }
    if (json.localPrecondition && Array.isArray(json.localPrecondition)) {
      instance.localPrecondition = new Set(json.localPrecondition);
    }
    instance.replyToCall = json.replyToCall;
    if (json.replyValue && Array.isArray(json.replyValue)) {
      instance.replyValue = [...json.replyValue];
    }
    instance.returnInformation = json.returnInformation;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.replyToCall == null) {
      errors.push({
        property: 'replyToCall',
        message: 'replyToCall is required',
        code: 'REQUIRED'
      });
    }
    if (this.replyValue) {
    }
    if (this.returnInformation == null) {
      errors.push({
        property: 'returnInformation',
        message: 'returnInformation is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IReplyAction): ValidationResult {
    if (instance instanceof ReplyAction) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ReplyAction(instance);
    return temp.validate();
  }
}
