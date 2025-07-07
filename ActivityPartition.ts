/**
 * Implementation class for ActivityPartition
 * 
 * @since UML 2.5
 * @package uml
 * @extends ActivityGroup
 */
import { ActivityGroup } from './ActivityGroup';
import { Comment } from './Comment';
import { IActivity } from './IActivity';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { INamespace } from './INamespace';
import { IStringExpression } from './IStringExpression';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ActivityPartition extends ActivityGroup implements IActivityPartition {
  /**
   * isDimension
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isDimension!: boolean;

  /**
   * isExternal
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isExternal!: boolean;

  /**
   * node
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite inPartition
   */
  public node: Set<IActivityNode | string> = new Set();

  /**
   * represents
   * 
   * @type Element
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public represents?: IElement | string = undefined;

  /**
   * subpartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite superPartition
   */
  public subpartition: Set<IActivityPartition> = new Set();

  /**
   * superPartition
   * 
   * @type ActivityPartition
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite subpartition
   */
  public superPartition?: IActivityPartition | string = undefined;

  /**
   * edge
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite inPartition
   */
  public edge: Set<IActivityEdge | string> = new Set();

  // Inherited from ActivityGroup
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from ActivityGroup
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from ActivityGroup
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from ActivityGroup
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from ActivityGroup
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  constructor(init?: Partial<IActivityPartition>) {
    super(init);
    this.isDimension = init?.isDimension!;
    this.isExternal = init?.isExternal!;
    this.node = init?.node ?? new Set();
    this.represents = init?.represents ?? undefined;
    this.subpartition = init?.subpartition ?? new Set();
    this.superPartition = init?.superPartition ?? undefined;
    this.edge = init?.edge ?? new Set();
  }
  getIsDimension(): boolean {
    return this.isDimension;
  }

  setIsDimension(value: boolean): void {
    this.isDimension = value;
  }

  getIsExternal(): boolean {
    return this.isExternal;
  }

  setIsExternal(value: boolean): void {
    this.isExternal = value;
  }

  getNode(): Set<IActivityNode | string> {
    return this.node;
  }

  setNode(value: Set<IActivityNode | string>): void {
    this.node = value;
  }

  getRepresents(): IElement | string | undefined {
    return this.represents;
  }

  setRepresents(value: IElement | string | undefined): void {
    this.represents = value;
  }

  getSubpartition(): Set<IActivityPartition> {
    return this.subpartition;
  }

  setSubpartition(value: Set<IActivityPartition>): void {
    this.subpartition = value;
  }

  getSuperPartition(): IActivityPartition | string | undefined {
    return this.superPartition;
  }

  setSuperPartition(value: IActivityPartition | string | undefined): void {
    this.superPartition = value;
  }

  getEdge(): Set<IActivityEdge | string> {
    return this.edge;
  }

  setEdge(value: Set<IActivityEdge | string>): void {
    this.edge = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IActivityPartition {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      isDimension: this.isDimension,
      isExternal: this.isExternal,
      node: this.node,
      ...(this.represents !== undefined && { represents: this.represents }),
      subpartition: this.subpartition,
      ...(this.superPartition !== undefined && { superPartition: this.superPartition }),
      edge: this.edge,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.isDimension = this.isDimension;
    result.isExternal = this.isExternal;
    result.node = Array.from(this.node);
    if (this.represents !== undefined) {
      result.represents = this.represents;
    }
    result.subpartition = Array.from(this.subpartition);
    if (this.superPartition !== undefined) {
      result.superPartition = this.superPartition;
    }
    result.edge = Array.from(this.edge);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ActivityPartition {
    return new ActivityPartition(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IActivityPartition>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ActivityPartition)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ActivityPartition{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ActivityPartition {
    const instance = new ActivityPartition();

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
    instance.isDimension = json.isDimension;
    instance.isExternal = json.isExternal;
    if (json.node && Array.isArray(json.node)) {
      instance.node = new Set(json.node);
    }
    if (json.represents !== undefined) {
      instance.represents = json.represents;
    }
    if (json.subpartition && Array.isArray(json.subpartition)) {
      instance.subpartition = new Set(json.subpartition);
    }
    if (json.superPartition !== undefined) {
      instance.superPartition = json.superPartition;
    }
    if (json.edge && Array.isArray(json.edge)) {
      instance.edge = new Set(json.edge);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.isDimension == null) {
      errors.push({
        property: 'isDimension',
        message: 'isDimension is required',
        code: 'REQUIRED'
      });
    }
    if (this.isDimension !== undefined) {
      if (typeof this.isDimension !== 'boolean') {
        errors.push({
          property: 'isDimension',
          message: 'isDimension must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isDimension
        });
      }
    }
    if (this.isExternal == null) {
      errors.push({
        property: 'isExternal',
        message: 'isExternal is required',
        code: 'REQUIRED'
      });
    }
    if (this.isExternal !== undefined) {
      if (typeof this.isExternal !== 'boolean') {
        errors.push({
          property: 'isExternal',
          message: 'isExternal must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isExternal
        });
      }
    }
    if (this.node) {
    }
    if (this.subpartition) {
    }
    if (this.edge) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IActivityPartition): ValidationResult {
    if (instance instanceof ActivityPartition) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ActivityPartition(instance);
    return temp.validate();
  }
}
