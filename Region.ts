/**
 * Implementation class for Region
 * 
 * @since UML 2.5
 * @package uml
 * @extends Namespace, RedefinableElement
 */
import { IComment } from './IComment';
import { IConstraint } from './IConstraint';
import { IElementImport } from './IElementImport';
import { INamespace } from './INamespace';
import { IPackageImport } from './IPackageImport';
import { IRedefinableElement } from './IRedefinableElement';
import { IRegion } from './IRegion';
import { IState } from './IState';
import { IStateMachine } from './IStateMachine';
import { IStringExpression } from './IStringExpression';
import { ITransition } from './ITransition';
import { IVertex } from './IVertex';
import { Namespace } from './Namespace';
import { RedefinableElement } from './RedefinableElement';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Region extends Namespace implements IRegion {
  /**
   * extendedRegion
   * 
   * @type Region
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public extendedRegion?: string;

  /**
   * state
   * 
   * @type State
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite region
   */
  public state?: string;

  /**
   * stateMachine
   * 
   * @type StateMachine
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite region
   */
  public stateMachine?: string;

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


  constructor(init?: Partial<IRegion>) {
    super(init);

    this.extendedRegion = init?.extendedRegion;
    this.state = init?.state;
    this.stateMachine = init?.stateMachine;
    this.transition = init?.transition ? new Set(init.transition) : new Set();
    this.subvertex = init?.subvertex ? new Set(init.subvertex) : new Set();
  }
  getExtendedRegion(): string | undefined {
    return this.extendedRegion;
  }

  setExtendedRegion(value: string | undefined): void {
    this.extendedRegion = value;
  }

  getState(): string | undefined {
    return this.state;
  }

  setState(value: string | undefined): void {
    this.state = value;
  }

  getStateMachine(): string | undefined {
    return this.stateMachine;
  }

  setStateMachine(value: string | undefined): void {
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
