/**
 * Implementation class for Package
 * 
 * @since UML 2.5
 * @package uml
 * @extends Namespace, PackageableElement, TemplateableElement
 */
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { INamespace } from './INamespace';
import { IPackage } from './IPackage';
import { IPackageImport } from './IPackageImport';
import { IPackageMerge } from './IPackageMerge';
import { IPackageableElement } from './IPackageableElement';
import { IProfileApplication } from './IProfileApplication';
import { IStringExpression } from './IStringExpression';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { ITemplateableElement } from './ITemplateableElement';
import { Namespace } from './Namespace';
import { PackageableElement } from './PackageableElement';
import { StringExpression } from './StringExpression';
import { TemplateSignature } from './TemplateSignature';
import { TemplateableElement } from './TemplateableElement';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Package extends Namespace implements IPackage {
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
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

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


  constructor(init?: Partial<IPackage>) {
    super(init);

    this.URI = init?.URI;
    this.packageMerge = init?.packageMerge ? new Set(init.packageMerge) : new Set();
    this.packagedElement = init?.packagedElement ? new Set(init.packagedElement) : new Set();
    this.profileApplication = init?.profileApplication ? new Set(init.profileApplication) : new Set();
  }
  getURI(): string | undefined {
    return this.URI;
  }

  setURI(value: string | undefined): void {
    this.URI = value;
  }

  getPackageMerge(): Set<IPackageMerge> {
    return this.packageMerge;
  }

  setPackageMerge(value: Set<IPackageMerge>): void {
    this.packageMerge = value;
  }

  getPackagedElement(): Set<IPackageableElement> {
    return this.packagedElement;
  }

  setPackagedElement(value: Set<IPackageableElement>): void {
    this.packagedElement = value;
  }

  getProfileApplication(): Set<IProfileApplication> {
    return this.profileApplication;
  }

  setProfileApplication(value: Set<IProfileApplication>): void {
    this.profileApplication = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IPackage {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.URI !== undefined && { URI: this.URI }),
      packageMerge: this.packageMerge,
      packagedElement: this.packagedElement,
      profileApplication: this.profileApplication,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.URI !== undefined) {
      result.URI = this.URI;
    }
    result.packageMerge = Array.from(this.packageMerge);
    result.packagedElement = Array.from(this.packagedElement);
    result.profileApplication = Array.from(this.profileApplication);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Package {
    return new Package(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IPackage>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Package)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Package{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Package {
    const instance = new Package();

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

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
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
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IPackage): ValidationResult {
    if (instance instanceof Package) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Package(instance);
    return temp.validate();
  }
}
