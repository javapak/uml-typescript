/**
 * Implementation class for Pseudostate
 * 
 * @since UML 2.5
 * @package uml
 * @extends Vertex
 */
import { IComment } from './IComment';
import { IPseudostate } from './IPseudostate';
import { IRegion } from './IRegion';
import { IState } from './IState';
import { IStateMachine } from './IStateMachine';
import { IStringExpression } from './IStringExpression';
import { IVertex } from './IVertex';
import { PseudostateKind } from './PseudostateKind';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { Vertex } from './Vertex';
import { VisibilityKind } from './VisibilityKind';

export class Pseudostate extends Vertex implements IPseudostate {
  /**
   * state
   * 
   * @type State
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite connectionPoint
   */
  public state?: string;

  /**
   * kind
   * 
   * @type PseudostateKind
   * @multiplicity [1..1]
   */
  public kind!: PseudostateKind;

  /**
   * stateMachine
   * 
   * @type StateMachine
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite connectionPoint
   */
  public stateMachine?: string;

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
   * container
   * 
   * @type Region
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite subvertex
   */
  public container?: string;


  constructor(init?: Partial<IPseudostate>) {
    super(init);

    this.state = init?.state;
    this.kind = init?.kind!;
    this.stateMachine = init?.stateMachine;
  }
  getState(): string | undefined {
    return this.state;
  }

  setState(value: string | undefined): void {
    this.state = value;
  }

  getKind(): PseudostateKind {
    return this.kind;
  }

  setKind(value: PseudostateKind): void {
    this.kind = value;
  }

  getStateMachine(): string | undefined {
    return this.stateMachine;
  }

  setStateMachine(value: string | undefined): void {
    this.stateMachine = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IPseudostate {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.state !== undefined && { state: this.state }),
      kind: this.kind,
      ...(this.stateMachine !== undefined && { stateMachine: this.stateMachine }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.state !== undefined) {
      result.state = this.state;
    }
    result.kind = this.kind;
    if (this.stateMachine !== undefined) {
      result.stateMachine = this.stateMachine;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Pseudostate {
    return new Pseudostate(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IPseudostate>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Pseudostate)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Pseudostate{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Pseudostate {
    const instance = new Pseudostate();

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
    if (json.container !== undefined) {
      instance.container = json.container;
    }
    if (json.state !== undefined) {
      instance.state = json.state;
    }
    instance.kind = json.kind;
    if (json.stateMachine !== undefined) {
      instance.stateMachine = json.stateMachine;
    }

    return instance;
  }

  /**
   * Validates this instance against UML constraints
   */
  validate(): ValidationResult {
    const errors: ValidationError[] = [];
    if (this.kind == null) {
      errors.push({
        property: 'kind',
        message: 'kind is required',
        code: 'REQUIRED'
      });
    }
    if (this.kind !== undefined) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IPseudostate): ValidationResult {
    if (instance instanceof Pseudostate) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Pseudostate(instance);
    return temp.validate();
  }
}
