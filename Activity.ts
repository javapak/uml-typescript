/**
 * Implementation class for Activity
 * 
 * @since UML 2.5
 * @package uml
 * @extends Behavior
 */
import { Behavior } from './Behavior';
import { IActivity } from './IActivity';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IBehavior } from './IBehavior';
import { IBehavioralFeature } from './IBehavioralFeature';
import { IClassifier } from './IClassifier';
import { ICollaborationUse } from './ICollaborationUse';
import { IComment } from './IComment';
import { IConnector } from './IConnector';
import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { IInterfaceRealization } from './IInterfaceRealization';
import { IOperation } from './IOperation';
import { IPackageImport } from './IPackageImport';
import { IParameter } from './IParameter';
import { IParameterSet } from './IParameterSet';
import { IProperty } from './IProperty';
import { IReception } from './IReception';
import { IStringExpression } from './IStringExpression';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { ISubstitution } from './ISubstitution';
import { ITemplateBinding } from './ITemplateBinding';
import { ITemplateParameter } from './ITemplateParameter';
import { ITemplateSignature } from './ITemplateSignature';
import { IUseCase } from './IUseCase';
import { IVariable } from './IVariable';
import { StringExpression } from './StringExpression';
import { TemplateSignature } from './TemplateSignature';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Activity extends Behavior implements IActivity {
  /**
   * ownedGroup
   * 
   * @type ActivityGroup
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedGroup: Set<IActivityGroup> = new Set();

  /**
   * edge
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite activity
   */
  public edge: Set<IActivityEdge> = new Set();

  /**
   * variable
   * 
   * @type Variable
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite activityScope
   */
  public variable: Set<IVariable> = new Set();

  /**
   * ownedNode
   * 
   * @type ActivityNode
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedNode: Set<IActivityNode> = new Set();

  /**
   * isReadOnly
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isReadOnly!: boolean;

  /**
   * isSingleExecution
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isSingleExecution!: boolean;

  /**
   * partition
   * 
   * @type ActivityPartition
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public partition: Set<string> = new Set();

  /**
   * structuredNode
   * 
   * @type StructuredActivityNode
   * @multiplicity [0..*]
   * @relationship containment
   */
  public structuredNode: Set<IStructuredActivityNode> = new Set();

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


  constructor(init?: Partial<IActivity>) {
    super(init);

    this.ownedGroup = init?.ownedGroup ? new Set(init.ownedGroup) : new Set();
    this.edge = init?.edge ? new Set(init.edge) : new Set();
    this.variable = init?.variable ? new Set(init.variable) : new Set();
    this.ownedNode = init?.ownedNode ? new Set(init.ownedNode) : new Set();
    this.isReadOnly = init?.isReadOnly ?? false;
    this.isSingleExecution = init?.isSingleExecution ?? false;
    this.partition = init?.partition ? new Set(init.partition) : new Set();
    this.structuredNode = init?.structuredNode ? new Set(init.structuredNode) : new Set();
  }
  getOwnedGroup(): Set<IActivityGroup> {
    return this.ownedGroup;
  }

  setOwnedGroup(value: Set<IActivityGroup>): void {
    this.ownedGroup = value;
  }

  getEdge(): Set<IActivityEdge> {
    return this.edge;
  }

  setEdge(value: Set<IActivityEdge>): void {
    this.edge = value;
  }

  getVariable(): Set<IVariable> {
    return this.variable;
  }

  setVariable(value: Set<IVariable>): void {
    this.variable = value;
  }

  getOwnedNode(): Set<IActivityNode> {
    return this.ownedNode;
  }

  setOwnedNode(value: Set<IActivityNode>): void {
    this.ownedNode = value;
  }

  getIsReadOnly(): boolean {
    return this.isReadOnly;
  }

  setIsReadOnly(value: boolean): void {
    this.isReadOnly = value;
  }

  getIsSingleExecution(): boolean {
    return this.isSingleExecution;
  }

  setIsSingleExecution(value: boolean): void {
    this.isSingleExecution = value;
  }

  getPartition(): Set<string> {
    return this.partition;
  }

  setPartition(value: Set<string>): void {
    this.partition = value;
  }

  getStructuredNode(): Set<IStructuredActivityNode> {
    return this.structuredNode;
  }

  setStructuredNode(value: Set<IStructuredActivityNode>): void {
    this.structuredNode = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IActivity {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ownedGroup: this.ownedGroup,
      edge: this.edge,
      variable: this.variable,
      ownedNode: this.ownedNode,
      isReadOnly: this.isReadOnly,
      isSingleExecution: this.isSingleExecution,
      partition: this.partition,
      structuredNode: this.structuredNode,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.ownedGroup = Array.from(this.ownedGroup);
    result.edge = Array.from(this.edge);
    result.variable = Array.from(this.variable);
    result.ownedNode = Array.from(this.ownedNode);
    result.isReadOnly = this.isReadOnly;
    result.isSingleExecution = this.isSingleExecution;
    result.partition = Array.from(this.partition);
    result.structuredNode = Array.from(this.structuredNode);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Activity {
    return new Activity(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IActivity>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Activity)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Activity{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Activity {
    const instance = new Activity();

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
    if (json.ownedGroup && Array.isArray(json.ownedGroup)) {
      instance.ownedGroup = new Set(json.ownedGroup);
    }
    if (json.edge && Array.isArray(json.edge)) {
      instance.edge = new Set(json.edge);
    }
    if (json.variable && Array.isArray(json.variable)) {
      instance.variable = new Set(json.variable);
    }
    if (json.ownedNode && Array.isArray(json.ownedNode)) {
      instance.ownedNode = new Set(json.ownedNode);
    }
    instance.isReadOnly = json.isReadOnly;
    instance.isSingleExecution = json.isSingleExecution;
    if (json.partition && Array.isArray(json.partition)) {
      instance.partition = new Set(json.partition);
    }
    if (json.structuredNode && Array.isArray(json.structuredNode)) {
      instance.structuredNode = new Set(json.structuredNode);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.ownedGroup) {
    }
    if (this.edge) {
    }
    if (this.variable) {
    }
    if (this.ownedNode) {
    }
    if (this.isReadOnly == null) {
      errors.push({
        property: 'isReadOnly',
        message: 'isReadOnly is required',
        code: 'REQUIRED'
      });
    }
    if (this.isReadOnly !== undefined) {
      if (typeof this.isReadOnly !== 'boolean') {
        errors.push({
          property: 'isReadOnly',
          message: 'isReadOnly must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isReadOnly
        });
      }
    }
    if (this.isSingleExecution == null) {
      errors.push({
        property: 'isSingleExecution',
        message: 'isSingleExecution is required',
        code: 'REQUIRED'
      });
    }
    if (this.isSingleExecution !== undefined) {
      if (typeof this.isSingleExecution !== 'boolean') {
        errors.push({
          property: 'isSingleExecution',
          message: 'isSingleExecution must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isSingleExecution
        });
      }
    }
    if (this.partition) {
    }
    if (this.structuredNode) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IActivity): ValidationResult {
    if (instance instanceof Activity) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Activity(instance);
    return temp.validate();
  }
}
