/**
 * Implementation class for ExpansionNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends ObjectNode
 */
import { IActivityEdge } from './IActivityEdge';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IBehavior } from './IBehavior';
import { IComment } from './IComment';
import { IExpansionNode } from './IExpansionNode';
import { IExpansionRegion } from './IExpansionRegion';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { IObjectNode } from './IObjectNode';
import { IState } from './IState';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';
import { ObjectNode } from './ObjectNode';
import { ObjectNodeOrderingKind } from './ObjectNodeOrderingKind';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class ExpansionNode extends ObjectNode implements IExpansionNode {
  /**
   * regionAsInput
   * 
   * @type ExpansionRegion
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite inputElement
   */
  public regionAsInput?: string;

  /**
   * regionAsOutput
   * 
   * @type ExpansionRegion
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite outputElement
   */
  public regionAsOutput?: string;

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
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: string;

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
  public ordering: ObjectNodeOrderingKind = ObjectNodeOrderingKind.UNORDERED;
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


  constructor(init?: Partial<IExpansionNode>) {
    super(init);

    this.regionAsInput = init?.regionAsInput;
    this.regionAsOutput = init?.regionAsOutput;
  }
  getRegionAsInput(): string | undefined {
    return this.regionAsInput;
  }

  setRegionAsInput(value: string | undefined): void {
    this.regionAsInput = value;
  }

  getRegionAsOutput(): string | undefined {
    return this.regionAsOutput;
  }

  setRegionAsOutput(value: string | undefined): void {
    this.regionAsOutput = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IExpansionNode {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.regionAsInput !== undefined && { regionAsInput: this.regionAsInput }),
      ...(this.regionAsOutput !== undefined && { regionAsOutput: this.regionAsOutput }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.regionAsInput !== undefined) {
      result.regionAsInput = this.regionAsInput;
    }
    if (this.regionAsOutput !== undefined) {
      result.regionAsOutput = this.regionAsOutput;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ExpansionNode {
    return new ExpansionNode(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IExpansionNode>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ExpansionNode)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ExpansionNode{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ExpansionNode {
    const instance = new ExpansionNode();

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
    if (json.regionAsInput !== undefined) {
      instance.regionAsInput = json.regionAsInput;
    }
    if (json.regionAsOutput !== undefined) {
      instance.regionAsOutput = json.regionAsOutput;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.ownedComment) {
    }
    if (this.name !== undefined) {
      if (typeof this.name !== 'string') {
        errors.push({
          property: 'name',
          message: 'name must be a string',
          code: 'TYPE_ERROR',
          value: this.name
        });
      }
    }
    if (this.visibility !== undefined) {
    }
    if (this.isLeaf == null) {
      errors.push({
        property: 'isLeaf',
        message: 'isLeaf is required',
        code: 'REQUIRED'
      });
    }
    if (this.isLeaf !== undefined) {
      if (typeof this.isLeaf !== 'boolean') {
        errors.push({
          property: 'isLeaf',
          message: 'isLeaf must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isLeaf
        });
      }
    }
    if (this.inInterruptibleRegion) {
    }
    if (this.incoming) {
    }
    if (this.outgoing) {
    }
    if (this.redefinedNode) {
    }
    if (this.inPartition) {
    }
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

  static validate(instance: IExpansionNode): ValidationResult {
    if (instance instanceof ExpansionNode) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ExpansionNode(instance);
    return temp.validate();
  }
}
