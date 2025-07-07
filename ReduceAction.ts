/**
 * Implementation class for ReduceAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Action
 */
import { Action } from './Action';
import { Comment } from './Comment';
import { Constraint } from './Constraint';
import { ExceptionHandler } from './ExceptionHandler';
import { IAction } from './IAction';
import { IActivity } from './IActivity';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IBehavior } from './IBehavior';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IExceptionHandler } from './IExceptionHandler';
import { IInputPin } from './IInputPin';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { INamespace } from './INamespace';
import { IOutputPin } from './IOutputPin';
import { IRedefinableElement } from './IRedefinableElement';
import { IReduceAction } from './IReduceAction';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { InputPin } from './InputPin';
import { OutputPin } from './OutputPin';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ReduceAction extends Action implements IReduceAction {
  /**
   * collection
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  public collection!: IInputPin;

  /**
   * isOrdered
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isOrdered!: boolean;

  /**
   * reducer
   * 
   * @type Behavior
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public reducer!: IBehavior | string;

  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  public result!: IOutputPin;

  // Inherited from Action
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Action
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from Action
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from Action
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from Action
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from Action
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from Action
  /**
   * inInterruptibleRegion
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inInterruptibleRegion: Set<IInterruptibleActivityRegion | string> = new Set();

  // Inherited from Action
  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite node
   */
  public inStructuredNode?: IStructuredActivityNode | string = undefined;

  // Inherited from Action
  /**
   * incoming
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite target
   */
  public incoming: Set<IActivityEdge | string> = new Set();

  // Inherited from Action
  /**
   * outgoing
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite source
   */
  public outgoing: Set<IActivityEdge | string> = new Set();

  // Inherited from Action
  /**
   * redefinedNode
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedNode: Set<IActivityNode | string> = new Set();

  // Inherited from Action
  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inPartition: Set<IActivityPartition | string> = new Set();

  // Inherited from Action
  /**
   * handler
   * 
   * @type ExceptionHandler
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite protectedNode
   */
  public handler: Set<IExceptionHandler> = new Set();

  // Inherited from Action
  /**
   * isLocallyReentrant
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLocallyReentrant!: boolean;

  // Inherited from Action
  /**
   * localPostcondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPostcondition: Set<IConstraint> = new Set();

  // Inherited from Action
  /**
   * localPrecondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPrecondition: Set<IConstraint> = new Set();

  constructor(init?: Partial<IReduceAction>) {
    super(init);
    this.collection = init?.collection!;
    this.isOrdered = init?.isOrdered!;
    this.reducer = init?.reducer!;
    this.result = init?.result!;
  }
  getCollection(): IInputPin {
    return this.collection;
  }

  setCollection(value: IInputPin): void {
    this.collection = value;
  }

  getIsOrdered(): boolean {
    return this.isOrdered;
  }

  setIsOrdered(value: boolean): void {
    this.isOrdered = value;
  }

  getReducer(): IBehavior | string {
    return this.reducer;
  }

  setReducer(value: IBehavior | string): void {
    this.reducer = value;
  }

  getResult(): IOutputPin {
    return this.result;
  }

  setResult(value: IOutputPin): void {
    this.result = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IReduceAction {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      collection: this.collection,
      isOrdered: this.isOrdered,
      reducer: this.reducer,
      result: this.result,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.collection = this.collection;
    result.isOrdered = this.isOrdered;
    result.reducer = this.reducer;
    result.result = this.result;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ReduceAction {
    return new ReduceAction(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IReduceAction>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ReduceAction)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ReduceAction{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ReduceAction {
    const instance = new ReduceAction();

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
    instance.collection = json.collection;
    instance.isOrdered = json.isOrdered;
    instance.reducer = json.reducer;
    instance.result = json.result;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.collection == null) {
      errors.push({
        property: 'collection',
        message: 'collection is required',
        code: 'REQUIRED'
      });
    }
    if (this.isOrdered == null) {
      errors.push({
        property: 'isOrdered',
        message: 'isOrdered is required',
        code: 'REQUIRED'
      });
    }
    if (this.isOrdered !== undefined) {
      if (typeof this.isOrdered !== 'boolean') {
        errors.push({
          property: 'isOrdered',
          message: 'isOrdered must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isOrdered
        });
      }
    }
    if (this.reducer == null) {
      errors.push({
        property: 'reducer',
        message: 'reducer is required',
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
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IReduceAction): ValidationResult {
    if (instance instanceof ReduceAction) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ReduceAction(instance);
    return temp.validate();
  }
}
