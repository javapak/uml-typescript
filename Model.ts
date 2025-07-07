/**
 * Implementation class for Model
 * 
 * @since UML 2.5
 * @package uml
 * @extends Package
 */
import { Comment } from './Comment';
import { Constraint } from './Constraint';
import { ElementImport } from './ElementImport';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IElementImport } from './IElementImport';
import { IModel } from './IModel';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IPackage } from './IPackage';
import { IPackageImport } from './IPackageImport';
import { IPackageMerge } from './IPackageMerge';
import { IPackageableElement } from './IPackageableElement';
import { IProfileApplication } from './IProfileApplication';
import { IStereotype } from './IStereotype';
import { IStringExpression } from './IStringExpression';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { IType } from './IType';
import { Package } from './Package';
import { PackageImport } from './PackageImport';
import { PackageMerge } from './PackageMerge';
import { PackageableElement } from './PackageableElement';
import { ProfileApplication } from './ProfileApplication';
import { StringExpression } from './StringExpression';
import { TemplateBinding } from './TemplateBinding';
import { TemplateSignature } from './TemplateSignature';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Model extends Package implements IModel {
  /**
   * viewpoint
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public viewpoint?: string = undefined;

  // Inherited from Package
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Package
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from Package
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from Package
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from Package
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from Package
  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  // Inherited from Package
  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  // Inherited from Package
  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

  // Inherited from Package
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Package
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Package
  /**
   * templateBinding
   * 
   * @type TemplateBinding
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite boundElement
   */
  public templateBinding: Set<ITemplateBinding> = new Set();

  // Inherited from Package
  /**
   * ownedTemplateSignature
   * 
   * @type TemplateSignature
   * @multiplicity [0..1]
   * @relationship containment
   * @opposite template
   */
  public ownedTemplateSignature?: ITemplateSignature = undefined;

  // Inherited from Package
  /**
   * URI
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public URI?: string = undefined;

  // Inherited from Package
  /**
   * packageMerge
   * 
   * @type PackageMerge
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite receivingPackage
   */
  public packageMerge: Set<IPackageMerge> = new Set();

  // Inherited from Package
  /**
   * packagedElement
   * 
   * @type PackageableElement
   * @multiplicity [0..*]
   * @relationship containment
   */
  public packagedElement: Set<IPackageableElement> = new Set();

  // Inherited from Package
  /**
   * profileApplication
   * 
   * @type ProfileApplication
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite applyingPackage
   */
  public profileApplication: Set<IProfileApplication> = new Set();

  constructor(init?: Partial<IModel>) {
    super(init);
    this.viewpoint = init?.viewpoint ?? undefined;
  }
  getViewpoint(): string | undefined {
    return this.viewpoint;
  }

  setViewpoint(value: string | undefined): void {
    this.viewpoint = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IModel {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.viewpoint !== undefined && { viewpoint: this.viewpoint }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.viewpoint !== undefined) {
      result.viewpoint = this.viewpoint;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Model {
    return new Model(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IModel>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Model)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Model{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Model {
    const instance = new Model();

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
    if (json.ownedRule && Array.isArray(json.ownedRule)) {
      instance.ownedRule = new Set(json.ownedRule);
    }
    if (json.elementImport && Array.isArray(json.elementImport)) {
      instance.elementImport = new Set(json.elementImport);
    }
    if (json.packageImport && Array.isArray(json.packageImport)) {
      instance.packageImport = new Set(json.packageImport);
    }
    if (json.owningTemplateParameter !== undefined) {
      instance.owningTemplateParameter = json.owningTemplateParameter;
    }
    if (json.templateParameter !== undefined) {
      instance.templateParameter = json.templateParameter;
    }
    if (json.templateBinding && Array.isArray(json.templateBinding)) {
      instance.templateBinding = new Set(json.templateBinding);
    }
    if (json.ownedTemplateSignature !== undefined) {
      instance.ownedTemplateSignature = json.ownedTemplateSignature;
    }
    if (json.URI !== undefined) {
      instance.URI = json.URI;
    }
    if (json.packageMerge && Array.isArray(json.packageMerge)) {
      instance.packageMerge = new Set(json.packageMerge);
    }
    if (json.packagedElement && Array.isArray(json.packagedElement)) {
      instance.packagedElement = new Set(json.packagedElement);
    }
    if (json.profileApplication && Array.isArray(json.profileApplication)) {
      instance.profileApplication = new Set(json.profileApplication);
    }
    if (json.viewpoint !== undefined) {
      instance.viewpoint = json.viewpoint;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.viewpoint !== undefined) {
      if (typeof this.viewpoint !== 'string') {
        errors.push({
          property: 'viewpoint',
          message: 'viewpoint must be a string',
          code: 'TYPE_ERROR',
          value: this.viewpoint
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IModel): ValidationResult {
    if (instance instanceof Model) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Model(instance);
    return temp.validate();
  }
}
