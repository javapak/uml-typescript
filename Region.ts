/**
 * Implementation class for Region
 * 
 * @since UML 2.5
 * @package uml
 * @extends Namespace, RedefinableElement
 */
import { Comment } from './Comment';
import { Constraint } from './Constraint';
import { ElementImport } from './ElementImport';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IElementImport } from './IElementImport';
import { INamedElement } from './INamedElement';
import { INamespace } from './INamespace';
import { IPackageImport } from './IPackageImport';
import { IPackageableElement } from './IPackageableElement';
import { IRedefinableElement } from './IRedefinableElement';
import { IRegion } from './IRegion';
import { IState } from './IState';
import { IStateMachine } from './IStateMachine';
import { IStringExpression } from './IStringExpression';
import { ITransition } from './ITransition';
import { IVertex } from './IVertex';
import { Namespace } from './Namespace';
import { PackageImport } from './PackageImport';
import { RedefinableElement } from './RedefinableElement';
import { StringExpression } from './StringExpression';
import { Transition } from './Transition';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { Vertex } from './Vertex';
import { VisibilityKind } from './VisibilityKind';

export class Region extends Namespace implements IRegion {
  /**
   * extendedRegion
   * 
   * @type Region
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public extendedRegion?: IRegion | string = undefined;

  /**
   * state
   * 
   * @type State
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite region
   */
  public state?: IState | string = undefined;

  /**
   * stateMachine
   * 
   * @type StateMachine
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite region
   */
  public stateMachine?: IStateMachine | string = undefined;

  /**
   * transition
   * 
   * @type Transition
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite container
   */
  public transition: Set<ITransition> = new Set();

  /**
   * subvertex
   * 
   * @type Vertex
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite container
   */
  public subvertex: Set<IVertex> = new Set();

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

  constructor(init?: Partial<IRegion>) {
    super(init);
    this.extendedRegion = init?.extendedRegion ?? undefined;
    this.state = init?.state ?? undefined;
    this.stateMachine = init?.stateMachine ?? undefined;
    this.transition = init?.transition ?? new Set();
    this.subvertex = init?.subvertex ?? new Set();
  }
  getExtendedRegion(): IRegion | string | undefined {
    return this.extendedRegion;
  }

  setExtendedRegion(value: IRegion | string | undefined): void {
    this.extendedRegion = value;
  }

  getState(): IState | string | undefined {
    return this.state;
  }

  setState(value: IState | string | undefined): void {
    this.state = value;
  }

  getStateMachine(): IStateMachine | string | undefined {
    return this.stateMachine;
  }

  setStateMachine(value: IStateMachine | string | undefined): void {
    this.stateMachine = value;
  }

  getTransition(): Set<ITransition> {
    return this.transition;
  }

  setTransition(value: Set<ITransition>): void {
    this.transition = value;
  }

  getSubvertex(): Set<IVertex> {
    return this.subvertex;
  }

  setSubvertex(value: Set<IVertex>): void {
    this.subvertex = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IRegion {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.extendedRegion !== undefined && { extendedRegion: this.extendedRegion }),
      ...(this.state !== undefined && { state: this.state }),
      ...(this.stateMachine !== undefined && { stateMachine: this.stateMachine }),
      transition: this.transition,
      subvertex: this.subvertex,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.extendedRegion !== undefined) {
      result.extendedRegion = this.extendedRegion;
    }
    if (this.state !== undefined) {
      result.state = this.state;
    }
    if (this.stateMachine !== undefined) {
      result.stateMachine = this.stateMachine;
    }
    result.transition = Array.from(this.transition);
    result.subvertex = Array.from(this.subvertex);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Region {
    return new Region(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IRegion>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Region)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Region{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Region {
    const instance = new Region();

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
    if (json.extendedRegion !== undefined) {
      instance.extendedRegion = json.extendedRegion;
    }
    if (json.state !== undefined) {
      instance.state = json.state;
    }
    if (json.stateMachine !== undefined) {
      instance.stateMachine = json.stateMachine;
    }
    if (json.transition && Array.isArray(json.transition)) {
      instance.transition = new Set(json.transition);
    }
    if (json.subvertex && Array.isArray(json.subvertex)) {
      instance.subvertex = new Set(json.subvertex);
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.transition) {
    }
    if (this.subvertex) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IRegion): ValidationResult {
    if (instance instanceof Region) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Region(instance);
    return temp.validate();
  }
}
