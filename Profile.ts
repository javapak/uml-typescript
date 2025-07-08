/**
 * Implementation class for Profile
 * 
 * @since UML 2.5
 * @package uml
 * @extends Package
 */
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { IPackage } from './IPackage';
import { IPackageImport } from './IPackageImport';
import { IPackageMerge } from './IPackageMerge';
import { IPackageableElement } from './IPackageableElement';
import { IProfile } from './IProfile';
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

export class Profile extends Package implements IProfile {
  /**
   * metaclassReference
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public metaclassReference: Set<string> = new Set();

  /**
   * metamodelReference
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public metamodelReference: Set<string> = new Set();

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


  constructor(init?: Partial<IProfile>) {
    super(init);

    this.metaclassReference = init?.metaclassReference ? new Set(init.metaclassReference) : new Set();
    this.metamodelReference = init?.metamodelReference ? new Set(init.metamodelReference) : new Set();
  }
  getMetaclassReference(): Set<string> {
    return this.metaclassReference;
  }

  setMetaclassReference(value: Set<string>): void {
    this.metaclassReference = value;
  }

  getMetamodelReference(): Set<string> {
    return this.metamodelReference;
  }

  setMetamodelReference(value: Set<string>): void {
    this.metamodelReference = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IProfile {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      metaclassReference: this.metaclassReference,
      metamodelReference: this.metamodelReference,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.metaclassReference = Array.from(this.metaclassReference);
    result.metamodelReference = Array.from(this.metamodelReference);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Profile {
    return new Profile(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IProfile>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Profile)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Profile{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Profile {
    const instance = new Profile();

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
    if (json.metaclassReference && Array.isArray(json.metaclassReference)) {
      instance.metaclassReference = new Set(json.metaclassReference);
    }
    if (json.metamodelReference && Array.isArray(json.metamodelReference)) {
      instance.metamodelReference = new Set(json.metamodelReference);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.metaclassReference) {
    }
    if (this.metamodelReference) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IProfile): ValidationResult {
    if (instance instanceof Profile) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Profile(instance);
    return temp.validate();
  }
}
