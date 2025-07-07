/**
 * Implementation class for ReadLinkAction
 * 
 * @since UML 2.5
 * @package uml
 * @extends LinkAction
 */
import { Comment } from './Comment';
import { Constraint } from './Constraint';
import { ExceptionHandler } from './ExceptionHandler';
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
import { ILinkAction } from './ILinkAction';
import { ILinkEndData } from './ILinkEndData';
import { INamespace } from './INamespace';
import { IOutputPin } from './IOutputPin';
import { IReadLinkAction } from './IReadLinkAction';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { InputPin } from './InputPin';
import { LinkAction } from './LinkAction';
import { LinkEndData } from './LinkEndData';
import { OutputPin } from './OutputPin';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ReadLinkAction extends LinkAction implements IReadLinkAction {
  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  public result!: IOutputPin;

  // Inherited from LinkAction
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from LinkAction
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from LinkAction
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from LinkAction
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from LinkAction
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from LinkAction
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from LinkAction
  /**
   * inInterruptibleRegion
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inInterruptibleRegion: Set<IInterruptibleActivityRegion | string> = new Set();

  // Inherited from LinkAction
  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite node
   */
  public inStructuredNode?: IStructuredActivityNode | string = undefined;

  // Inherited from LinkAction
  /**
   * incoming
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite target
   */
  public incoming: Set<IActivityEdge | string> = new Set();

  // Inherited from LinkAction
  /**
   * outgoing
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite source
   */
  public outgoing: Set<IActivityEdge | string> = new Set();

  // Inherited from LinkAction
  /**
   * redefinedNode
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedNode: Set<IActivityNode | string> = new Set();

  // Inherited from LinkAction
  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inPartition: Set<IActivityPartition | string> = new Set();

  // Inherited from LinkAction
  /**
   * handler
   * 
   * @type ExceptionHandler
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite protectedNode
   */
  public handler: Set<IExceptionHandler> = new Set();

  // Inherited from LinkAction
  /**
   * isLocallyReentrant
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLocallyReentrant!: boolean;

  // Inherited from LinkAction
  /**
   * localPostcondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPostcondition: Set<IConstraint> = new Set();

  // Inherited from LinkAction
  /**
   * localPrecondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  public localPrecondition: Set<IConstraint> = new Set();

  // Inherited from LinkAction
  /**
   * endData
   * 
   * @type LinkEndData
   * @multiplicity [2..*]
   * @relationship containment
   */
  public endData: Set<ILinkEndData> = new Set();

  // Inherited from LinkAction
  /**
   * inputValue
   * 
   * @type InputPin
   * @multiplicity [1..*]
   * @relationship containment
   */
  public inputValue: Set<IInputPin> = new Set();

  constructor(init?: Partial<IReadLinkAction>) {
    super(init);
    this.result = init?.result!;
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
  toJSON(): IReadLinkAction {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
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

    result.result = this.result;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ReadLinkAction {
    return new ReadLinkAction(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IReadLinkAction>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ReadLinkAction)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ReadLinkAction{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ReadLinkAction {
    const instance = new ReadLinkAction();

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
    if (json.endData && Array.isArray(json.endData)) {
      instance.endData = new Set(json.endData);
    }
    if (json.inputValue && Array.isArray(json.inputValue)) {
      instance.inputValue = new Set(json.inputValue);
    }
    instance.result = json.result;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
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

  static validate(instance: IReadLinkAction): ValidationResult {
    if (instance instanceof ReadLinkAction) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ReadLinkAction(instance);
    return temp.validate();
  }
}
