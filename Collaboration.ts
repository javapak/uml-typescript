/**
 * Implementation class for Collaboration
 * 
 * @since UML 2.5
 * @package uml
 * @extends StructuredClassifier, BehavioredClassifier
 */
import { Behavior } from './Behavior';
import { BehavioredClassifier } from './BehavioredClassifier';
import { CollaborationUse } from './CollaborationUse';
import { Comment } from './Comment';
import { Connector } from './Connector';
import { Constraint } from './Constraint';
import { ElementImport } from './ElementImport';
import { Generalization } from './Generalization';
import { IBehavior } from './IBehavior';
import { IBehavioredClassifier } from './IBehavioredClassifier';
import { IClassifier } from './IClassifier';
import { ICollaboration } from './ICollaboration';
import { ICollaborationUse } from './ICollaborationUse';
import { IComment } from './IComment';
import { IConnectableElement } from './IConnectableElement';
import { IConnector } from './IConnector';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IElementImport } from './IElementImport';
import { IFeature } from './IFeature';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { IInterfaceRealization } from './IInterfaceRealization';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IPackage } from './IPackage';
import { IPackageImport } from './IPackageImport';
import { IPackageableElement } from './IPackageableElement';
import { IProperty } from './IProperty';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { IStructuredClassifier } from './IStructuredClassifier';
import { ISubstitution } from './ISubstitution';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { IUseCase } from './IUseCase';
import { InterfaceRealization } from './InterfaceRealization';
import { PackageImport } from './PackageImport';
import { Property } from './Property';
import { StringExpression } from './StringExpression';
import { StructuredClassifier } from './StructuredClassifier';
import { Substitution } from './Substitution';
import { TemplateBinding } from './TemplateBinding';
import { TemplateSignature } from './TemplateSignature';
import { UseCase } from './UseCase';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Collaboration extends StructuredClassifier implements ICollaboration {
  /**
   * collaborationRole
   * 
   * @type ConnectableElement
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public collaborationRole: Set<IConnectableElement | string> = new Set();

  // Inherited from StructuredClassifier
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from StructuredClassifier
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from StructuredClassifier
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from StructuredClassifier
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from StructuredClassifier
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from StructuredClassifier
  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  // Inherited from StructuredClassifier
  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  // Inherited from StructuredClassifier
  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

  // Inherited from StructuredClassifier
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from StructuredClassifier
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from StructuredClassifier
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from StructuredClassifier
  /**
   * templateBinding
   * 
   * @type TemplateBinding
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite boundElement
   */
  public templateBinding: Set<ITemplateBinding> = new Set();

  // Inherited from StructuredClassifier
  /**
   * ownedTemplateSignature
   * 
   * @type TemplateSignature
   * @multiplicity [0..1]
   * @relationship containment
   * @opposite template
   */
  public ownedTemplateSignature?: ITemplateSignature = undefined;

  // Inherited from StructuredClassifier
  /**
   * collaborationUse
   * 
   * @type CollaborationUse
   * @multiplicity [0..*]
   * @relationship containment
   */
  public collaborationUse: Set<ICollaborationUse> = new Set();

  // Inherited from StructuredClassifier
  /**
   * generalization
   * 
   * @type Generalization
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite specific
   */
  public generalization: Set<IGeneralization> = new Set();

  // Inherited from StructuredClassifier
  /**
   * powertypeExtent
   * 
   * @type GeneralizationSet
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite powertype
   */
  public powertypeExtent: Set<IGeneralizationSet | string> = new Set();

  // Inherited from StructuredClassifier
  /**
   * isAbstract
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isAbstract!: boolean;

  // Inherited from StructuredClassifier
  /**
   * isFinalSpecialization
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isFinalSpecialization!: boolean;

  // Inherited from StructuredClassifier
  /**
   * ownedUseCase
   * 
   * @type UseCase
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedUseCase: Set<IUseCase> = new Set();

  // Inherited from StructuredClassifier
  /**
   * useCase
   * 
   * @type UseCase
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite subject
   */
  public useCase: Set<IUseCase | string> = new Set();

  // Inherited from StructuredClassifier
  /**
   * redefinedClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedClassifier: Set<IClassifier | string> = new Set();

  // Inherited from StructuredClassifier
  /**
   * representation
   * 
   * @type CollaborationUse
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public representation?: ICollaborationUse | string = undefined;

  // Inherited from StructuredClassifier
  /**
   * substitution
   * 
   * @type Substitution
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite substitutingClassifier
   */
  public substitution: Set<ISubstitution> = new Set();

  // Inherited from StructuredClassifier
  /**
   * ownedAttribute
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedAttribute: IProperty[] = [];

  // Inherited from StructuredClassifier
  /**
   * ownedConnector
   * 
   * @type Connector
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedConnector: Set<IConnector> = new Set();

  // Inherited from BehavioredClassifier
  /**
   * classifierBehavior
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public classifierBehavior?: IBehavior | string = undefined;

  // Inherited from BehavioredClassifier
  /**
   * interfaceRealization
   * 
   * @type InterfaceRealization
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite implementingClassifier
   */
  public interfaceRealization: Set<IInterfaceRealization> = new Set();

  // Inherited from BehavioredClassifier
  /**
   * ownedBehavior
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedBehavior: Set<IBehavior> = new Set();

  constructor(init?: Partial<ICollaboration>) {
    super(init);
    this.collaborationRole = init?.collaborationRole ?? new Set();
  }
  getCollaborationRole(): Set<IConnectableElement | string> {
    return this.collaborationRole;
  }

  setCollaborationRole(value: Set<IConnectableElement | string>): void {
    this.collaborationRole = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ICollaboration {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      collaborationRole: this.collaborationRole,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.collaborationRole = Array.from(this.collaborationRole);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Collaboration {
    return new Collaboration(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ICollaboration>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Collaboration)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Collaboration{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Collaboration {
    const instance = new Collaboration();

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
    if (json.ownedAttribute && Array.isArray(json.ownedAttribute)) {
      instance.ownedAttribute = [...json.ownedAttribute];
    }
    if (json.ownedConnector && Array.isArray(json.ownedConnector)) {
      instance.ownedConnector = new Set(json.ownedConnector);
    }
    if (json.classifierBehavior !== undefined) {
      instance.classifierBehavior = json.classifierBehavior;
    }
    if (json.interfaceRealization && Array.isArray(json.interfaceRealization)) {
      instance.interfaceRealization = new Set(json.interfaceRealization);
    }
    if (json.ownedBehavior && Array.isArray(json.ownedBehavior)) {
      instance.ownedBehavior = new Set(json.ownedBehavior);
    }
    if (json.collaborationRole && Array.isArray(json.collaborationRole)) {
      instance.collaborationRole = new Set(json.collaborationRole);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.collaborationRole) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ICollaboration): ValidationResult {
    if (instance instanceof Collaboration) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Collaboration(instance);
    return temp.validate();
  }
}
