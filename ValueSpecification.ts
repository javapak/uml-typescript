/**
 * Implementation class for ValueSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends PackageableElement, TypedElement
 */
import { Comment } from './Comment';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { INamespace } from './INamespace';
import { IPackageableElement } from './IPackageableElement';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IType } from './IType';
import { ITypedElement } from './ITypedElement';
import { IValueSpecification } from './IValueSpecification';
import { PackageableElement } from './PackageableElement';
import { StringExpression } from './StringExpression';
import { TypedElement } from './TypedElement';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ValueSpecification extends PackageableElement implements IValueSpecification {
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

  // Inherited from TypedElement
  /**
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: IType | string = undefined;

  constructor(init?: Partial<IValueSpecification>) {
    super(init);
  }
  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IValueSpecification {
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
  clone(): ValueSpecification {
    return new ValueSpecification(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IValueSpecification>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ValueSpecification)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ValueSpecification{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ValueSpecification {
    const instance = new ValueSpecification();

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
    if (json.type !== undefined) {
      instance.type = json.type;
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

  static validate(instance: IValueSpecification): ValidationResult {
    if (instance instanceof ValueSpecification) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ValueSpecification(instance);
    return temp.validate();
  }
}
