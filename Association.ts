/**
 * Implementation class for Association
 * 
 * @since UML 2.5
 * @package uml
 * @extends Classifier, Relationship
 */
import { Classifier } from './Classifier';
import { CollaborationUse } from './CollaborationUse';
import { Comment } from './Comment';
import { Constraint } from './Constraint';
import { ElementImport } from './ElementImport';
import { Generalization } from './Generalization';
import { IAssociation } from './IAssociation';
import { IClassifier } from './IClassifier';
import { ICollaborationUse } from './ICollaborationUse';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IElementImport } from './IElementImport';
import { IFeature } from './IFeature';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IPackage } from './IPackage';
import { IPackageImport } from './IPackageImport';
import { IPackageableElement } from './IPackageableElement';
import { IProperty } from './IProperty';
import { IRedefinableElement } from './IRedefinableElement';
import { IRelationship } from './IRelationship';
import { IStringExpression } from './IStringExpression';
import { ISubstitution } from './ISubstitution';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { IType } from './IType';
import { IUseCase } from './IUseCase';
import { PackageImport } from './PackageImport';
import { Property } from './Property';
import { Relationship } from './Relationship';
import { StringExpression } from './StringExpression';
import { Substitution } from './Substitution';
import { TemplateBinding } from './TemplateBinding';
import { TemplateSignature } from './TemplateSignature';
import { UseCase } from './UseCase';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Association extends Classifier implements IAssociation {
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
  public memberEnd: IProperty | string[] = [];

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
  public navigableOwnedEnd: Set<IProperty | string> = new Set();

  // Inherited from Classifier
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Classifier
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from Classifier
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from Classifier
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from Classifier
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from Classifier
  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  // Inherited from Classifier
  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  // Inherited from Classifier
  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

  // Inherited from Classifier
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from Classifier
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Classifier
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Classifier
  /**
   * templateBinding
   * 
   * @type TemplateBinding
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite boundElement
   */
  public templateBinding: Set<ITemplateBinding> = new Set();

  // Inherited from Classifier
  /**
   * ownedTemplateSignature
   * 
   * @type TemplateSignature
   * @multiplicity [0..1]
   * @relationship containment
   * @opposite template
   */
  public ownedTemplateSignature?: ITemplateSignature = undefined;

  // Inherited from Classifier
  /**
   * collaborationUse
   * 
   * @type CollaborationUse
   * @multiplicity [0..*]
   * @relationship containment
   */
  public collaborationUse: Set<ICollaborationUse> = new Set();

  // Inherited from Classifier
  /**
   * generalization
   * 
   * @type Generalization
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite specific
   */
  public generalization: Set<IGeneralization> = new Set();

  // Inherited from Classifier
  /**
   * powertypeExtent
   * 
   * @type GeneralizationSet
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite powertype
   */
  public powertypeExtent: Set<IGeneralizationSet | string> = new Set();

  // Inherited from Classifier
  /**
   * isAbstract
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isAbstract!: boolean;

  // Inherited from Classifier
  /**
   * isFinalSpecialization
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isFinalSpecialization!: boolean;

  // Inherited from Classifier
  /**
   * ownedUseCase
   * 
   * @type UseCase
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedUseCase: Set<IUseCase> = new Set();

  // Inherited from Classifier
  /**
   * useCase
   * 
   * @type UseCase
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite subject
   */
  public useCase: Set<IUseCase | string> = new Set();

  // Inherited from Classifier
  /**
   * redefinedClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedClassifier: Set<IClassifier | string> = new Set();

  // Inherited from Classifier
  /**
   * representation
   * 
   * @type CollaborationUse
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public representation?: ICollaborationUse | string = undefined;

  // Inherited from Classifier
  /**
   * substitution
   * 
   * @type Substitution
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite substitutingClassifier
   */
  public substitution: Set<ISubstitution> = new Set();

  constructor(init?: Partial<IAssociation>) {
    super(init);
    this.isDerived = init?.isDerived!;
    this.memberEnd = init?.memberEnd ?? [];
    this.ownedEnd = init?.ownedEnd ?? [];
    this.navigableOwnedEnd = init?.navigableOwnedEnd ?? new Set();
  }
  getIsDerived(): boolean {
    return this.isDerived;
  }

  setIsDerived(value: boolean): void {
    this.isDerived = value;
  }

  getMemberEnd(): IProperty | string[] {
    return this.memberEnd;
  }

  setMemberEnd(value: IProperty | string[]): void {
    this.memberEnd = value;
  }

  getOwnedEnd(): IProperty[] {
    return this.ownedEnd;
  }

  setOwnedEnd(value: IProperty[]): void {
    this.ownedEnd = value;
  }

  getNavigableOwnedEnd(): Set<IProperty | string> {
    return this.navigableOwnedEnd;
  }

  setNavigableOwnedEnd(value: Set<IProperty | string>): void {
    this.navigableOwnedEnd = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IAssociation {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      isDerived: this.isDerived,
      memberEnd: this.memberEnd,
      ownedEnd: this.ownedEnd,
      navigableOwnedEnd: this.navigableOwnedEnd,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.isDerived = this.isDerived;
    result.memberEnd = [...this.memberEnd];
    result.ownedEnd = [...this.ownedEnd];
    result.navigableOwnedEnd = Array.from(this.navigableOwnedEnd);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Association {
    return new Association(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IAssociation>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Association)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Association{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Association {
    const instance = new Association();

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
    if (this.isDerived == null) {
      errors.push({
        property: 'isDerived',
        message: 'isDerived is required',
        code: 'REQUIRED'
      });
    }
    if (this.isDerived !== undefined) {
      if (typeof this.isDerived !== 'boolean') {
        errors.push({
          property: 'isDerived',
          message: 'isDerived must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isDerived
        });
      }
    }
    if (this.memberEnd == null) {
      errors.push({
        property: 'memberEnd',
        message: 'memberEnd is required',
        code: 'REQUIRED'
      });
    }
    if (this.memberEnd) {
      if (Array.from(this.memberEnd).length < 2) {
        errors.push({
          property: 'memberEnd',
          message: 'memberEnd must have at least 2 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    if (this.ownedEnd) {
    }
    if (this.navigableOwnedEnd) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IAssociation): ValidationResult {
    if (instance instanceof Association) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Association(instance);
    return temp.validate();
  }
}
