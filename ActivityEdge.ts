/**
 * Implementation class for ActivityEdge
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends RedefinableElement
 */
import { Comment } from './Comment';
import { IActivity } from './IActivity';
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
import { IValueSpecification } from './IValueSpecification';
import { RedefinableElement } from './RedefinableElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class ActivityEdge extends RedefinableElement implements IActivityEdge {
  /**
   * activity
   * 
   * @type Activity
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite edge
   */
  public activity?: IActivity | string = undefined;

  /**
   * guard
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public guard?: IValueSpecification = undefined;

  /**
   * inPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite edge
   */
  public inPartition: Set<IActivityPartition | string> = new Set();

  /**
   * interrupts
   * 
   * @type InterruptibleActivityRegion
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite interruptingEdge
   */
  public interrupts?: IInterruptibleActivityRegion | string = undefined;

  /**
   * inStructuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite edge
   */
  public inStructuredNode?: IStructuredActivityNode | string = undefined;

  /**
   * target
   * 
   * @type ActivityNode
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite incoming
   */
  public target!: IActivityNode | string;

  /**
   * source
   * 
   * @type ActivityNode
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite outgoing
   */
  public source!: IActivityNode | string;

  /**
   * redefinedEdge
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedEdge: Set<IActivityEdge | string> = new Set();

  /**
   * weight
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public weight?: IValueSpecification = undefined;

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

  constructor(init?: Partial<IActivityEdge>) {
    super(init);
    this.activity = init?.activity ?? undefined;
    this.guard = init?.guard ?? undefined;
    this.inPartition = init?.inPartition ?? new Set();
    this.interrupts = init?.interrupts ?? undefined;
    this.inStructuredNode = init?.inStructuredNode ?? undefined;
    this.target = init?.target!;
    this.source = init?.source!;
    this.redefinedEdge = init?.redefinedEdge ?? new Set();
    this.weight = init?.weight ?? undefined;
  }
  getActivity(): IActivity | string | undefined {
    return this.activity;
  }

  setActivity(value: IActivity | string | undefined): void {
    this.activity = value;
  }

  getGuard(): IValueSpecification | undefined {
    return this.guard;
  }

  setGuard(value: IValueSpecification | undefined): void {
    this.guard = value;
  }

  getInPartition(): Set<IActivityPartition | string> {
    return this.inPartition;
  }

  setInPartition(value: Set<IActivityPartition | string>): void {
    this.inPartition = value;
  }

  getInterrupts(): IInterruptibleActivityRegion | string | undefined {
    return this.interrupts;
  }

  setInterrupts(value: IInterruptibleActivityRegion | string | undefined): void {
    this.interrupts = value;
  }

  getInStructuredNode(): IStructuredActivityNode | string | undefined {
    return this.inStructuredNode;
  }

  setInStructuredNode(value: IStructuredActivityNode | string | undefined): void {
    this.inStructuredNode = value;
  }

  getTarget(): IActivityNode | string {
    return this.target;
  }

  setTarget(value: IActivityNode | string): void {
    this.target = value;
  }

  getSource(): IActivityNode | string {
    return this.source;
  }

  setSource(value: IActivityNode | string): void {
    this.source = value;
  }

  getRedefinedEdge(): Set<IActivityEdge | string> {
    return this.redefinedEdge;
  }

  setRedefinedEdge(value: Set<IActivityEdge | string>): void {
    this.redefinedEdge = value;
  }

  getWeight(): IValueSpecification | undefined {
    return this.weight;
  }

  setWeight(value: IValueSpecification | undefined): void {
    this.weight = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IActivityEdge {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.activity !== undefined && { activity: this.activity }),
      ...(this.guard !== undefined && { guard: this.guard }),
      inPartition: this.inPartition,
      ...(this.interrupts !== undefined && { interrupts: this.interrupts }),
      ...(this.inStructuredNode !== undefined && { inStructuredNode: this.inStructuredNode }),
      target: this.target,
      source: this.source,
      redefinedEdge: this.redefinedEdge,
      ...(this.weight !== undefined && { weight: this.weight }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.activity !== undefined) {
      result.activity = this.activity;
    }
    if (this.guard !== undefined) {
      result.guard = this.guard;
    }
    result.inPartition = Array.from(this.inPartition);
    if (this.interrupts !== undefined) {
      result.interrupts = this.interrupts;
    }
    if (this.inStructuredNode !== undefined) {
      result.inStructuredNode = this.inStructuredNode;
    }
    result.target = this.target;
    result.source = this.source;
    result.redefinedEdge = Array.from(this.redefinedEdge);
    if (this.weight !== undefined) {
      result.weight = this.weight;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ActivityEdge {
    return new ActivityEdge(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IActivityEdge>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ActivityEdge)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ActivityEdge{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ActivityEdge {
    const instance = new ActivityEdge();

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

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
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
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IActivityEdge): ValidationResult {
    if (instance instanceof ActivityEdge) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ActivityEdge(instance);
    return temp.validate();
  }
}
