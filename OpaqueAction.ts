/**
 * Implementation class for OpaqueAction
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
import { IOpaqueAction } from './IOpaqueAction';
import { IOutputPin } from './IOutputPin';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class OpaqueAction extends Action implements IOpaqueAction {
  /**
   * body
   * 
   * @type String
   * @multiplicity [0..*]
   */
  public body: string[] = [];

  /**
   * inputValue
   * 
   * @type InputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  public inputValue: Set<IInputPin> = new Set();

  /**
   * language
   * 
   * @type String
   * @multiplicity [0..*]
   */
  public language: string[] = [];

  /**
   * outputValue
   * 
   * @type OutputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  public outputValue: Set<IOutputPin> = new Set();

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


  constructor(init?: Partial<IOpaqueAction>) {
    super(init);

    this.body = init?.body ? [...init.body] : [];
    this.inputValue = init?.inputValue ? new Set(init.inputValue) : new Set();
    this.language = init?.language ? [...init.language] : [];
    this.outputValue = init?.outputValue ? new Set(init.outputValue) : new Set();
  }
  getBody(): string[] {
    return this.body;
  }

  setBody(value: string[]): void {
    this.body = value;
  }

  getInputValue(): Set<IInputPin> {
    return this.inputValue;
  }

  setInputValue(value: Set<IInputPin>): void {
    this.inputValue = value;
  }

  getLanguage(): string[] {
    return this.language;
  }

  setLanguage(value: string[]): void {
    this.language = value;
  }

  getOutputValue(): Set<IOutputPin> {
    return this.outputValue;
  }

  setOutputValue(value: Set<IOutputPin>): void {
    this.outputValue = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IOpaqueAction {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      body: this.body,
      inputValue: this.inputValue,
      language: this.language,
      outputValue: this.outputValue,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.body = [...this.body];
    result.inputValue = Array.from(this.inputValue);
    result.language = [...this.language];
    result.outputValue = Array.from(this.outputValue);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): OpaqueAction {
    return new OpaqueAction(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IOpaqueAction>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof OpaqueAction)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `OpaqueAction{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): OpaqueAction {
    const instance = new OpaqueAction();

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
    if (json.body && Array.isArray(json.body)) {
      instance.body = [...json.body];
    }
    if (json.inputValue && Array.isArray(json.inputValue)) {
      instance.inputValue = new Set(json.inputValue);
    }
    if (json.language && Array.isArray(json.language)) {
      instance.language = [...json.language];
    }
    if (json.outputValue && Array.isArray(json.outputValue)) {
      instance.outputValue = new Set(json.outputValue);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.body) {
    }
    if (this.body !== undefined) {
      if (typeof this.body !== 'string') {
        errors.push({
          property: 'body',
          message: 'body must be a string',
          code: 'TYPE_ERROR',
          value: this.body
        });
      }
    }
    if (this.inputValue) {
    }
    if (this.language) {
    }
    if (this.language !== undefined) {
      if (typeof this.language !== 'string') {
        errors.push({
          property: 'language',
          message: 'language must be a string',
          code: 'TYPE_ERROR',
          value: this.language
        });
      }
    }
    if (this.outputValue) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IOpaqueAction): ValidationResult {
    if (instance instanceof OpaqueAction) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new OpaqueAction(instance);
    return temp.validate();
  }
}
