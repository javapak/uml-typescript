/**
 * Implementation class for DirectedRelationship
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Relationship
 */
import { Comment } from './Comment';
import { IComment } from './IComment';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IElement } from './IElement';
import { IRelationship } from './IRelationship';
import { Relationship } from './Relationship';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class DirectedRelationship extends Relationship implements IDirectedRelationship {
  // Inherited from Relationship
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Relationship
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  constructor(init?: Partial<IDirectedRelationship>) {
    super(init);
  }
  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IDirectedRelationship {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };


    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): DirectedRelationship {
    return new DirectedRelationship(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IDirectedRelationship>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof DirectedRelationship)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `DirectedRelationship{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): DirectedRelationship {
    const instance = new DirectedRelationship();

    if (json.eAnnotations && Array.isArray(json.eAnnotations)) {
      instance.eAnnotations = [...json.eAnnotations];
    }
    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IDirectedRelationship): ValidationResult {
    if (instance instanceof DirectedRelationship) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new DirectedRelationship(instance);
    return temp.validate();
  }
}
