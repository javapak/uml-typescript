/**
 * Implementation class for Model
 * 
 * @since UML 2.5
 * @package uml
 * @extends Package
 */
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { IModel } from './IModel';
import { IPackage } from './IPackage';
import { IPackageImport } from './IPackageImport';
import { IPackageMerge } from './IPackageMerge';
import { IPackageableElement } from './IPackageableElement';
import { IProfileApplication } from './IProfileApplication';
import { IStringExpression } from './IStringExpression';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { Package } from './Package';
import { StringExpression } from './StringExpression';
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
  public viewpoint?: string;

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
  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: string;

  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: string;

  /**
   * templateBinding
   * 
   * @type TemplateBinding
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite boundElement
   */
  public templateBinding: Set<ITemplateBinding> = new Set();

  /**
   * ownedTemplateSignature
   * 
   * @type TemplateSignature
   * @multiplicity [0..1]
   * @relationship containment
   * @opposite template
   */
  public ownedTemplateSignature?: ITemplateSignature;

  /**
   * URI
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public URI?: string;

  /**
   * packageMerge
   * 
   * @type PackageMerge
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite receivingPackage
   */
  public packageMerge: Set<IPackageMerge> = new Set();

  /**
   * packagedElement
   * 
   * @type PackageableElement
   * @multiplicity [0..*]
   * @relationship containment
   */
  public packagedElement: Set<IPackageableElement> = new Set();

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

    this.viewpoint = init?.viewpoint;
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
    if (this.ownedRule) {
    }
    if (this.elementImport) {
    }
    if (this.packageImport) {
    }
    if (this.templateBinding) {
    }
    if (this.URI !== undefined) {
      if (typeof this.URI !== 'string') {
        errors.push({
          property: 'URI',
          message: 'URI must be a string',
          code: 'TYPE_ERROR',
          value: this.URI
        });
      }
    }
    if (this.packageMerge) {
    }
    if (this.packagedElement) {
    }
    if (this.profileApplication) {
    }
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
