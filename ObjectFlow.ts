/**
 * Implementation class for ObjectFlow
 * 
 * @since UML 2.5
 * @package uml
 * @extends ActivityEdge
 */
import { ActivityEdge } from './ActivityEdge';
import { Comment } from './Comment';
import { IActivity } from './IActivity';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IBehavior } from './IBehavior';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { INamespace } from './INamespace';
import { IObjectFlow } from './IObjectFlow';
import { IRedefinableElement } from './IRedefinableElement';
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
  public selection?: IBehavior | string = undefined;

  /**
   * transformation
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public transformation?: IBehavior | string = undefined;

  // Inherited from ActivityEdge
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from ActivityEdge
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from ActivityEdge
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from ActivityEdge
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from ActivityEdge
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from ActivityEdge
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from ActivityEdge
  /**
   * activity
   * 
   * @type Activity
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite edge
   */
  public activity?: IActivity | string = undefined;

  // Inherited from ActivityEdge
  /**
   * guard
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public guard?: IValueSpecification = undefined;

  // Inherited from ActivityEdge
  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite edge
   */
  public inPartition: Set<IActivityPartition | string> = new Set();

  // Inherited from ActivityEdge
  /**
   * interrupts
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite interruptingEdge
   */
  public interrupts?: IInterruptibleActivityRegion | string = undefined;

  // Inherited from ActivityEdge
  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite edge
   */
  public inStructuredNode?: IStructuredActivityNode | string = undefined;

  // Inherited from ActivityEdge
  /**
   * target
   * 
   * @type ActivityNode
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite incoming
   */
  public target!: IActivityNode | string;

  // Inherited from ActivityEdge
  /**
   * source
   * 
   * @type ActivityNode
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite outgoing
   */
  public source!: IActivityNode | string;

  // Inherited from ActivityEdge
  /**
   * redefinedEdge
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedEdge: Set<IActivityEdge | string> = new Set();

  // Inherited from ActivityEdge
  /**
   * weight
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public weight?: IValueSpecification = undefined;

  constructor(init?: Partial<IObjectFlow>) {
    super(init);
    this.isMulticast = init?.isMulticast!;
    this.isMultireceive = init?.isMultireceive!;
    this.selection = init?.selection ?? undefined;
    this.transformation = init?.transformation ?? undefined;
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

  getSelection(): IBehavior | string | undefined {
    return this.selection;
  }

  setSelection(value: IBehavior | string | undefined): void {
    this.selection = value;
  }

  getTransformation(): IBehavior | string | undefined {
    return this.transformation;
  }

  setTransformation(value: IBehavior | string | undefined): void {
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
