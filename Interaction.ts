/**
 * Implementation class for Interaction
 * 
 * @since UML 2.5
 * @package uml
 * @extends Behavior, InteractionFragment
 */
import { Behavior } from './Behavior';
import { IAction } from './IAction';
import { IBehavior } from './IBehavior';
import { IBehavioralFeature } from './IBehavioralFeature';
import { IClassifier } from './IClassifier';
import { ICollaborationUse } from './ICollaborationUse';
import { IComment } from './IComment';
import { IConnector } from './IConnector';
import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { IGate } from './IGate';
import { IGeneralOrdering } from './IGeneralOrdering';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { IInteraction } from './IInteraction';
import { IInteractionFragment } from './IInteractionFragment';
import { IInteractionOperand } from './IInteractionOperand';
import { IInterfaceRealization } from './IInterfaceRealization';
import { ILifeline } from './ILifeline';
import { IMessage } from './IMessage';
import { IOperation } from './IOperation';
import { IPackageImport } from './IPackageImport';
import { IParameter } from './IParameter';
import { IParameterSet } from './IParameterSet';
import { IProperty } from './IProperty';
import { IReception } from './IReception';
import { IStringExpression } from './IStringExpression';
import { ISubstitution } from './ISubstitution';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { IUseCase } from './IUseCase';
import { InteractionFragment } from './InteractionFragment';
import { StringExpression } from './StringExpression';
import { TemplateSignature } from './TemplateSignature';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Interaction extends Behavior implements IInteraction {
  /**
   * lifeline
   * 
   * @type Lifeline
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite interaction
   */
  public lifeline: Set<ILifeline> = new Set();

  /**
   * fragment
   * 
   * @type InteractionFragment
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite enclosingInteraction
   */
  public fragment: IInteractionFragment[] = [];

  /**
   * action
   * 
   * @type Action
   * @multiplicity [0..*]
   * @relationship containment
   */
  public action: Set<IAction> = new Set();

  /**
   * formalGate
   * 
   * @type Gate
   * @multiplicity [0..*]
   * @relationship containment
   */
  public formalGate: Set<IGate> = new Set();

  /**
   * message
   * 
   * @type Message
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite interaction
   */
  public message: Set<IMessage> = new Set();

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
   * ownedAttribute
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedAttribute: IProperty[] = [];

  /**
   * ownedConnector
   * 
   * @type Connector
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedConnector: Set<IConnector> = new Set();

  /**
   * classifierBehavior
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public classifierBehavior?: string;

  /**
   * interfaceRealization
   * 
   * @type InterfaceRealization
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite implementingClassifier
   */
  public interfaceRealization: Set<IInterfaceRealization> = new Set();

  /**
   * ownedBehavior
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedBehavior: Set<IBehavior> = new Set();

  /**
   * ownedOperation
   * 
   * @type Operation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite class
   */
  public ownedOperation: IOperation[] = [];

  /**
   * isActive
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isActive!: boolean;

  /**
   * nestedClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship containment
   */
  public nestedClassifier: IClassifier[] = [];

  /**
   * ownedReception
   * 
   * @type Reception
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedReception: Set<IReception> = new Set();

  /**
   * specification
   * 
   * @type BehavioralFeature
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite method
   */
  public specification?: string;

  /**
   * isReentrant
   * 
   * @type Boolean
   * @multiplicity [0..1]
   */
  public isReentrant?: boolean;

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
  public postcondition: Set<string> = new Set();

  /**
   * precondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public precondition: Set<string> = new Set();

  /**
   * redefinedBehavior
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedBehavior: Set<string> = new Set();

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
   * covered
   * 
   * @type Lifeline
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite coveredBy
   */
  public covered: Set<string> = new Set();

  /**
   * enclosingOperand
   * 
   * @type InteractionOperand
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite fragment
   */
  public enclosingOperand?: string;

  /**
   * enclosingInteraction
   * 
   * @type Interaction
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite fragment
   */
  public enclosingInteraction?: string;

  /**
   * generalOrdering
   * 
   * @type GeneralOrdering
   * @multiplicity [0..*]
   * @relationship containment
   */
  public generalOrdering: Set<IGeneralOrdering> = new Set();


  constructor(init?: Partial<IInteraction>) {
    super(init);

    this.lifeline = init?.lifeline ? new Set(init.lifeline) : new Set();
    this.fragment = init?.fragment ? [...init.fragment] : [];
    this.action = init?.action ? new Set(init.action) : new Set();
    this.formalGate = init?.formalGate ? new Set(init.formalGate) : new Set();
    this.message = init?.message ? new Set(init.message) : new Set();
  }
  getLifeline(): Set<ILifeline> {
    return this.lifeline;
  }

  setLifeline(value: Set<ILifeline>): void {
    this.lifeline = value;
  }

  getFragment(): IInteractionFragment[] {
    return this.fragment;
  }

  setFragment(value: IInteractionFragment[]): void {
    this.fragment = value;
  }

  getAction(): Set<IAction> {
    return this.action;
  }

  setAction(value: Set<IAction>): void {
    this.action = value;
  }

  getFormalGate(): Set<IGate> {
    return this.formalGate;
  }

  setFormalGate(value: Set<IGate>): void {
    this.formalGate = value;
  }

  getMessage(): Set<IMessage> {
    return this.message;
  }

  setMessage(value: Set<IMessage>): void {
    this.message = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IInteraction {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      lifeline: this.lifeline,
      fragment: this.fragment,
      action: this.action,
      formalGate: this.formalGate,
      message: this.message,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.lifeline = Array.from(this.lifeline);
    result.fragment = [...this.fragment];
    result.action = Array.from(this.action);
    result.formalGate = Array.from(this.formalGate);
    result.message = Array.from(this.message);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Interaction {
    return new Interaction(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IInteraction>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Interaction)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Interaction{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Interaction {
    const instance = new Interaction();

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
    if (json.covered && Array.isArray(json.covered)) {
      instance.covered = new Set(json.covered);
    }
    if (json.enclosingOperand !== undefined) {
      instance.enclosingOperand = json.enclosingOperand;
    }
    if (json.enclosingInteraction !== undefined) {
      instance.enclosingInteraction = json.enclosingInteraction;
    }
    if (json.generalOrdering && Array.isArray(json.generalOrdering)) {
      instance.generalOrdering = new Set(json.generalOrdering);
    }
    if (json.lifeline && Array.isArray(json.lifeline)) {
      instance.lifeline = new Set(json.lifeline);
    }
    if (json.fragment && Array.isArray(json.fragment)) {
      instance.fragment = [...json.fragment];
    }
    if (json.action && Array.isArray(json.action)) {
      instance.action = new Set(json.action);
    }
    if (json.formalGate && Array.isArray(json.formalGate)) {
      instance.formalGate = new Set(json.formalGate);
    }
    if (json.message && Array.isArray(json.message)) {
      instance.message = new Set(json.message);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.lifeline) {
    }
    if (this.fragment) {
    }
    if (this.action) {
    }
    if (this.formalGate) {
    }
    if (this.message) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IInteraction): ValidationResult {
    if (instance instanceof Interaction) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Interaction(instance);
    return temp.validate();
  }
}
