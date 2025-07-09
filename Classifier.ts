/**
 * Implementation class for Classifier
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Namespace, RedefinableElement, Type, TemplateableElement
 */
import { IClassifier } from './IClassifier';
import { ICollaborationUse } from './ICollaborationUse';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { INamespace } from './INamespace';
import { IPackageImport } from './IPackageImport';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { ISubstitution } from './ISubstitution';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { ITemplateableElement } from './ITemplateableElement';
import { IType } from './IType';
import { IUseCase } from './IUseCase';
import { Namespace } from './Namespace';
import { RedefinableElement } from './RedefinableElement';
import { StringExpression } from './StringExpression';
import { TemplateSignature } from './TemplateSignature';
import { TemplateableElement } from './TemplateableElement';
import { Type } from './Type';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Classifier extends Namespace implements IClassifier {
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


  constructor(init?: Partial<IClassifier>) {
    super(init);

    this.collaborationUse = init?.collaborationUse ? new Set(init.collaborationUse) : new Set();
    this.generalization = init?.generalization ? new Set(init.generalization) : new Set();
    this.powertypeExtent = init?.powertypeExtent ? new Set(init.powertypeExtent) : new Set();
    this.isAbstract = init?.isAbstract ?? false;
    this.isFinalSpecialization = init?.isFinalSpecialization ?? false;
    this.ownedUseCase = init?.ownedUseCase ? new Set(init.ownedUseCase) : new Set();
    this.useCase = init?.useCase ? new Set(init.useCase) : new Set();
    this.redefinedClassifier = init?.redefinedClassifier ? new Set(init.redefinedClassifier) : new Set();
    this.representation = init?.representation;
    this.substitution = init?.substitution ? new Set(init.substitution) : new Set();
  }
  getCollaborationUse(): Set<ICollaborationUse> {
    return this.collaborationUse;
  }

  setCollaborationUse(value: Set<ICollaborationUse>): void {
    this.collaborationUse = value;
  }

  getGeneralization(): Set<IGeneralization> {
    return this.generalization;
  }

  setGeneralization(value: Set<IGeneralization>): void {
    this.generalization = value;
  }

  getPowertypeExtent(): Set<string> {
    return this.powertypeExtent;
  }

  setPowertypeExtent(value: Set<string>): void {
    this.powertypeExtent = value;
  }

  getIsAbstract(): boolean {
    return this.isAbstract;
  }

  setIsAbstract(value: boolean): void {
    this.isAbstract = value;
  }

  getIsFinalSpecialization(): boolean {
    return this.isFinalSpecialization;
  }

  setIsFinalSpecialization(value: boolean): void {
    this.isFinalSpecialization = value;
  }

  getOwnedUseCase(): Set<IUseCase> {
    return this.ownedUseCase;
  }

  setOwnedUseCase(value: Set<IUseCase>): void {
    this.ownedUseCase = value;
  }

  getUseCase(): Set<string> {
    return this.useCase;
  }

  setUseCase(value: Set<string>): void {
    this.useCase = value;
  }

  getRedefinedClassifier(): Set<string> {
    return this.redefinedClassifier;
  }

  setRedefinedClassifier(value: Set<string>): void {
    this.redefinedClassifier = value;
  }

  getRepresentation(): string | undefined {
    return this.representation;
  }

  setRepresentation(value: string | undefined): void {
    this.representation = value;
  }

  getSubstitution(): Set<ISubstitution> {
    return this.substitution;
  }

  setSubstitution(value: Set<ISubstitution>): void {
    this.substitution = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IClassifier {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      collaborationUse: this.collaborationUse,
      generalization: this.generalization,
      powertypeExtent: this.powertypeExtent,
      isAbstract: this.isAbstract,
      isFinalSpecialization: this.isFinalSpecialization,
      ownedUseCase: this.ownedUseCase,
      useCase: this.useCase,
      redefinedClassifier: this.redefinedClassifier,
      ...(this.representation !== undefined && { representation: this.representation }),
      substitution: this.substitution,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.collaborationUse = Array.from(this.collaborationUse);
    result.generalization = Array.from(this.generalization);
    result.powertypeExtent = Array.from(this.powertypeExtent);
    result.isAbstract = this.isAbstract;
    result.isFinalSpecialization = this.isFinalSpecialization;
    result.ownedUseCase = Array.from(this.ownedUseCase);
    result.useCase = Array.from(this.useCase);
    result.redefinedClassifier = Array.from(this.redefinedClassifier);
    if (this.representation !== undefined) {
      result.representation = this.representation;
    }
    result.substitution = Array.from(this.substitution);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Classifier {
    return new Classifier(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IClassifier>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Classifier)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Classifier{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Classifier {
    const instance = new Classifier();

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
    if (this.isLeaf == null) {
      errors.push({
        property: 'isLeaf',
        message: 'isLeaf is required',
        code: 'REQUIRED'
      });
    }
    if (this.isLeaf !== undefined) {
      if (typeof this.isLeaf !== 'boolean') {
        errors.push({
          property: 'isLeaf',
          message: 'isLeaf must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isLeaf
        });
      }
    }
    if (this.templateBinding) {
    }
    if (this.collaborationUse) {
    }
    if (this.generalization) {
    }
    if (this.powertypeExtent) {
    }
    if (this.isAbstract == null) {
      errors.push({
        property: 'isAbstract',
        message: 'isAbstract is required',
        code: 'REQUIRED'
      });
    }
    if (this.isAbstract !== undefined) {
      if (typeof this.isAbstract !== 'boolean') {
        errors.push({
          property: 'isAbstract',
          message: 'isAbstract must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isAbstract
        });
      }
    }
    if (this.isFinalSpecialization == null) {
      errors.push({
        property: 'isFinalSpecialization',
        message: 'isFinalSpecialization is required',
        code: 'REQUIRED'
      });
    }
    if (this.isFinalSpecialization !== undefined) {
      if (typeof this.isFinalSpecialization !== 'boolean') {
        errors.push({
          property: 'isFinalSpecialization',
          message: 'isFinalSpecialization must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isFinalSpecialization
        });
      }
    }
    if (this.ownedUseCase) {
    }
    if (this.useCase) {
    }
    if (this.redefinedClassifier) {
    }
    if (this.substitution) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IClassifier): ValidationResult {
    if (instance instanceof Classifier) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Classifier(instance);
    return temp.validate();
  }
}
