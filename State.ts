/**
 * Implementation class for State
 * 
 * @since UML 2.5
 * @package uml
 * @extends Namespace, RedefinableElement, Vertex
 */
import { Behavior } from './Behavior';
import { IBehavior } from './IBehavior';
import { IComment } from './IComment';
import { IConnectionPointReference } from './IConnectionPointReference';
import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { INamespace } from './INamespace';
import { IPackageImport } from './IPackageImport';
import { IPseudostate } from './IPseudostate';
import { IRedefinableElement } from './IRedefinableElement';
import { IRegion } from './IRegion';
import { IState } from './IState';
import { IStateMachine } from './IStateMachine';
import { IStringExpression } from './IStringExpression';
import { ITrigger } from './ITrigger';
import { IVertex } from './IVertex';
import { Namespace } from './Namespace';
import { RedefinableElement } from './RedefinableElement';
import { StringExpression } from './StringExpression';
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
  public doActivity?: IBehavior;

  /**
   * entry
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship containment
   */
  public entry?: IBehavior;

  /**
   * exit
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship containment
   */
  public exit?: IBehavior;

  /**
   * redefinedState
   * 
   * @type State
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public redefinedState?: string;

  /**
   * stateInvariant
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public stateInvariant?: string;

  /**
   * submachine
   * 
   * @type StateMachine
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite submachineState
   */
  public submachine?: string;

  /**
   * region
   * 
   * @type Region
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite state
   */
  public region: Set<IRegion> = new Set();

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
   * container
   * 
   * @type Region
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite subvertex
   */
  public container?: string;


  constructor(init?: Partial<IState>) {
    super(init);

    this.connection = init?.connection ? new Set(init.connection) : new Set();
    this.connectionPoint = init?.connectionPoint ? new Set(init.connectionPoint) : new Set();
    this.deferrableTrigger = init?.deferrableTrigger ? new Set(init.deferrableTrigger) : new Set();
    this.doActivity = init?.doActivity;
    this.entry = init?.entry;
    this.exit = init?.exit;
    this.redefinedState = init?.redefinedState;
    this.stateInvariant = init?.stateInvariant;
    this.submachine = init?.submachine;
    this.region = init?.region ? new Set(init.region) : new Set();
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

  getRedefinedState(): string | undefined {
    return this.redefinedState;
  }

  setRedefinedState(value: string | undefined): void {
    this.redefinedState = value;
  }

  getStateInvariant(): string | undefined {
    return this.stateInvariant;
  }

  setStateInvariant(value: string | undefined): void {
    this.stateInvariant = value;
  }

  getSubmachine(): string | undefined {
    return this.submachine;
  }

  setSubmachine(value: string | undefined): void {
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
  isLeaf: false
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
