/**
 * Implementation class for State
 * 
 * @since UML 2.5
 * @package uml
 * @extends Namespace, RedefinableElement, Vertex
 */
import { Behavior } from './Behavior';
import { Comment } from './Comment';
import { ConnectionPointReference } from './ConnectionPointReference';
import { Constraint } from './Constraint';
import { ElementImport } from './ElementImport';
import { IBehavior } from './IBehavior';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IConnectionPointReference } from './IConnectionPointReference';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IElementImport } from './IElementImport';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IPackageImport } from './IPackageImport';
import { IPackageableElement } from './IPackageableElement';
import { IPseudostate } from './IPseudostate';
import { IRedefinableElement } from './IRedefinableElement';
import { IRegion } from './IRegion';
import { IState } from './IState';
import { IStateMachine } from './IStateMachine';
import { IStringExpression } from './IStringExpression';
import { ITransition } from './ITransition';
import { ITrigger } from './ITrigger';
import { IVertex } from './IVertex';
import { Namespace } from './Namespace';
import { PackageImport } from './PackageImport';
import { Pseudostate } from './Pseudostate';
import { RedefinableElement } from './RedefinableElement';
import { Region } from './Region';
import { StringExpression } from './StringExpression';
import { Trigger } from './Trigger';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { Vertex } from './Vertex';
import { VisibilityKind } from './VisibilityKind';

export class State extends Namespace implements IState {
  /**
   * connection
   * 
   * @type ConnectionPointReference
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite state
   */
  public connection: Set<IConnectionPointReference> = new Set();

  /**
   * connectionPoint
   * 
   * @type Pseudostate
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite state
   */
  public connectionPoint: Set<IPseudostate> = new Set();

  /**
   * deferrableTrigger
   * 
   * @type Trigger
   * @multiplicity [0..*]
   * @relationship containment
   */
  public deferrableTrigger: Set<ITrigger> = new Set();

  /**
   * doActivity
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship containment
   */
  public doActivity?: IBehavior = undefined;

  /**
   * entry
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship containment
   */
  public entry?: IBehavior = undefined;

  /**
   * exit
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship containment
   */
  public exit?: IBehavior = undefined;

  /**
   * redefinedState
   * 
   * @type State
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public redefinedState?: IState | string = undefined;

  /**
   * stateInvariant
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public stateInvariant?: IConstraint | string = undefined;

  /**
   * submachine
   * 
   * @type StateMachine
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite submachineState
   */
  public submachine?: IStateMachine | string = undefined;

  /**
   * region
   * 
   * @type Region
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite state
   */
  public region: Set<IRegion> = new Set();

  // Inherited from Namespace
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Namespace
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from Namespace
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from Namespace
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from Namespace
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from Namespace
  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  // Inherited from Namespace
  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  // Inherited from Namespace
  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

  // Inherited from RedefinableElement
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from Vertex
  /**
   * container
   * 
   * @type Region
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite subvertex
   */
  public container?: IRegion | string = undefined;

  constructor(init?: Partial<IState>) {
    super(init);
    this.connection = init?.connection ?? new Set();
    this.connectionPoint = init?.connectionPoint ?? new Set();
    this.deferrableTrigger = init?.deferrableTrigger ?? new Set();
    this.doActivity = init?.doActivity ?? undefined;
    this.entry = init?.entry ?? undefined;
    this.exit = init?.exit ?? undefined;
    this.redefinedState = init?.redefinedState ?? undefined;
    this.stateInvariant = init?.stateInvariant ?? undefined;
    this.submachine = init?.submachine ?? undefined;
    this.region = init?.region ?? new Set();
  }
  getConnection(): Set<IConnectionPointReference> {
    return this.connection;
  }

  setConnection(value: Set<IConnectionPointReference>): void {
    this.connection = value;
  }

  getConnectionPoint(): Set<IPseudostate> {
    return this.connectionPoint;
  }

  setConnectionPoint(value: Set<IPseudostate>): void {
    this.connectionPoint = value;
  }

  getDeferrableTrigger(): Set<ITrigger> {
    return this.deferrableTrigger;
  }

  setDeferrableTrigger(value: Set<ITrigger>): void {
    this.deferrableTrigger = value;
  }

  getDoActivity(): IBehavior | undefined {
    return this.doActivity;
  }

  setDoActivity(value: IBehavior | undefined): void {
    this.doActivity = value;
  }

  getEntry(): IBehavior | undefined {
    return this.entry;
  }

  setEntry(value: IBehavior | undefined): void {
    this.entry = value;
  }

  getExit(): IBehavior | undefined {
    return this.exit;
  }

  setExit(value: IBehavior | undefined): void {
    this.exit = value;
  }

  getRedefinedState(): IState | string | undefined {
    return this.redefinedState;
  }

  setRedefinedState(value: IState | string | undefined): void {
    this.redefinedState = value;
  }

  getStateInvariant(): IConstraint | string | undefined {
    return this.stateInvariant;
  }

  setStateInvariant(value: IConstraint | string | undefined): void {
    this.stateInvariant = value;
  }

  getSubmachine(): IStateMachine | string | undefined {
    return this.submachine;
  }

  setSubmachine(value: IStateMachine | string | undefined): void {
    this.submachine = value;
  }

  getRegion(): Set<IRegion> {
    return this.region;
  }

  setRegion(value: Set<IRegion>): void {
    this.region = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IState {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      connection: this.connection,
      connectionPoint: this.connectionPoint,
      deferrableTrigger: this.deferrableTrigger,
      ...(this.doActivity !== undefined && { doActivity: this.doActivity }),
      ...(this.entry !== undefined && { entry: this.entry }),
      ...(this.exit !== undefined && { exit: this.exit }),
      ...(this.redefinedState !== undefined && { redefinedState: this.redefinedState }),
      ...(this.stateInvariant !== undefined && { stateInvariant: this.stateInvariant }),
      ...(this.submachine !== undefined && { submachine: this.submachine }),
      region: this.region,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.connection = Array.from(this.connection);
    result.connectionPoint = Array.from(this.connectionPoint);
    result.deferrableTrigger = Array.from(this.deferrableTrigger);
    if (this.doActivity !== undefined) {
      result.doActivity = this.doActivity;
    }
    if (this.entry !== undefined) {
      result.entry = this.entry;
    }
    if (this.exit !== undefined) {
      result.exit = this.exit;
    }
    if (this.redefinedState !== undefined) {
      result.redefinedState = this.redefinedState;
    }
    if (this.stateInvariant !== undefined) {
      result.stateInvariant = this.stateInvariant;
    }
    if (this.submachine !== undefined) {
      result.submachine = this.submachine;
    }
    result.region = Array.from(this.region);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): State {
    return new State(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IState>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof State)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `State{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): State {
    const instance = new State();

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
    if (json.container !== undefined) {
      instance.container = json.container;
    }
    if (json.connection && Array.isArray(json.connection)) {
      instance.connection = new Set(json.connection);
    }
    if (json.connectionPoint && Array.isArray(json.connectionPoint)) {
      instance.connectionPoint = new Set(json.connectionPoint);
    }
    if (json.deferrableTrigger && Array.isArray(json.deferrableTrigger)) {
      instance.deferrableTrigger = new Set(json.deferrableTrigger);
    }
    if (json.doActivity !== undefined) {
      instance.doActivity = json.doActivity;
    }
    if (json.entry !== undefined) {
      instance.entry = json.entry;
    }
    if (json.exit !== undefined) {
      instance.exit = json.exit;
    }
    if (json.redefinedState !== undefined) {
      instance.redefinedState = json.redefinedState;
    }
    if (json.stateInvariant !== undefined) {
      instance.stateInvariant = json.stateInvariant;
    }
    if (json.submachine !== undefined) {
      instance.submachine = json.submachine;
    }
    if (json.region && Array.isArray(json.region)) {
      instance.region = new Set(json.region);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.connection) {
    }
    if (this.connectionPoint) {
    }
    if (this.deferrableTrigger) {
    }
    if (this.region) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IState): ValidationResult {
    if (instance instanceof State) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new State(instance);
    return temp.validate();
  }
}
