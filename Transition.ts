/**
 * Implementation class for Transition
 * 
 * @since UML 2.5
 * @package uml
 * @extends Namespace, RedefinableElement
 */
import { Behavior } from './Behavior';
import { IBehavior } from './IBehavior';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { INamespace } from './INamespace';
import { IPackageImport } from './IPackageImport';
import { IRedefinableElement } from './IRedefinableElement';
import { IRegion } from './IRegion';
import { IStringExpression } from './IStringExpression';
import { ITransition } from './ITransition';
import { ITrigger } from './ITrigger';
import { IVertex } from './IVertex';
import { Namespace } from './Namespace';
import { RedefinableElement } from './RedefinableElement';
import { StringExpression } from './StringExpression';
import { TransitionKind } from './TransitionKind';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Transition extends Namespace implements ITransition {
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
  public kind!: TransitionKind;

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


  constructor(init?: Partial<ITransition>) {
    super(init);

    this.effect = init?.effect;
    this.guard = init?.guard;
    this.kind = init?.kind!;
    this.redefinedTransition = init?.redefinedTransition;
    this.source = init?.source ?? '';
    this.target = init?.target ?? '';
    this.trigger = init?.trigger ? new Set(init.trigger) : new Set();
    this.container = init?.container ?? '';
  }
  getEffect(): IBehavior | undefined {
    return this.effect;
  }

  setEffect(value: IBehavior | undefined): void {
    this.effect = value;
  }

  getGuard(): string | undefined {
    return this.guard;
  }

  setGuard(value: string | undefined): void {
    this.guard = value;
  }

  getKind(): TransitionKind {
    return this.kind;
  }

  setKind(value: TransitionKind): void {
    this.kind = value;
  }

  getRedefinedTransition(): string | undefined {
    return this.redefinedTransition;
  }

  setRedefinedTransition(value: string | undefined): void {
    this.redefinedTransition = value;
  }

  getSource(): string {
    return this.source;
  }

  setSource(value: string): void {
    this.source = value;
  }

  getTarget(): string {
    return this.target;
  }

  setTarget(value: string): void {
    this.target = value;
  }

  getTrigger(): Set<ITrigger> {
    return this.trigger;
  }

  setTrigger(value: Set<ITrigger>): void {
    this.trigger = value;
  }

  getContainer(): string {
    return this.container;
  }

  setContainer(value: string): void {
    this.container = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): ITransition {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.effect !== undefined && { effect: this.effect }),
      ...(this.guard !== undefined && { guard: this.guard }),
      kind: this.kind,
      ...(this.redefinedTransition !== undefined && { redefinedTransition: this.redefinedTransition }),
      source: this.source,
      target: this.target,
      trigger: this.trigger,
      container: this.container,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.effect !== undefined) {
      result.effect = this.effect;
    }
    if (this.guard !== undefined) {
      result.guard = this.guard;
    }
    result.kind = this.kind;
    if (this.redefinedTransition !== undefined) {
      result.redefinedTransition = this.redefinedTransition;
    }
    result.source = this.source;
    result.target = this.target;
    result.trigger = Array.from(this.trigger);
    result.container = this.container;

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Transition {
    return new Transition(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<ITransition>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Transition)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Transition{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Transition {
    const instance = new Transition();

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
    if (this.kind == null) {
      errors.push({
        property: 'kind',
        message: 'kind is required',
        code: 'REQUIRED'
      });
    }
    if (this.kind !== undefined) {
    }
    if (this.source == null) {
      errors.push({
        property: 'source',
        message: 'source is required',
        code: 'REQUIRED'
      });
    }
    if (this.target == null) {
      errors.push({
        property: 'target',
        message: 'target is required',
        code: 'REQUIRED'
      });
    }
    if (this.trigger) {
    }
    if (this.container == null) {
      errors.push({
        property: 'container',
        message: 'container is required',
        code: 'REQUIRED'
      });
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: ITransition): ValidationResult {
    if (instance instanceof Transition) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Transition(instance);
    return temp.validate();
  }
}
