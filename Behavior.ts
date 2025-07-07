/**
 * Implementation class for Behavior
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Class
 */
import { Class } from './Class';
import { Classifier } from './Classifier';
import { CollaborationUse } from './CollaborationUse';
import { Comment } from './Comment';
import { Connector } from './Connector';
import { Constraint } from './Constraint';
import { ElementImport } from './ElementImport';
import { Generalization } from './Generalization';
import { IBehavior } from './IBehavior';
import { IBehavioralFeature } from './IBehavioralFeature';
import { IBehavioredClassifier } from './IBehavioredClassifier';
import { IClass } from './IClass';
import { IClassifier } from './IClassifier';
import { ICollaborationUse } from './ICollaborationUse';
import { IComment } from './IComment';
import { IConnectableElement } from './IConnectableElement';
import { IConnector } from './IConnector';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IElementImport } from './IElementImport';
import { IExtension } from './IExtension';
import { IFeature } from './IFeature';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { IInterfaceRealization } from './IInterfaceRealization';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IOperation } from './IOperation';
import { IPackage } from './IPackage';
import { IPackageImport } from './IPackageImport';
import { IPackageableElement } from './IPackageableElement';
import { IParameter } from './IParameter';
import { IParameterSet } from './IParameterSet';
import { IPort } from './IPort';
import { IProperty } from './IProperty';
import { IReception } from './IReception';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { ISubstitution } from './ISubstitution';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { IUseCase } from './IUseCase';
import { InterfaceRealization } from './InterfaceRealization';
import { Operation } from './Operation';
import { PackageImport } from './PackageImport';
import { Parameter } from './Parameter';
import { ParameterSet } from './ParameterSet';
import { Property } from './Property';
import { Reception } from './Reception';
import { StringExpression } from './StringExpression';
import { Substitution } from './Substitution';
import { TemplateBinding } from './TemplateBinding';
import { TemplateSignature } from './TemplateSignature';
import { UseCase } from './UseCase';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Behavior extends Class implements IBehavior {
  /**
   * specification
   * 
   * @type BehavioralFeature
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite method
   */
  public specification?: IBehavioralFeature | string = undefined;

  /**
   * isReentrant
   * 
   * @type Boolean
   * @multiplicity [0..1]
   */
  public isReentrant?: boolean = undefined;

  /**
   * ownedParameter
   * 
   * @type Parameter
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedParameter: IParameter[] = [];

  /**
   * ownedParameterSet
   * 
   * @type ParameterSet
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedParameterSet: Set<IParameterSet> = new Set();

  /**
   * postcondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public postcondition: Set<IConstraint | string> = new Set();

  /**
   * precondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public precondition: Set<IConstraint | string> = new Set();

  /**
   * redefinedBehavior
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedBehavior: Set<IBehavior | string> = new Set();

  // Inherited from Class
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Class
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from Class
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from Class
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from Class
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from Class
  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  // Inherited from Class
  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  // Inherited from Class
  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

  // Inherited from Class
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from Class
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Class
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Class
  /**
   * templateBinding
   * 
   * @type TemplateBinding
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite boundElement
   */
  public templateBinding: Set<ITemplateBinding> = new Set();

  // Inherited from Class
  /**
   * ownedTemplateSignature
   * 
   * @type TemplateSignature
   * @multiplicity [0..1]
   * @relationship containment
   * @opposite template
   */
  public ownedTemplateSignature?: ITemplateSignature = undefined;

  // Inherited from Class
  /**
   * collaborationUse
   * 
   * @type CollaborationUse
   * @multiplicity [0..*]
   * @relationship containment
   */
  public collaborationUse: Set<ICollaborationUse> = new Set();

  // Inherited from Class
  /**
   * generalization
   * 
   * @type Generalization
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite specific
   */
  public generalization: Set<IGeneralization> = new Set();

  // Inherited from Class
  /**
   * powertypeExtent
   * 
   * @type GeneralizationSet
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite powertype
   */
  public powertypeExtent: Set<IGeneralizationSet | string> = new Set();

  // Inherited from Class
  /**
   * isAbstract
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isAbstract!: boolean;

  // Inherited from Class
  /**
   * isFinalSpecialization
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isFinalSpecialization!: boolean;

  // Inherited from Class
  /**
   * ownedUseCase
   * 
   * @type UseCase
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedUseCase: Set<IUseCase> = new Set();

  // Inherited from Class
  /**
   * useCase
   * 
   * @type UseCase
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite subject
   */
  public useCase: Set<IUseCase | string> = new Set();

  // Inherited from Class
  /**
   * redefinedClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedClassifier: Set<IClassifier | string> = new Set();

  // Inherited from Class
  /**
   * representation
   * 
   * @type CollaborationUse
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public representation?: ICollaborationUse | string = undefined;

  // Inherited from Class
  /**
   * substitution
   * 
   * @type Substitution
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite substitutingClassifier
   */
  public substitution: Set<ISubstitution> = new Set();

  // Inherited from Class
  /**
   * ownedAttribute
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedAttribute: IProperty[] = [];

  // Inherited from Class
  /**
   * ownedConnector
   * 
   * @type Connector
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedConnector: Set<IConnector> = new Set();

  // Inherited from Class
  /**
   * classifierBehavior
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public classifierBehavior?: IBehavior | string = undefined;

  // Inherited from Class
  /**
   * interfaceRealization
   * 
   * @type InterfaceRealization
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite implementingClassifier
   */
  public interfaceRealization: Set<IInterfaceRealization> = new Set();

  // Inherited from Class
  /**
   * ownedBehavior
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedBehavior: Set<IBehavior> = new Set();

  // Inherited from Class
  /**
   * ownedOperation
   * 
   * @type Operation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite class
   */
  public ownedOperation: IOperation[] = [];

  // Inherited from Class
  /**
   * isActive
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isActive!: boolean;

  // Inherited from Class
  /**
   * nestedClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship containment
   */
  public nestedClassifier: IClassifier[] = [];

  // Inherited from Class
  /**
   * ownedReception
   * 
   * @type Reception
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedReception: Set<IReception> = new Set();

  constructor(init?: Partial<IBehavior>) {
    super(init);
    this.specification = init?.specification ?? undefined;
    this.isReentrant = init?.isReentrant ?? true;
    this.ownedParameter = init?.ownedParameter ?? [];
    this.ownedParameterSet = init?.ownedParameterSet ?? new Set();
    this.postcondition = init?.postcondition ?? new Set();
    this.precondition = init?.precondition ?? new Set();
    this.redefinedBehavior = init?.redefinedBehavior ?? new Set();
  }
  getSpecification(): IBehavioralFeature | string | undefined {
    return this.specification;
  }

  setSpecification(value: IBehavioralFeature | string | undefined): void {
    this.specification = value;
  }

  getIsReentrant(): boolean | undefined {
    return this.isReentrant;
  }

  setIsReentrant(value: boolean | undefined): void {
    this.isReentrant = value;
  }

  getOwnedParameter(): IParameter[] {
    return this.ownedParameter;
  }

  setOwnedParameter(value: IParameter[]): void {
    this.ownedParameter = value;
  }

  getOwnedParameterSet(): Set<IParameterSet> {
    return this.ownedParameterSet;
  }

  setOwnedParameterSet(value: Set<IParameterSet>): void {
    this.ownedParameterSet = value;
  }

  getPostcondition(): Set<IConstraint | string> {
    return this.postcondition;
  }

  setPostcondition(value: Set<IConstraint | string>): void {
    this.postcondition = value;
  }

  getPrecondition(): Set<IConstraint | string> {
    return this.precondition;
  }

  setPrecondition(value: Set<IConstraint | string>): void {
    this.precondition = value;
  }

  getRedefinedBehavior(): Set<IBehavior | string> {
    return this.redefinedBehavior;
  }

  setRedefinedBehavior(value: Set<IBehavior | string>): void {
    this.redefinedBehavior = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IBehavior {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.specification !== undefined && { specification: this.specification }),
      ...(this.isReentrant !== undefined && { isReentrant: this.isReentrant }),
      ownedParameter: this.ownedParameter,
      ownedParameterSet: this.ownedParameterSet,
      postcondition: this.postcondition,
      precondition: this.precondition,
      redefinedBehavior: this.redefinedBehavior,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.specification !== undefined) {
      result.specification = this.specification;
    }
    if (this.isReentrant !== undefined) {
      result.isReentrant = this.isReentrant;
    }
    result.ownedParameter = [...this.ownedParameter];
    result.ownedParameterSet = Array.from(this.ownedParameterSet);
    result.postcondition = Array.from(this.postcondition);
    result.precondition = Array.from(this.precondition);
    result.redefinedBehavior = Array.from(this.redefinedBehavior);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Behavior {
    return new Behavior(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IBehavior>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Behavior)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Behavior{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Behavior {
    const instance = new Behavior();

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
    if (json.ownedOperation && Array.isArray(json.ownedOperation)) {
      instance.ownedOperation = [...json.ownedOperation];
    }
    instance.isActive = json.isActive;
    if (json.nestedClassifier && Array.isArray(json.nestedClassifier)) {
      instance.nestedClassifier = [...json.nestedClassifier];
    }
    if (json.ownedReception && Array.isArray(json.ownedReception)) {
      instance.ownedReception = new Set(json.ownedReception);
    }
    if (json.specification !== undefined) {
      instance.specification = json.specification;
    }
    if (json.isReentrant !== undefined) {
      instance.isReentrant = json.isReentrant;
    }
    if (json.ownedParameter && Array.isArray(json.ownedParameter)) {
      instance.ownedParameter = [...json.ownedParameter];
    }
    if (json.ownedParameterSet && Array.isArray(json.ownedParameterSet)) {
      instance.ownedParameterSet = new Set(json.ownedParameterSet);
    }
    if (json.postcondition && Array.isArray(json.postcondition)) {
      instance.postcondition = new Set(json.postcondition);
    }
    if (json.precondition && Array.isArray(json.precondition)) {
      instance.precondition = new Set(json.precondition);
    }
    if (json.redefinedBehavior && Array.isArray(json.redefinedBehavior)) {
      instance.redefinedBehavior = new Set(json.redefinedBehavior);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.isReentrant !== undefined) {
      if (typeof this.isReentrant !== 'boolean') {
        errors.push({
          property: 'isReentrant',
          message: 'isReentrant must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isReentrant
        });
      }
    }
    if (this.ownedParameter) {
    }
    if (this.ownedParameterSet) {
    }
    if (this.postcondition) {
    }
    if (this.precondition) {
    }
    if (this.redefinedBehavior) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IBehavior): ValidationResult {
    if (instance instanceof Behavior) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Behavior(instance);
    return temp.validate();
  }
}
