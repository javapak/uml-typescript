/**
 * Implementation class for ProtocolTransition
 * 
 * @since UML 2.5
 * @package uml
 * @extends Transition
 */
import { Behavior } from './Behavior';
import { IBehavior } from './IBehavior';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { IPackageImport } from './IPackageImport';
import { IProtocolTransition } from './IProtocolTransition';
import { IRegion } from './IRegion';
import { IStringExpression } from './IStringExpression';
import { ITransition } from './ITransition';
import { ITrigger } from './ITrigger';
import { IVertex } from './IVertex';
import { StringExpression } from './StringExpression';
import { Transition } from './Transition';
import { TransitionKind } from './TransitionKind';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class ProtocolTransition extends Transition implements IProtocolTransition {
  /**
   * postCondition
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public postCondition?: string;

  /**
   * preCondition
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public preCondition?: string;

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
   * effect
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship containment
   */
  public effect?: IBehavior;

  /**
   * guard
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public guard?: string;

  /**
   * kind
   * 
   * @type TransitionKind
   * @multiplicity [1..1]
   */
  public kind: TransitionKind = TransitionKind.internal;
  /**
   * redefinedTransition
   * 
   * @type Transition
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public redefinedTransition?: string;

  /**
   * source
   * 
   * @type Vertex
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public source!: string;

  /**
   * target
   * 
   * @type Vertex
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public target!: string;

  /**
   * trigger
   * 
   * @type Trigger
   * @multiplicity [0..*]
   * @relationship containment
   */
  public trigger: Set<ITrigger> = new Set();

  /**
   * container
   * 
   * @type Region
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite transition
   */
  public container!: string;


  constructor(init?: Partial<IProtocolTransition>) {
    super(init);

    this.postCondition = init?.postCondition;
    this.preCondition = init?.preCondition;
  }
  getPostCondition(): string | undefined {
    return this.postCondition;
  }

  setPostCondition(value: string | undefined): void {
    this.postCondition = value;
  }

  getPreCondition(): string | undefined {
    return this.preCondition;
  }

  setPreCondition(value: string | undefined): void {
    this.preCondition = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IProtocolTransition {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.postCondition !== undefined && { postCondition: this.postCondition }),
      ...(this.preCondition !== undefined && { preCondition: this.preCondition }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.postCondition !== undefined) {
      result.postCondition = this.postCondition;
    }
    if (this.preCondition !== undefined) {
      result.preCondition = this.preCondition;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ProtocolTransition {
    return new ProtocolTransition(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IProtocolTransition>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ProtocolTransition)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ProtocolTransition{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ProtocolTransition {
    const instance = new ProtocolTransition();

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
    if (json.effect !== undefined) {
      instance.effect = json.effect;
    }
    if (json.guard !== undefined) {
      instance.guard = json.guard;
    }
    instance.kind = json.kind;
    if (json.redefinedTransition !== undefined) {
      instance.redefinedTransition = json.redefinedTransition;
    }
    instance.source = json.source;
    instance.target = json.target;
    if (json.trigger && Array.isArray(json.trigger)) {
      instance.trigger = new Set(json.trigger);
    }
    instance.container = json.container;
    if (json.postCondition !== undefined) {
      instance.postCondition = json.postCondition;
    }
    if (json.preCondition !== undefined) {
      instance.preCondition = json.preCondition;
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

  static validate(instance: IProtocolTransition): ValidationResult {
    if (instance instanceof ProtocolTransition) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ProtocolTransition(instance);
    return temp.validate();
  }
}
