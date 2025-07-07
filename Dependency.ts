/**
 * Implementation class for Dependency
 * 
 * @since UML 2.5
 * @package uml
 * @extends PackageableElement, DirectedRelationship
 */
import { Comment } from './Comment';
import { DirectedRelationship } from './DirectedRelationship';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IElement } from './IElement';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IPackageableElement } from './IPackageableElement';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { PackageableElement } from './PackageableElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Dependency extends PackageableElement implements IDependency {
  /**
   * client
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public client: Set<INamedElement | string> = new Set();

  /**
   * supplier
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public supplier: Set<INamedElement | string> = new Set();

  // Inherited from PackageableElement
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from PackageableElement
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from PackageableElement
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from PackageableElement
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from PackageableElement
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from PackageableElement
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from PackageableElement
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  constructor(init?: Partial<IDependency>) {
    super(init);
    this.client = init?.client ?? new Set();
    this.supplier = init?.supplier ?? new Set();
  }
  getClient(): Set<INamedElement | string> {
    return this.client;
  }

  setClient(value: Set<INamedElement | string>): void {
    this.client = value;
  }

  getSupplier(): Set<INamedElement | string> {
    return this.supplier;
  }

  setSupplier(value: Set<INamedElement | string>): void {
    this.supplier = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IDependency {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      client: this.client,
      supplier: this.supplier,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.client = Array.from(this.client);
    result.supplier = Array.from(this.supplier);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Dependency {
    return new Dependency(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IDependency>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Dependency)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Dependency{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Dependency {
    const instance = new Dependency();

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
    if (json.owningTemplateParameter !== undefined) {
      instance.owningTemplateParameter = json.owningTemplateParameter;
    }
    if (json.templateParameter !== undefined) {
      instance.templateParameter = json.templateParameter;
    }
    if (json.client && Array.isArray(json.client)) {
      instance.client = new Set(json.client);
    }
    if (json.supplier && Array.isArray(json.supplier)) {
      instance.supplier = new Set(json.supplier);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.client == null) {
      errors.push({
        property: 'client',
        message: 'client is required',
        code: 'REQUIRED'
      });
    }
    if (this.client) {
      if (Array.from(this.client).length < 1) {
        errors.push({
          property: 'client',
          message: 'client must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    if (this.supplier == null) {
      errors.push({
        property: 'supplier',
        message: 'supplier is required',
        code: 'REQUIRED'
      });
    }
    if (this.supplier) {
      if (Array.from(this.supplier).length < 1) {
        errors.push({
          property: 'supplier',
          message: 'supplier must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IDependency): ValidationResult {
    if (instance instanceof Dependency) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Dependency(instance);
    return temp.validate();
  }
}
