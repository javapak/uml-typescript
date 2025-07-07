/**
 * Implementation class for ReclassifyObjectAction
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
import { IReclassifyObjectAction } from './IReclassifyObjectAction';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { InputPin } from './InputPin';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ReclassifyObjectAction extends Action implements IReclassifyObjectAction {
  /**
   * isReplaceAll
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isReplaceAll!: boolean;

  /**
   * newClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public newClassifier: Set<IClassifier | string> = new Set();

  /**
   * object
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  public object!: IInputPin;

  /**
   * oldClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public oldClassifier: Set<IClassifier | string> = new Set();

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

  constructor(init?: Partial<IReclassifyObjectAction>) {
    super(init);
    this.isReplaceAll = init?.isReplaceAll!;
    this.newClassifier = init?.newClassifier ?? new Set();
    this.object = init?.object!;
    this.oldClassifier = init?.oldClassifier ?? new Set();
  }
  getIsReplaceAll(): boolean {
    return this.isReplaceAll;
  }

  setIsReplaceAll(value: boolean): void {
    this.isReplaceAll = value;
  }

  getNewClassifier(): Set<IClassifier | string> {
    return this.newClassifier;
  }

  setNewClassifier(value: Set<IClassifier | string>): void {
    this.newClassifier = value;
  }

  getObject(): IInputPin {
    return this.object;
  }

  setObject(value: IInputPin): void {
    this.object = value;
  }

  getOldClassifier(): Set<IClassifier | string> {
    return this.oldClassifier;
  }

  setOldClassifier(value: Set<IClassifier | string>): void {
    this.oldClassifier = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IReclassifyObjectAction {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      isReplaceAll: this.isReplaceAll,
      newClassifier: this.newClassifier,
      object: this.object,
      oldClassifier: this.oldClassifier,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.isReplaceAll = this.isReplaceAll;
    result.newClassifier = Array.from(this.newClassifier);
    result.object = this.object;
    result.oldClassifier = Array.from(this.oldClassifier);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ReclassifyObjectAction {
    return new ReclassifyObjectAction(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IReclassifyObjectAction>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ReclassifyObjectAction)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ReclassifyObjectAction{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ReclassifyObjectAction {
    const instance = new ReclassifyObjectAction();

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
    instance.isReplaceAll = json.isReplaceAll;
    if (json.newClassifier && Array.isArray(json.newClassifier)) {
      instance.newClassifier = new Set(json.newClassifier);
    }
    instance.object = json.object;
    if (json.oldClassifier && Array.isArray(json.oldClassifier)) {
      instance.oldClassifier = new Set(json.oldClassifier);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.isReplaceAll == null) {
      errors.push({
        property: 'isReplaceAll',
        message: 'isReplaceAll is required',
        code: 'REQUIRED'
      });
    }
    if (this.isReplaceAll !== undefined) {
      if (typeof this.isReplaceAll !== 'boolean') {
        errors.push({
          property: 'isReplaceAll',
          message: 'isReplaceAll must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isReplaceAll
        });
      }
    }
    if (this.newClassifier) {
    }
    if (this.object == null) {
      errors.push({
        property: 'object',
        message: 'object is required',
        code: 'REQUIRED'
      });
    }
    if (this.oldClassifier) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IReclassifyObjectAction): ValidationResult {
    if (instance instanceof ReclassifyObjectAction) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ReclassifyObjectAction(instance);
    return temp.validate();
  }
}
