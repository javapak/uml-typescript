/**
 * Implementation class for ProtocolTransition
 * 
 * @since UML 2.5
 * @package uml
 * @extends Transition
 */
import { Behavior } from './Behavior';
import { Comment } from './Comment';
import { Constraint } from './Constraint';
import { ElementImport } from './ElementImport';
import { IBehavior } from './IBehavior';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IElementImport } from './IElementImport';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IOperation } from './IOperation';
import { IPackageImport } from './IPackageImport';
import { IPackageableElement } from './IPackageableElement';
import { IProtocolTransition } from './IProtocolTransition';
import { IRedefinableElement } from './IRedefinableElement';
import { IRegion } from './IRegion';
import { IStringExpression } from './IStringExpression';
import { ITransition } from './ITransition';
import { ITrigger } from './ITrigger';
import { IVertex } from './IVertex';
import { PackageImport } from './PackageImport';
import { StringExpression } from './StringExpression';
import { Transition } from './Transition';
import { TransitionKind } from './TransitionKind';
import { Trigger } from './Trigger';
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
  public postCondition?: IConstraint | string = undefined;

  /**
   * preCondition
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public preCondition?: IConstraint | string = undefined;

  // Inherited from Transition
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Transition
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from Transition
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from Transition
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from Transition
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from Transition
  /**
   * ownedRule
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite context
   */
  public ownedRule: Set<IConstraint> = new Set();

  // Inherited from Transition
  /**
   * elementImport
   * 
   * @type ElementImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public elementImport: Set<IElementImport> = new Set();

  // Inherited from Transition
  /**
   * packageImport
   * 
   * @type PackageImport
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite importingNamespace
   */
  public packageImport: Set<IPackageImport> = new Set();

  // Inherited from Transition
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from Transition
  /**
   * effect
   * 
   * @type Behavior
   * @multiplicity [0..1]
   * @relationship containment
   */
  public effect?: IBehavior = undefined;

  // Inherited from Transition
  /**
   * guard
   * 
   * @type Constraint
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public guard?: IConstraint | string = undefined;

  // Inherited from Transition
  /**
   * kind
   * 
   * @type TransitionKind
   * @multiplicity [1..1]
   */
  public kind!: any;

  // Inherited from Transition
  /**
   * redefinedTransition
   * 
   * @type Transition
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public redefinedTransition?: ITransition | string = undefined;

  // Inherited from Transition
  /**
   * source
   * 
   * @type Vertex
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public source!: IVertex | string;

  // Inherited from Transition
  /**
   * target
   * 
   * @type Vertex
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public target!: IVertex | string;

  // Inherited from Transition
  /**
   * trigger
   * 
   * @type Trigger
   * @multiplicity [0..*]
   * @relationship containment
   */
  public trigger: Set<ITrigger> = new Set();

  // Inherited from Transition
  /**
   * container
   * 
   * @type Region
   * @multiplicity [1..1]
   * @relationship cross-reference
   * @opposite transition
   */
  public container!: IRegion | string;

  constructor(init?: Partial<IProtocolTransition>) {
    super(init);
    this.postCondition = init?.postCondition ?? undefined;
    this.preCondition = init?.preCondition ?? undefined;
  }
  getPostCondition(): IConstraint | string | undefined {
    return this.postCondition;
  }

  setPostCondition(value: IConstraint | string | undefined): void {
    this.postCondition = value;
  }

  getPreCondition(): IConstraint | string | undefined {
    return this.preCondition;
  }

  setPreCondition(value: IConstraint | string | undefined): void {
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
