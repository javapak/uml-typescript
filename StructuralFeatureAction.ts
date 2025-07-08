/**
 * Implementation class for StructuralFeatureAction
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
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
import { IStringExpression } from './IStringExpression';
import { IStructuralFeature } from './IStructuralFeature';
import { IStructuralFeatureAction } from './IStructuralFeatureAction';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { InputPin } from './InputPin';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class StructuralFeatureAction extends Action implements IStructuralFeatureAction {
  /**
   * object
   * 
   * @type InputPin
   * @multiplicity [1..1]
   * @relationship containment
   */
  public object!: IInputPin;

  /**
   * structuralFeature
   * 
   * @type StructuralFeature
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public structuralFeature!: string;

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


  constructor(init?: Partial<IStructuralFeatureAction>) {
    super(init);

    this.object = init?.object!;
    this.structuralFeature = init?.structuralFeature ?? '';
  }
  getObject(): IInputPin {
    return this.object;
  }

  setObject(value: IInputPin): void {
    this.object = value;
  }

  getStructuralFeature(): string {
    return this.structuralFeature;
  }

  setStructuralFeature(value: string): void {
    this.structuralFeature = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IStructuralFeatureAction {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      object: this.object,
      structuralFeature: this.structuralFeature,
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
    result.structuralFeature = this.structuralFeature;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): StructuralFeatureAction {
    return new StructuralFeatureAction(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IStructuralFeatureAction>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof StructuralFeatureAction)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `StructuralFeatureAction{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): StructuralFeatureAction {
    const instance = new StructuralFeatureAction();

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
    instance.structuralFeature = json.structuralFeature;

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
    if (this.structuralFeature == null) {
      errors.push({
        property: 'structuralFeature',
        message: 'structuralFeature is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IStructuralFeatureAction): ValidationResult {
    if (instance instanceof StructuralFeatureAction) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new StructuralFeatureAction(instance);
    return temp.validate();
  }
}
