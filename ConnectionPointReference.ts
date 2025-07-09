/**
 * Implementation class for ConnectionPointReference
 * 
 * @since UML 2.5
 * @package uml
 * @extends Vertex
 */
import { IComment } from './IComment';
import { IConnectionPointReference } from './IConnectionPointReference';
import { IPseudostate } from './IPseudostate';
import { IRegion } from './IRegion';
import { IState } from './IState';
import { IStringExpression } from './IStringExpression';
import { IVertex } from './IVertex';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { Vertex } from './Vertex';
import { VisibilityKind } from './VisibilityKind';

export class ConnectionPointReference extends Vertex implements IConnectionPointReference {
  /**
   * entry
   * 
   * @type Pseudostate
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public entry: Set<string> = new Set();

  /**
   * exit
   * 
   * @type Pseudostate
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public exit: Set<string> = new Set();

  /**
   * state
   * 
   * @type State
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite connection
   */
  public state?: string;

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


  constructor(init?: Partial<IConnectionPointReference>) {
    super(init);

    this.entry = init?.entry ? new Set(init.entry) : new Set();
    this.exit = init?.exit ? new Set(init.exit) : new Set();
    this.state = init?.state;
  }
  getEntry(): Set<string> {
    return this.entry;
  }

  setEntry(value: Set<string>): void {
    this.entry = value;
  }

  getExit(): Set<string> {
    return this.exit;
  }

  setExit(value: Set<string>): void {
    this.exit = value;
  }

  getState(): string | undefined {
    return this.state;
  }

  setState(value: string | undefined): void {
    this.state = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IConnectionPointReference {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      entry: this.entry,
      exit: this.exit,
      ...(this.state !== undefined && { state: this.state }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.entry = Array.from(this.entry);
    result.exit = Array.from(this.exit);
    if (this.state !== undefined) {
      result.state = this.state;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): ConnectionPointReference {
    return new ConnectionPointReference(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IConnectionPointReference>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof ConnectionPointReference)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `ConnectionPointReference{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): ConnectionPointReference {
    const instance = new ConnectionPointReference();

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
    if (json.entry && Array.isArray(json.entry)) {
      instance.entry = new Set(json.entry);
    }
    if (json.exit && Array.isArray(json.exit)) {
      instance.exit = new Set(json.exit);
    }
    if (json.state !== undefined) {
      instance.state = json.state;
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
    if (this.entry) {
    }
    if (this.exit) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IConnectionPointReference): ValidationResult {
    if (instance instanceof ConnectionPointReference) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new ConnectionPointReference(instance);
    return temp.validate();
  }
}
