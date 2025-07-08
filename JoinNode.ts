/**
 * Implementation class for JoinNode
 * 
 * @since UML 2.5
 * @package uml
 * @extends ControlNode
 */
import { ControlNode } from './ControlNode';
import { IActivityEdge } from './IActivityEdge';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IComment } from './IComment';
import { IControlNode } from './IControlNode';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { IJoinNode } from './IJoinNode';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IValueSpecification } from './IValueSpecification';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class JoinNode extends ControlNode implements IJoinNode {
  /**
   * isCombineDuplicate
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isCombineDuplicate!: boolean;

  /**
   * joinSpec
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public joinSpec?: IValueSpecification;

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


  constructor(init?: Partial<IJoinNode>) {
    super(init);

    this.isCombineDuplicate = init?.isCombineDuplicate ?? false;
    this.joinSpec = init?.joinSpec;
  }
  getIsCombineDuplicate(): boolean {
    return this.isCombineDuplicate;
  }

  setIsCombineDuplicate(value: boolean): void {
    this.isCombineDuplicate = value;
  }

  getJoinSpec(): IValueSpecification | undefined {
    return this.joinSpec;
  }

  setJoinSpec(value: IValueSpecification | undefined): void {
    this.joinSpec = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IJoinNode {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      isCombineDuplicate: this.isCombineDuplicate,
      ...(this.joinSpec !== undefined && { joinSpec: this.joinSpec }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.isCombineDuplicate = this.isCombineDuplicate;
    if (this.joinSpec !== undefined) {
      result.joinSpec = this.joinSpec;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): JoinNode {
    return new JoinNode(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IJoinNode>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof JoinNode)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `JoinNode{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): JoinNode {
    const instance = new JoinNode();

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
    instance.isCombineDuplicate = json.isCombineDuplicate;
    if (json.joinSpec !== undefined) {
      instance.joinSpec = json.joinSpec;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.isCombineDuplicate == null) {
      errors.push({
        property: 'isCombineDuplicate',
        message: 'isCombineDuplicate is required',
        code: 'REQUIRED'
      });
    }
    if (this.isCombineDuplicate !== undefined) {
      if (typeof this.isCombineDuplicate !== 'boolean') {
        errors.push({
          property: 'isCombineDuplicate',
          message: 'isCombineDuplicate must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isCombineDuplicate
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IJoinNode): ValidationResult {
    if (instance instanceof JoinNode) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new JoinNode(instance);
    return temp.validate();
  }
}
