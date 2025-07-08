/**
 * Implementation class for Artifact
 * 
 * @since UML 2.5
 * @package uml
 * @extends Classifier, DeployedArtifact
 */
import { Classifier } from './Classifier';
import { DeployedArtifact } from './DeployedArtifact';
import { IArtifact } from './IArtifact';
import { IClassifier } from './IClassifier';
import { ICollaborationUse } from './ICollaborationUse';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDeployedArtifact } from './IDeployedArtifact';
import { IElementImport } from './IElementImport';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { IManifestation } from './IManifestation';
import { IOperation } from './IOperation';
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

export class Artifact extends Classifier implements IArtifact {
  /**
   * fileName
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public fileName?: string;

  /**
   * manifestation
   * 
   * @type Manifestation
   * @multiplicity [0..*]
   * @relationship containment
   */
  public manifestation: Set<IManifestation> = new Set();

  /**
   * nestedArtifact
   * 
   * @type Artifact
   * @multiplicity [0..*]
   * @relationship containment
   */
  public nestedArtifact: Set<IArtifact> = new Set();

  /**
   * ownedAttribute
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedAttribute: IProperty[] = [];

  /**
   * ownedOperation
   * 
   * @type Operation
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedOperation: IOperation[] = [];

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

  constructor(init?: Partial<IArtifact>) {
    super(init);

    this.fileName = init?.fileName;
    this.manifestation = init?.manifestation ? new Set(init.manifestation) : new Set();
    this.nestedArtifact = init?.nestedArtifact ? new Set(init.nestedArtifact) : new Set();
    this.ownedAttribute = init?.ownedAttribute ? [...init.ownedAttribute] : [];
    this.ownedOperation = init?.ownedOperation ? [...init.ownedOperation] : [];
  }
  getFileName(): string | undefined {
    return this.fileName;
  }

  setFileName(value: string | undefined): void {
    this.fileName = value;
  }

  getManifestation(): Set<IManifestation> {
    return this.manifestation;
  }

  setManifestation(value: Set<IManifestation>): void {
    this.manifestation = value;
  }

  getNestedArtifact(): Set<IArtifact> {
    return this.nestedArtifact;
  }

  setNestedArtifact(value: Set<IArtifact>): void {
    this.nestedArtifact = value;
  }

  getOwnedAttribute(): IProperty[] {
    return this.ownedAttribute;
  }

  setOwnedAttribute(value: IProperty[]): void {
    this.ownedAttribute = value;
  }

  getOwnedOperation(): IOperation[] {
    return this.ownedOperation;
  }

  setOwnedOperation(value: IOperation[]): void {
    this.ownedOperation = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IArtifact {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.fileName !== undefined && { fileName: this.fileName }),
      manifestation: this.manifestation,
      nestedArtifact: this.nestedArtifact,
      ownedAttribute: this.ownedAttribute,
      ownedOperation: this.ownedOperation,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.fileName !== undefined) {
      result.fileName = this.fileName;
    }
    result.manifestation = Array.from(this.manifestation);
    result.nestedArtifact = Array.from(this.nestedArtifact);
    result.ownedAttribute = [...this.ownedAttribute];
    result.ownedOperation = [...this.ownedOperation];

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Artifact {
    return new Artifact(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IArtifact>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Artifact)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Artifact{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Artifact {
    const instance = new Artifact();

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
    if (json.fileName !== undefined) {
      instance.fileName = json.fileName;
    }
    if (json.manifestation && Array.isArray(json.manifestation)) {
      instance.manifestation = new Set(json.manifestation);
    }
    if (json.nestedArtifact && Array.isArray(json.nestedArtifact)) {
      instance.nestedArtifact = new Set(json.nestedArtifact);
    }
    if (json.ownedAttribute && Array.isArray(json.ownedAttribute)) {
      instance.ownedAttribute = [...json.ownedAttribute];
    }
    if (json.ownedOperation && Array.isArray(json.ownedOperation)) {
      instance.ownedOperation = [...json.ownedOperation];
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.fileName !== undefined) {
      if (typeof this.fileName !== 'string') {
        errors.push({
          property: 'fileName',
          message: 'fileName must be a string',
          code: 'TYPE_ERROR',
          value: this.fileName
        });
      }
    }
    if (this.manifestation) {
    }
    if (this.nestedArtifact) {
    }
    if (this.ownedAttribute) {
    }
    if (this.ownedOperation) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IArtifact): ValidationResult {
    if (instance instanceof Artifact) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Artifact(instance);
    return temp.validate();
  }
}
