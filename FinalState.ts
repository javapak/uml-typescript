/**
 * Implementation class for FinalState
 * 
 * @since UML 2.5
 * @package uml
 * @extends State
 */
import { Behavior } from './Behavior';
import { IBehavior } from './IBehavior';
import { IComment } from './IComment';
import { IConnectionPointReference } from './IConnectionPointReference';
import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { IFinalState } from './IFinalState';
import { IPackageImport } from './IPackageImport';
import { IPseudostate } from './IPseudostate';
import { IRegion } from './IRegion';
import { IState } from './IState';
import { IStateMachine } from './IStateMachine';
import { IStringExpression } from './IStringExpression';
import { ITrigger } from './ITrigger';
import { State } from './State';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class FinalState extends State implements IFinalState {
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


  constructor(init?: Partial<IFinalState>) {
    super(init);

  }
  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IFinalState {
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
  clone(): FinalState {
    return new FinalState(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IFinalState>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof FinalState)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `FinalState{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): FinalState {
    const instance = new FinalState();

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
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IFinalState): ValidationResult {
    if (instance instanceof FinalState) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new FinalState(instance);
    return temp.validate();
  }
}
