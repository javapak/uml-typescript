/**
 * Implementation class for Manifestation
 * 
 * @since UML 2.5
 * @package uml
 * @extends Abstraction
 */
import { Abstraction } from './Abstraction';
import { Comment } from './Comment';
import { IAbstraction } from './IAbstraction';
import { IComment } from './IComment';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IManifestation } from './IManifestation';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IOpaqueExpression } from './IOpaqueExpression';
import { IPackageableElement } from './IPackageableElement';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { OpaqueExpression } from './OpaqueExpression';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Manifestation extends Abstraction implements IManifestation {
  /**
   * utilizedElement
   * 
   * @type PackageableElement
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public utilizedElement!: IPackageableElement | string;

  // Inherited from Abstraction
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Abstraction
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from Abstraction
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from Abstraction
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from Abstraction
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from Abstraction
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Abstraction
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Abstraction
  /**
   * client
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public client: Set<INamedElement | string> = new Set();

  // Inherited from Abstraction
  /**
   * supplier
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public supplier: Set<INamedElement | string> = new Set();

  // Inherited from Abstraction
  /**
   * mapping
   * 
   * @type OpaqueExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public mapping?: IOpaqueExpression = undefined;

  constructor(init?: Partial<IManifestation>) {
    super(init);
    this.utilizedElement = init?.utilizedElement!;
  }
  getUtilizedElement(): IPackageableElement | string {
    return this.utilizedElement;
  }

  setUtilizedElement(value: IPackageableElement | string): void {
    this.utilizedElement = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IManifestation {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      utilizedElement: this.utilizedElement,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.utilizedElement = this.utilizedElement;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Manifestation {
    return new Manifestation(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IManifestation>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Manifestation)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Manifestation{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Manifestation {
    const instance = new Manifestation();

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
    if (json.mapping !== undefined) {
      instance.mapping = json.mapping;
    }
    instance.utilizedElement = json.utilizedElement;

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.utilizedElement == null) {
      errors.push({
        property: 'utilizedElement',
        message: 'utilizedElement is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IManifestation): ValidationResult {
    if (instance instanceof Manifestation) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Manifestation(instance);
    return temp.validate();
  }
}
