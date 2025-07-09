/**
 * Implementation class for InterruptibleActivityRegion
 * 
 * @since UML 2.5
 * @package uml
 * @extends ActivityGroup
 */
import { ActivityGroup } from './ActivityGroup';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IComment } from './IComment';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { IStringExpression } from './IStringExpression';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class InterruptibleActivityRegion extends ActivityGroup implements IInterruptibleActivityRegion {
  /**
   * interruptingEdge
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite interrupts
   */
  public interruptingEdge: Set<string> = new Set();

  /**
   * node
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite inInterruptibleRegion
   */
  public node: Set<string> = new Set();

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

  constructor(init?: Partial<IInterruptibleActivityRegion>) {
    super(init);

    this.interruptingEdge = init?.interruptingEdge ? new Set(init.interruptingEdge) : new Set();
    this.node = init?.node ? new Set(init.node) : new Set();
  }
  getInterruptingEdge(): Set<string> {
    return this.interruptingEdge;
  }

  setInterruptingEdge(value: Set<string>): void {
    this.interruptingEdge = value;
  }

  getNode(): Set<string> {
    return this.node;
  }

  setNode(value: Set<string>): void {
    this.node = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IInterruptibleActivityRegion {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      interruptingEdge: this.interruptingEdge,
      node: this.node,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.interruptingEdge = Array.from(this.interruptingEdge);
    result.node = Array.from(this.node);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): InterruptibleActivityRegion {
    return new InterruptibleActivityRegion(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IInterruptibleActivityRegion>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof InterruptibleActivityRegion)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `InterruptibleActivityRegion{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): InterruptibleActivityRegion {
    const instance = new InterruptibleActivityRegion();

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
    if (json.interruptingEdge && Array.isArray(json.interruptingEdge)) {
      instance.interruptingEdge = new Set(json.interruptingEdge);
    }
    if (json.node && Array.isArray(json.node)) {
      instance.node = new Set(json.node);
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
    if (this.interruptingEdge) {
    }
    if (this.node) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IInterruptibleActivityRegion): ValidationResult {
    if (instance instanceof InterruptibleActivityRegion) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new InterruptibleActivityRegion(instance);
    return temp.validate();
  }
}
