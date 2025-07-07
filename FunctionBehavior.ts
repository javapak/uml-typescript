/**
 * Implementation class for FunctionBehavior
 * 
 * @since UML 2.5
 * @package uml
 * @extends OpaqueBehavior
 */
import { Behavior } from './Behavior';
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
import { IFunctionBehavior } from './IFunctionBehavior';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { IInterfaceRealization } from './IInterfaceRealization';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IOpaqueBehavior } from './IOpaqueBehavior';
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
import { OpaqueBehavior } from './OpaqueBehavior';
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

export class FunctionBehavior extends OpaqueBehavior implements IFunctionBehavior {
  // Inherited from OpaqueBehavior
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from OpaqueBehavior
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from OpaqueBehavior
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from OpaqueBehavior
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from OpaqueBehavior
  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from OpaqueBehavior
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from OpaqueBehavior
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from OpaqueBehavior
  /**
   * templateBinding
   * 
   * @type TemplateBinding
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite boundElement
   */
  public templateBinding: Set<ITemplateBinding> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * ownedTemplateSignature
   * 
   * @type TemplateSignature
   * @multiplicity [0..1]
   * @relationship containment
   * @opposite template
   */
  public ownedTemplateSignature?: ITemplateSignature = undefined;

  // Inherited from OpaqueBehavior
  /**
   * collaborationUse
   * 
   * @type CollaborationUse
   * @multiplicity [0..*]
   * @relationship containment
   */
  public collaborationUse: Set<ICollaborationUse> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * generalization
   * 
   * @type Generalization
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite specific
   */
  public generalization: Set<IGeneralization> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * powertypeExtent
   * 
   * @type GeneralizationSet
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite powertype
   */
  public powertypeExtent: Set<IGeneralizationSet | string> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * isAbstract
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isAbstract!: boolean;

  // Inherited from OpaqueBehavior
  /**
   * isFinalSpecialization
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isFinalSpecialization!: boolean;

  // Inherited from OpaqueBehavior
  /**
   * ownedUseCase
   * 
   * @type UseCase
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedUseCase: Set<IUseCase> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * useCase
   * 
   * @type UseCase
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite subject
   */
  public useCase: Set<IUseCase | string> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * redefinedClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedClassifier: Set<IClassifier | string> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * representation
   * 
   * @type CollaborationUse
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public representation?: ICollaborationUse | string = undefined;

  // Inherited from OpaqueBehavior
  /**
   * substitution
   * 
   * @type Substitution
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite substitutingClassifier
   */
  public substitution: Set<ISubstitution> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * ownedAttribute
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedAttribute: IProperty[] = [];

  // Inherited from OpaqueBehavior
  /**
   * ownedConnector
   * 
   * @type Connector
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedConnector: Set<IConnector> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * classifierBehavior
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public classifierBehavior?: IBehavior | string = undefined;

  // Inherited from OpaqueBehavior
  /**
   * interfaceRealization
   * 
   * @type InterfaceRealization
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite implementingClassifier
   */
  public interfaceRealization: Set<IInterfaceRealization> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * ownedBehavior
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedBehavior: Set<IBehavior> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * ownedOperation
   * 
   * @type Operation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite class
   */
  public ownedOperation: IOperation[] = [];

  // Inherited from OpaqueBehavior
  /**
   * isActive
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isActive!: boolean;

  // Inherited from OpaqueBehavior
  /**
   * nestedClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship containment
   */
  public nestedClassifier: IClassifier[] = [];

  // Inherited from OpaqueBehavior
  /**
   * ownedReception
   * 
   * @type Reception
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedReception: Set<IReception> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * specification
   * 
   * @type BehavioralFeature
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite method
   */
  public specification?: IBehavioralFeature | string = undefined;

  // Inherited from OpaqueBehavior
  /**
   * isReentrant
   * 
   * @type Boolean
   * @multiplicity [0..1]
   */
  public isReentrant?: boolean = undefined;

  // Inherited from OpaqueBehavior
  /**
   * ownedParameter
   * 
   * @type Parameter
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedParameter: IParameter[] = [];

  // Inherited from OpaqueBehavior
  /**
   * ownedParameterSet
   * 
   * @type ParameterSet
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedParameterSet: Set<IParameterSet> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * postcondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public postcondition: Set<IConstraint | string> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * precondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public precondition: Set<IConstraint | string> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * redefinedBehavior
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedBehavior: Set<IBehavior | string> = new Set();

  // Inherited from OpaqueBehavior
  /**
   * body
   * 
   * @type String
   * @multiplicity [0..*]
   */
  public body: string[] = [];

  // Inherited from OpaqueBehavior
  /**
   * language
   * 
   * @type String
   * @multiplicity [0..*]
   */
  public language: string[] = [];

  constructor(init?: Partial<IFunctionBehavior>) {
    super(init);
  }
  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IFunctionBehavior {
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
  clone(): FunctionBehavior {
    return new FunctionBehavior(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IFunctionBehavior>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof FunctionBehavior)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `FunctionBehavior{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): FunctionBehavior {
    const instance = new FunctionBehavior();

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
    if (json.body && Array.isArray(json.body)) {
      instance.body = [...json.body];
    }
    if (json.language && Array.isArray(json.language)) {
      instance.language = [...json.language];
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

  static validate(instance: IFunctionBehavior): ValidationResult {
    if (instance instanceof FunctionBehavior) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new FunctionBehavior(instance);
    return temp.validate();
  }
}
