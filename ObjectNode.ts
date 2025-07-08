/**
 * Implementation class for ObjectNode
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends ActivityNode, TypedElement
 */
import { ActivityNode } from './ActivityNode';
import { IActivityEdge } from './IActivityEdge';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IBehavior } from './IBehavior';
import { IComment } from './IComment';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { IObjectNode } from './IObjectNode';
import { IState } from './IState';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IType } from './IType';
import { ITypedElement } from './ITypedElement';
import { IValueSpecification } from './IValueSpecification';
import { ObjectNodeOrderingKind } from './ObjectNodeOrderingKind';
import { StringExpression } from './StringExpression';
import { TypedElement } from './TypedElement';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class ObjectNode extends ActivityNode implements IObjectNode {
  /**
   * inState
   * 
   * @type State
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public inState: Set<string> = new Set();

  /**
   * isControlType
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isControlType!: boolean;

  /**
   * ordering
   * 
   * @type ObjectNodeOrderingKind
   * @multiplicity [1..1]
   */
  public ordering!: ObjectNodeOrderingKind;

  /**
   * selection
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public selection?: string;

  /**
   * upperBound
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public upperBound?: IValueSpecification;

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
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: string;


  constructor(init?: Partial<IObjectNode>) {
    super(init);

    this.inState = init?.inState ? new Set(init.inState) : new Set();
    this.isControlType = init?.isControlType ?? false;
    this.ordering = init?.ordering!;
    this.selection = init?.selection;
    this.upperBound = init?.upperBound;
  }
  getInState(): Set<string> {
    return this.inState;
  }

  setInState(value: Set<string>): void {
    this.inState = value;
  }

  getIsControlType(): boolean {
    return this.isControlType;
  }

  setIsControlType(value: boolean): void {
    this.isControlType = value;
  }

  getOrdering(): ObjectNodeOrderingKind {
    return this.ordering;
  }

  setOrdering(value: ObjectNodeOrderingKind): void {
    this.ordering = value;
  }

  getSelection(): string | undefined {
    return this.selection;
  }

  setSelection(value: string | undefined): void {
    this.selection = value;
  }

  getUpperBound(): IValueSpecification | undefined {
    return this.upperBound;
  }

  setUpperBound(value: IValueSpecification | undefined): void {
    this.upperBound = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IObjectNode {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      inState: this.inState,
      isControlType: this.isControlType,
      ordering: this.ordering,
      ...(this.selection !== undefined && { selection: this.selection }),
      ...(this.upperBound !== undefined && { upperBound: this.upperBound }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.inState = Array.from(this.inState);
    result.isControlType = this.isControlType;
    result.ordering = this.ordering;
    if (this.selection !== undefined) {
      result.selection = this.selection;
    }
    if (this.upperBound !== undefined) {
      result.upperBound = this.upperBound;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ObjectNode {
    return new ObjectNode(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IObjectNode>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ObjectNode)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ObjectNode{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ObjectNode {
    const instance = new ObjectNode();

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
    if (json.type !== undefined) {
      instance.type = json.type;
    }
    if (json.inState && Array.isArray(json.inState)) {
      instance.inState = new Set(json.inState);
    }
    instance.isControlType = json.isControlType;
    instance.ordering = json.ordering;
    if (json.selection !== undefined) {
      instance.selection = json.selection;
    }
    if (json.upperBound !== undefined) {
      instance.upperBound = json.upperBound;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.inState) {
    }
    if (this.isControlType == null) {
      errors.push({
        property: 'isControlType',
        message: 'isControlType is required',
        code: 'REQUIRED'
      });
    }
    if (this.isControlType !== undefined) {
      if (typeof this.isControlType !== 'boolean') {
        errors.push({
          property: 'isControlType',
          message: 'isControlType must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isControlType
        });
      }
    }
    if (this.ordering == null) {
      errors.push({
        property: 'ordering',
        message: 'ordering is required',
        code: 'REQUIRED'
      });
    }
    if (this.ordering !== undefined) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IObjectNode): ValidationResult {
    if (instance instanceof ObjectNode) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ObjectNode(instance);
    return temp.validate();
  }
}
