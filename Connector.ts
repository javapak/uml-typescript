/**
 * Implementation class for Connector
 * 
 * @since UML 2.5
 * @package uml
 * @extends Feature
 */
import { Feature } from './Feature';
import { IAssociation } from './IAssociation';
import { IBehavior } from './IBehavior';
import { IComment } from './IComment';
import { IConnector } from './IConnector';
import { IConnectorEnd } from './IConnectorEnd';
import { IFeature } from './IFeature';
import { IStringExpression } from './IStringExpression';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { VisibilityKind } from './VisibilityKind';

export class Connector extends Feature implements IConnector {
  /**
   * contract
   * 
   * @type Behavior
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public contract: Set<string> = new Set();

  /**
   * end
   * 
   * @type ConnectorEnd
   * @multiplicity [2..*]
   * @relationship containment
   */
  public end: IConnectorEnd[] = [];

  /**
   * redefinedConnector
   * 
   * @type Connector
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedConnector: Set<string> = new Set();

  /**
   * type
   * 
   * @type Association
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: string;

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
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  /**
   * isStatic
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isStatic!: boolean;


  constructor(init?: Partial<IConnector>) {
    super(init);

    this.contract = init?.contract ? new Set(init.contract) : new Set();
    this.end = init?.end ? [...init.end] : [];
    this.redefinedConnector = init?.redefinedConnector ? new Set(init.redefinedConnector) : new Set();
    this.type = init?.type;
  }
  getContract(): Set<string> {
    return this.contract;
  }

  setContract(value: Set<string>): void {
    this.contract = value;
  }

  getEnd(): IConnectorEnd[] {
    return this.end;
  }

  setEnd(value: IConnectorEnd[]): void {
    this.end = value;
  }

  getRedefinedConnector(): Set<string> {
    return this.redefinedConnector;
  }

  setRedefinedConnector(value: Set<string>): void {
    this.redefinedConnector = value;
  }

  getType(): string | undefined {
    return this.type;
  }

  setType(value: string | undefined): void {
    this.type = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IConnector {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      contract: this.contract,
      end: this.end,
      redefinedConnector: this.redefinedConnector,
      ...(this.type !== undefined && { type: this.type }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.contract = Array.from(this.contract);
    result.end = [...this.end];
    result.redefinedConnector = Array.from(this.redefinedConnector);
    if (this.type !== undefined) {
      result.type = this.type;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Connector {
    return new Connector(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IConnector>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Connector)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Connector{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Connector {
    const instance = new Connector();

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
    instance.isLeaf = json.isLeaf;
    instance.isStatic = json.isStatic;
    if (json.contract && Array.isArray(json.contract)) {
      instance.contract = new Set(json.contract);
    }
    if (json.end && Array.isArray(json.end)) {
      instance.end = [...json.end];
    }
    if (json.redefinedConnector && Array.isArray(json.redefinedConnector)) {
      instance.redefinedConnector = new Set(json.redefinedConnector);
    }
    if (json.type !== undefined) {
      instance.type = json.type;
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
    if (this.isStatic == null) {
      errors.push({
        property: 'isStatic',
        message: 'isStatic is required',
        code: 'REQUIRED'
      });
    }
    if (this.isStatic !== undefined) {
      if (typeof this.isStatic !== 'boolean') {
        errors.push({
          property: 'isStatic',
          message: 'isStatic must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isStatic
        });
      }
    }
    if (this.contract) {
    }
    if (this.end == null) {
      errors.push({
        property: 'end',
        message: 'end is required',
        code: 'REQUIRED'
      });
    }
    if (this.end) {
      if (Array.from(this.end).length < 2) {
        errors.push({
          property: 'end',
          message: 'end must have at least 2 elements',
          code: 'MIN_LENGTH'
        });
      }
    }
    if (this.redefinedConnector) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IConnector): ValidationResult {
    if (instance instanceof Connector) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Connector(instance);
    return temp.validate();
  }
}
