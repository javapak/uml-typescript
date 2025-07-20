/**
 * Implementation class for ObjectFlow
 * 
 * @since UML 2.5
 * @package uml
 * @extends ActivityEdge
 */
import { ActivityEdge } from './ActivityEdge';
import { IActivity } from './IActivity';
import { IActivityEdge } from './IActivityEdge';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IBehavior } from './IBehavior';
import { IComment } from './IComment';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { IObjectFlow } from './IObjectFlow';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IValueSpecification } from './IValueSpecification';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class ObjectFlow extends ActivityEdge implements IObjectFlow {
  /**
   * isMulticast
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isMulticast!: boolean;

  /**
   * isMultireceive
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isMultireceive!: boolean;

  /**
   * selection
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public selection?: string;

  /**
   * transformation
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public transformation?: string;

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
   * activity
   * 
   * @type Activity
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite edge
   */
  public activity?: string;

  /**
   * guard
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public guard?: IValueSpecification;

  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite edge
   */
  public inPartition: Set<string> = new Set();

  /**
   * interrupts
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite interruptingEdge
   */
  public interrupts?: string;

  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite edge
   */
  public inStructuredNode?: string;

  /**
   * target
   * 
   * @type ActivityNode
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite incoming
   */
  public target!: string;

  /**
   * source
   * 
   * @type ActivityNode
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite outgoing
   */
  public source!: string;

  /**
   * redefinedEdge
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedEdge: Set<string> = new Set();

  /**
   * weight
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public weight?: IValueSpecification;


  constructor(init?: Partial<IObjectFlow>) {
    super(init);

    this.isMulticast = init?.isMulticast ?? false;
    this.isMultireceive = init?.isMultireceive ?? false;
    this.selection = init?.selection;
    this.transformation = init?.transformation;
  }
  getIsMulticast(): boolean {
    return this.isMulticast;
  }

  setIsMulticast(value: boolean): void {
    this.isMulticast = value;
  }

  getIsMultireceive(): boolean {
    return this.isMultireceive;
  }

  setIsMultireceive(value: boolean): void {
    this.isMultireceive = value;
  }

  getSelection(): string | undefined {
    return this.selection;
  }

  setSelection(value: string | undefined): void {
    this.selection = value;
  }

  getTransformation(): string | undefined {
    return this.transformation;
  }

  setTransformation(value: string | undefined): void {
    this.transformation = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IObjectFlow {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      isMulticast: this.isMulticast,
      isMultireceive: this.isMultireceive,
      ...(this.selection !== undefined && { selection: this.selection }),
      ...(this.transformation !== undefined && { transformation: this.transformation }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.isMulticast = this.isMulticast;
    result.isMultireceive = this.isMultireceive;
    if (this.selection !== undefined) {
      result.selection = this.selection;
    }
    if (this.transformation !== undefined) {
      result.transformation = this.transformation;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ObjectFlow {
    return new ObjectFlow(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IObjectFlow>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ObjectFlow)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ObjectFlow{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ObjectFlow {
    const instance = new ObjectFlow();

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
    if (json.activity !== undefined) {
      instance.activity = json.activity;
    }
    if (json.guard !== undefined) {
      instance.guard = json.guard;
    }
    if (json.inPartition && Array.isArray(json.inPartition)) {
      instance.inPartition = new Set(json.inPartition);
    }
    if (json.interrupts !== undefined) {
      instance.interrupts = json.interrupts;
    }
    if (json.inStructuredNode !== undefined) {
      instance.inStructuredNode = json.inStructuredNode;
    }
    instance.target = json.target;
    instance.source = json.source;
    if (json.redefinedEdge && Array.isArray(json.redefinedEdge)) {
      instance.redefinedEdge = new Set(json.redefinedEdge);
    }
    if (json.weight !== undefined) {
      instance.weight = json.weight;
    }
    instance.isMulticast = json.isMulticast;
    instance.isMultireceive = json.isMultireceive;
    if (json.selection !== undefined) {
      instance.selection = json.selection;
    }
    if (json.transformation !== undefined) {
      instance.transformation = json.transformation;
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
    if (this.inPartition) {
    }
    if (this.target == null) {
      errors.push({
        property: 'target',
        message: 'target is required',
        code: 'REQUIRED'
      });
    }
    if (this.source == null) {
      errors.push({
        property: 'source',
        message: 'source is required',
        code: 'REQUIRED'
      });
    }
    if (this.redefinedEdge) {
    }
    if (this.isMulticast == null) {
      errors.push({
        property: 'isMulticast',
        message: 'isMulticast is required',
        code: 'REQUIRED'
      });
    }
    if (this.isMulticast !== undefined) {
      if (typeof this.isMulticast !== 'boolean') {
        errors.push({
          property: 'isMulticast',
          message: 'isMulticast must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isMulticast
        });
      }
    }
    if (this.isMultireceive == null) {
      errors.push({
        property: 'isMultireceive',
        message: 'isMultireceive is required',
        code: 'REQUIRED'
      });
    }
    if (this.isMultireceive !== undefined) {
      if (typeof this.isMultireceive !== 'boolean') {
        errors.push({
          property: 'isMultireceive',
          message: 'isMultireceive must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isMultireceive
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IObjectFlow): ValidationResult {
    if (instance instanceof ObjectFlow) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ObjectFlow(instance);
    return temp.validate();
  }
}
