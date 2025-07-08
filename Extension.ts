/**
 * Implementation class for Extension
 * 
 * @since UML 2.5
 * @package uml
 * @extends Association
 */
import { Association } from './Association';
import { IAssociation } from './IAssociation';
import { IClassifier } from './IClassifier';
import { ICollaborationUse } from './ICollaborationUse';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { IExtension } from './IExtension';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { IPackageImport } from './IPackageImport';
import { IProperty } from './IProperty';
import { IStringExpression } from './IStringExpression';
import { ISubstitution } from './ISubstitution';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { IUseCase } from './IUseCase';
import { StringExpression } from './StringExpression';
import { TemplateSignature } from './TemplateSignature';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Extension extends Association implements IExtension {
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
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

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
   * collaborationUse
   * 
   * @type CollaborationUse
   * @multiplicity [0..*]
   * @relationship containment
   */
  public collaborationUse: Set<ICollaborationUse> = new Set();

  /**
   * generalization
   * 
   * @type Generalization
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite specific
   */
  public generalization: Set<IGeneralization> = new Set();

  /**
   * powertypeExtent
   * 
   * @type GeneralizationSet
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite powertype
   */
  public powertypeExtent: Set<string> = new Set();

  /**
   * isAbstract
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isAbstract!: boolean;

  /**
   * isFinalSpecialization
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isFinalSpecialization!: boolean;

  /**
   * ownedUseCase
   * 
   * @type UseCase
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedUseCase: Set<IUseCase> = new Set();

  /**
   * useCase
   * 
   * @type UseCase
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite subject
   */
  public useCase: Set<string> = new Set();

  /**
   * redefinedClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedClassifier: Set<string> = new Set();

  /**
   * representation
   * 
   * @type CollaborationUse
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public representation?: string;

  /**
   * substitution
   * 
   * @type Substitution
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite substitutingClassifier
   */
  public substitution: Set<ISubstitution> = new Set();

  /**
   * isDerived
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isDerived!: boolean;

  /**
   * memberEnd
   * 
   * @type Property
   * @multiplicity [2..*]
   * @relationship cross-reference
   * @opposite association
   */
  public memberEnd: string[] = [];

  /**
   * ownedEnd
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite owningAssociation
   */
  public ownedEnd: IProperty[] = [];

  /**
   * navigableOwnedEnd
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public navigableOwnedEnd: Set<string> = new Set();


  constructor(init?: Partial<IExtension>) {
    super(init);

  }
  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IExtension {
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
  clone(): Extension {
    return new Extension(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IExtension>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Extension)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Extension{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Extension {
    const instance = new Extension();

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
    instance.isLeaf = json.isLeaf;
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
    if (json.collaborationUse && Array.isArray(json.collaborationUse)) {
      instance.collaborationUse = new Set(json.collaborationUse);
    }
    if (json.generalization && Array.isArray(json.generalization)) {
      instance.generalization = new Set(json.generalization);
    }
    if (json.powertypeExtent && Array.isArray(json.powertypeExtent)) {
      instance.powertypeExtent = new Set(json.powertypeExtent);
    }
    instance.isAbstract = json.isAbstract;
    instance.isFinalSpecialization = json.isFinalSpecialization;
    if (json.ownedUseCase && Array.isArray(json.ownedUseCase)) {
      instance.ownedUseCase = new Set(json.ownedUseCase);
    }
    if (json.useCase && Array.isArray(json.useCase)) {
      instance.useCase = new Set(json.useCase);
    }
    if (json.redefinedClassifier && Array.isArray(json.redefinedClassifier)) {
      instance.redefinedClassifier = new Set(json.redefinedClassifier);
    }
    if (json.representation !== undefined) {
      instance.representation = json.representation;
    }
    if (json.substitution && Array.isArray(json.substitution)) {
      instance.substitution = new Set(json.substitution);
    }
    instance.isDerived = json.isDerived;
    if (json.memberEnd && Array.isArray(json.memberEnd)) {
      instance.memberEnd = [...json.memberEnd];
    }
    if (json.ownedEnd && Array.isArray(json.ownedEnd)) {
      instance.ownedEnd = [...json.ownedEnd];
    }
    if (json.navigableOwnedEnd && Array.isArray(json.navigableOwnedEnd)) {
      instance.navigableOwnedEnd = new Set(json.navigableOwnedEnd);
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

  static validate(instance: IExtension): ValidationResult {
    if (instance instanceof Extension) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Extension(instance);
    return temp.validate();
  }
}
