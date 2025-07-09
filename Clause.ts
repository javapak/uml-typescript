/**
 * Implementation class for Clause
 * 
 * @since UML 2.5
 * @package uml
 * @extends Element
 */
import { Element } from './Element';
import { IClause } from './IClause';
import { IComment } from './IComment';
import { IElement } from './IElement';
import { IExecutableNode } from './IExecutableNode';
import { IOutputPin } from './IOutputPin';
import { ValidationError, ValidationResult } from './ValidationTypes';

export class Clause extends Element implements IClause {
  /**
   * body
   * 
   * @type ExecutableNode
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public body: Set<string> = new Set();

  /**
   * bodyOutput
   * 
   * @type OutputPin
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public bodyOutput: string[] = [];

  /**
   * decider
   * 
   * @type OutputPin
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  public decider!: string;

  /**
   * predecessorClause
   * 
   * @type Clause
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite successorClause
   */
  public predecessorClause: Set<string> = new Set();

  /**
   * successorClause
   * 
   * @type Clause
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite predecessorClause
   */
  public successorClause: Set<string> = new Set();

  /**
   * test
   * 
   * @type ExecutableNode
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  public test: Set<string> = new Set();

  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();


  constructor(init?: Partial<IClause>) {
    super(init);

    this.body = init?.body ? new Set(init.body) : new Set();
    this.bodyOutput = init?.bodyOutput ? [...init.bodyOutput] : [];
    this.decider = init?.decider ?? '';
    this.predecessorClause = init?.predecessorClause ? new Set(init.predecessorClause) : new Set();
    this.successorClause = init?.successorClause ? new Set(init.successorClause) : new Set();
    this.test = init?.test ? new Set(init.test) : new Set();
  }
  getBody(): Set<string> {
    return this.body;
  }

  setBody(value: Set<string>): void {
    this.body = value;
  }

  getBodyOutput(): string[] {
    return this.bodyOutput;
  }

  setBodyOutput(value: string[]): void {
    this.bodyOutput = value;
  }

  getDecider(): string {
    return this.decider;
  }

  setDecider(value: string): void {
    this.decider = value;
  }

  getPredecessorClause(): Set<string> {
    return this.predecessorClause;
  }

  setPredecessorClause(value: Set<string>): void {
    this.predecessorClause = value;
  }

  getSuccessorClause(): Set<string> {
    return this.successorClause;
  }

  setSuccessorClause(value: Set<string>): void {
    this.successorClause = value;
  }

  getTest(): Set<string> {
    return this.test;
  }

  setTest(value: Set<string>): void {
    this.test = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IClause {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      body: this.body,
      bodyOutput: this.bodyOutput,
      decider: this.decider,
      predecessorClause: this.predecessorClause,
      successorClause: this.successorClause,
      test: this.test,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.body = Array.from(this.body);
    result.bodyOutput = [...this.bodyOutput];
    result.decider = this.decider;
    result.predecessorClause = Array.from(this.predecessorClause);
    result.successorClause = Array.from(this.successorClause);
    result.test = Array.from(this.test);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Clause {
    return new Clause(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IClause>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Clause)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Clause{${Object.keys(this).length} properties}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Clause {
    const instance = new Clause();

    if (json.ownedComment && Array.isArray(json.ownedComment)) {
      instance.ownedComment = new Set(json.ownedComment);
    }
    if (json.body && Array.isArray(json.body)) {
      instance.body = new Set(json.body);
    }
    if (json.bodyOutput && Array.isArray(json.bodyOutput)) {
      instance.bodyOutput = [...json.bodyOutput];
    }
    instance.decider = json.decider;
    if (json.predecessorClause && Array.isArray(json.predecessorClause)) {
      instance.predecessorClause = new Set(json.predecessorClause);
    }
    if (json.successorClause && Array.isArray(json.successorClause)) {
      instance.successorClause = new Set(json.successorClause);
    }
    if (json.test && Array.isArray(json.test)) {
      instance.test = new Set(json.test);
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
    if (this.body) {
    }
    if (this.bodyOutput) {
    }
    if (this.decider == null) {
      errors.push({
        property: 'decider',
        message: 'decider is required',
        code: 'REQUIRED'
      });
    }
    if (this.predecessorClause) {
    }
    if (this.successorClause) {
    }
    if (this.test == null) {
      errors.push({
        property: 'test',
        message: 'test is required',
        code: 'REQUIRED'
      });
    }
    if (this.test) {
      if (Array.from(this.test).length < 1) {
        errors.push({
          property: 'test',
          message: 'test must have at least 1 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IClause): ValidationResult {
    if (instance instanceof Clause) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Clause(instance);
    return temp.validate();
  }
}
