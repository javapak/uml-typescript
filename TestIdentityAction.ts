/**
 * Implementation class for TestIdentityAction
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
import { IOutputPin } from './IOutputPin';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { ITestIdentityAction } from './ITestIdentityAction';
import { InputPin } from './InputPin';
import { OutputPin } from './OutputPin';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class TestIdentityAction extends Action implements ITestIdentityAction {
  /**
   * first
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  public first!: IInputPin;

  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  public result!: IOutputPin;

  /**
   * second
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  public second!: IInputPin;

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


  constructor(init?: Partial<ITestIdentityAction>) {
    super(init);

    this.first = init?.first!;
    this.result = init?.result!;
    this.second = init?.second!;
  }
  getFirst(): IInputPin {
    return this.first;
  }

  setFirst(value: IInputPin): void {
    this.first = value;
  }

  getResult(): IOutputPin {
    return this.result;
  }

  setResult(value: IOutputPin): void {
    this.result = value;
  }

  getSecond(): IInputPin {
    return this.second;
  }

  setSecond(value: IInputPin): void {
    this.second = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ITestIdentityAction {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      first: this.first,
      result: this.result,
      second: this.second,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.first = this.first;
    result.result = this.result;
    result.second = this.second;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): TestIdentityAction {
    return new TestIdentityAction(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ITestIdentityAction>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof TestIdentityAction)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `TestIdentityAction{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): TestIdentityAction {
    const instance = new TestIdentityAction();

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
    instance.first = json.first;
    instance.result = json.result;
    instance.second = json.second;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.first == null) {
      errors.push({
        property: 'first',
        message: 'first is required',
        code: 'REQUIRED'
      });
    }
    if (this.result == null) {
      errors.push({
        property: 'result',
        message: 'result is required',
        code: 'REQUIRED'
      });
    }
    if (this.second == null) {
      errors.push({
        property: 'second',
        message: 'second is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ITestIdentityAction): ValidationResult {
    if (instance instanceof TestIdentityAction) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new TestIdentityAction(instance);
    return temp.validate();
  }
}
