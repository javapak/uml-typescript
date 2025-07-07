/**
 * Implementation class for CallOperationAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends CallAction
 */
import { CallAction } from './CallAction';
import { Comment } from './Comment';
import { Constraint } from './Constraint';
import { ExceptionHandler } from './ExceptionHandler';
import { IActivity } from './IActivity';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { ICallAction } from './ICallAction';
import { ICallOperationAction } from './ICallOperationAction';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IExceptionHandler } from './IExceptionHandler';
import { IInputPin } from './IInputPin';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { INamespace } from './INamespace';
import { IOperation } from './IOperation';
import { IOutputPin } from './IOutputPin';
import { IPort } from './IPort';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { InputPin } from './InputPin';
import { OutputPin } from './OutputPin';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class CallOperationAction extends CallAction implements ICallOperationAction {
  /**
   * operation
   * 
   * @type Operation
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public operation!: IOperation | string;

  /**
   * target
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  public target!: IInputPin;

  // Inherited from CallAction
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from CallAction
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from CallAction
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from CallAction
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from CallAction
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from CallAction
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from CallAction
  /**
   * inInterruptibleRegion
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inInterruptibleRegion: Set<IInterruptibleActivityRegion | string> = new Set();

  // Inherited from CallAction
  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite node
   */
  public inStructuredNode?: IStructuredActivityNode | string = undefined;

  // Inherited from CallAction
  /**
   * incoming
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite target
   */
  public incoming: Set<IActivityEdge | string> = new Set();

  // Inherited from CallAction
  /**
   * outgoing
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite source
   */
  public outgoing: Set<IActivityEdge | string> = new Set();

  // Inherited from CallAction
  /**
   * redefinedNode
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedNode: Set<IActivityNode | string> = new Set();

  // Inherited from CallAction
  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inPartition: Set<IActivityPartition | string> = new Set();

  // Inherited from CallAction
  /**
   * handler
   * 
   * @type ExceptionHandler
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite protectedNode
   */
  public handler: Set<IExceptionHandler> = new Set();

  // Inherited from CallAction
  /**
   * isLocallyReentrant
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLocallyReentrant!: boolean;

  // Inherited from CallAction
  /**
   * localPostcondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPostcondition: Set<IConstraint> = new Set();

  // Inherited from CallAction
  /**
   * localPrecondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPrecondition: Set<IConstraint> = new Set();

  // Inherited from CallAction
  /**
   * argument
   * 
   * @type InputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  public argument: IInputPin[] = [];

  // Inherited from CallAction
  /**
   * onPort
   * 
   * @type Port
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public onPort?: IPort | string = undefined;

  // Inherited from CallAction
  /**
   * isSynchronous
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isSynchronous!: boolean;

  // Inherited from CallAction
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [0..*]
   * @relationship containment
   */
  public result: IOutputPin[] = [];

  constructor(init?: Partial<ICallOperationAction>) {
    super(init);
    this.operation = init?.operation!;
    this.target = init?.target!;
  }
  getOperation(): IOperation | string {
    return this.operation;
  }

  setOperation(value: IOperation | string): void {
    this.operation = value;
  }

  getTarget(): IInputPin {
    return this.target;
  }

  setTarget(value: IInputPin): void {
    this.target = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ICallOperationAction {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      operation: this.operation,
      target: this.target,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.operation = this.operation;
    result.target = this.target;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): CallOperationAction {
    return new CallOperationAction(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ICallOperationAction>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof CallOperationAction)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `CallOperationAction{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): CallOperationAction {
    const instance = new CallOperationAction();

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
    if (json.argument && Array.isArray(json.argument)) {
      instance.argument = [...json.argument];
    }
    if (json.onPort !== undefined) {
      instance.onPort = json.onPort;
    }
    instance.isSynchronous = json.isSynchronous;
    if (json.result && Array.isArray(json.result)) {
      instance.result = [...json.result];
    }
    instance.operation = json.operation;
    instance.target = json.target;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.operation == null) {
      errors.push({
        property: 'operation',
        message: 'operation is required',
        code: 'REQUIRED'
      });
    }
    if (this.target == null) {
      errors.push({
        property: 'target',
        message: 'target is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ICallOperationAction): ValidationResult {
    if (instance instanceof CallOperationAction) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new CallOperationAction(instance);
    return temp.validate();
  }
}
