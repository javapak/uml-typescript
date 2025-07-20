/**
 * Implementation class for CollaborationUse
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement
 */
import { ICollaboration } from './ICollaboration';
import { ICollaborationUse } from './ICollaborationUse';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { INamedElement } from './INamedElement';
import { IStringExpression } from './IStringExpression';
import { NamedElement } from './NamedElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class CollaborationUse extends NamedElement implements ICollaborationUse {
  /**
   * roleBinding
   * 
   * @type Dependency
   * @multiplicity [0..*]
   * @relationship containment
   */
  public roleBinding: Set<IDependency> = new Set();

  /**
   * type
   * 
   * @type Collaboration
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public type!: string;

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

  constructor(init?: Partial<ICollaborationUse>) {
    super(init);

    this.roleBinding = init?.roleBinding ? new Set(init.roleBinding) : new Set();
    this.type = init?.type ?? '';
  }
  getRoleBinding(): Set<IDependency> {
    return this.roleBinding;
  }

  setRoleBinding(value: Set<IDependency>): void {
    this.roleBinding = value;
  }

  getType(): string {
    return this.type;
  }

  setType(value: string): void {
    this.type = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ICollaborationUse {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      roleBinding: this.roleBinding,
      type: this.type,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.roleBinding = Array.from(this.roleBinding);
    result.type = this.type;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): CollaborationUse {
    return new CollaborationUse(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ICollaborationUse>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof CollaborationUse)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `CollaborationUse{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): CollaborationUse {
    const instance = new CollaborationUse();

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
    if (json.roleBinding && Array.isArray(json.roleBinding)) {
      instance.roleBinding = new Set(json.roleBinding);
    }
    instance.type = json.type;

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
    if (this.roleBinding) {
    }
    if (this.type == null) {
      errors.push({
        property: 'type',
        message: 'type is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ICollaborationUse): ValidationResult {
    if (instance instanceof CollaborationUse) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new CollaborationUse(instance);
    return temp.validate();
  }
}
