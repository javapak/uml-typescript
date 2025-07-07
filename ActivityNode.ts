/**
 * Implementation class for ActivityNode
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends RedefinableElement, ActivityContent
 */
import { ActivityContent } from './ActivityContent';
import { Comment } from './Comment';
import { IActivity } from './IActivity';
import { IActivityContent } from './IActivityContent';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { INamespace } from './INamespace';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { RedefinableElement } from './RedefinableElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ActivityNode extends RedefinableElement implements IActivityNode {
  /**
   * inInterruptibleRegion
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inInterruptibleRegion: Set<IInterruptibleActivityRegion | string> = new Set();

  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite node
   */
  public inStructuredNode?: IStructuredActivityNode | string = undefined;

  /**
   * incoming
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite target
   */
  public incoming: Set<IActivityEdge | string> = new Set();

  /**
   * outgoing
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite source
   */
  public outgoing: Set<IActivityEdge | string> = new Set();

  /**
   * redefinedNode
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedNode: Set<IActivityNode | string> = new Set();

  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite node
   */
  public inPartition: Set<IActivityPartition | string> = new Set();

  // Inherited from RedefinableElement
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from RedefinableElement
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from RedefinableElement
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from RedefinableElement
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from RedefinableElement
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from RedefinableElement
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  constructor(init?: Partial<IActivityNode>) {
    super(init);
    this.inInterruptibleRegion = init?.inInterruptibleRegion ?? new Set();
    this.inStructuredNode = init?.inStructuredNode ?? undefined;
    this.incoming = init?.incoming ?? new Set();
    this.outgoing = init?.outgoing ?? new Set();
    this.redefinedNode = init?.redefinedNode ?? new Set();
    this.inPartition = init?.inPartition ?? new Set();
  }
  getInInterruptibleRegion(): Set<IInterruptibleActivityRegion | string> {
    return this.inInterruptibleRegion;
  }

  setInInterruptibleRegion(value: Set<IInterruptibleActivityRegion | string>): void {
    this.inInterruptibleRegion = value;
  }

  getInStructuredNode(): IStructuredActivityNode | string | undefined {
    return this.inStructuredNode;
  }

  setInStructuredNode(value: IStructuredActivityNode | string | undefined): void {
    this.inStructuredNode = value;
  }

  getIncoming(): Set<IActivityEdge | string> {
    return this.incoming;
  }

  setIncoming(value: Set<IActivityEdge | string>): void {
    this.incoming = value;
  }

  getOutgoing(): Set<IActivityEdge | string> {
    return this.outgoing;
  }

  setOutgoing(value: Set<IActivityEdge | string>): void {
    this.outgoing = value;
  }

  getRedefinedNode(): Set<IActivityNode | string> {
    return this.redefinedNode;
  }

  setRedefinedNode(value: Set<IActivityNode | string>): void {
    this.redefinedNode = value;
  }

  getInPartition(): Set<IActivityPartition | string> {
    return this.inPartition;
  }

  setInPartition(value: Set<IActivityPartition | string>): void {
    this.inPartition = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IActivityNode {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      inInterruptibleRegion: this.inInterruptibleRegion,
      ...(this.inStructuredNode !== undefined && { inStructuredNode: this.inStructuredNode }),
      incoming: this.incoming,
      outgoing: this.outgoing,
      redefinedNode: this.redefinedNode,
      inPartition: this.inPartition,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.inInterruptibleRegion = Array.from(this.inInterruptibleRegion);
    if (this.inStructuredNode !== undefined) {
      result.inStructuredNode = this.inStructuredNode;
    }
    result.incoming = Array.from(this.incoming);
    result.outgoing = Array.from(this.outgoing);
    result.redefinedNode = Array.from(this.redefinedNode);
    result.inPartition = Array.from(this.inPartition);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ActivityNode {
    return new ActivityNode(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IActivityNode>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ActivityNode)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ActivityNode{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ActivityNode {
    const instance = new ActivityNode();

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

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
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
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IActivityNode): ValidationResult {
    if (instance instanceof ActivityNode) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ActivityNode(instance);
    return temp.validate();
  }
}
