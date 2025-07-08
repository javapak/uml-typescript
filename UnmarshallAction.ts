/**
 * Implementation class for UnmarshallAction
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
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IExceptionHandler } from './IExceptionHandler';
import { IInputPin } from './IInputPin';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { IOutputPin } from './IOutputPin';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IUnmarshallAction } from './IUnmarshallAction';
import { InputPin } from './InputPin';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class UnmarshallAction extends Action implements IUnmarshallAction {
  /**
   * object
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  public object!: IInputPin;

  /**
   * result
   * 
   * @type OutputPin
   * @multiplicity [1..*]
   * @relationship containment
   */
  public result: IOutputPin[] = [];

  /**
   * unmarshallType
   * 
   * @type Classifier
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public unmarshallType!: string;

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


  constructor(init?: Partial<IUnmarshallAction>) {
    super(init);

    this.object = init?.object!;
    this.result = init?.result ? [...init.result] : [];
    this.unmarshallType = init?.unmarshallType ?? '';
  }
  getObject(): IInputPin {
    return this.object;
  }

  setObject(value: IInputPin): void {
    this.object = value;
  }

  getResult(): IOutputPin[] {
    return this.result;
  }

  setResult(value: IOutputPin[]): void {
    this.result = value;
  }

  getUnmarshallType(): string {
    return this.unmarshallType;
  }

  setUnmarshallType(value: string): void {
    this.unmarshallType = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IUnmarshallAction {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      object: this.object,
      result: this.result,
      unmarshallType: this.unmarshallType,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.object = this.object;
    result.result = [...this.result];
    result.unmarshallType = this.unmarshallType;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): UnmarshallAction {
    return new UnmarshallAction(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IUnmarshallAction>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof UnmarshallAction)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `UnmarshallAction{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): UnmarshallAction {
    const instance = new UnmarshallAction();

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
    instance.object = json.object;
    if (json.result && Array.isArray(json.result)) {
      instance.result = [...json.result];
    }
    instance.unmarshallType = json.unmarshallType;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.object == null) {
      errors.push({
        property: 'object',
        message: 'object is required',
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
    if (this.result) {
      if (Array.from(this.result).length < 1) {
        errors.push({
          property: 'result',
          message: 'result must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    if (this.unmarshallType == null) {
      errors.push({
        property: 'unmarshallType',
        message: 'unmarshallType is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IUnmarshallAction): ValidationResult {
    if (instance instanceof UnmarshallAction) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new UnmarshallAction(instance);
    return temp.validate();
  }
}
