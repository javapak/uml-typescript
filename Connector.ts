/**
 * Implementation class for Connector
 * 
 * @since UML 2.5
 * @package uml
 * @extends Feature
 */
import { Comment } from './Comment';
import { ConnectorEnd } from './ConnectorEnd';
import { ConnectorKind } from './ConnectorKind';
import { Feature } from './Feature';
import { IAssociation } from './IAssociation';
import { IBehavior } from './IBehavior';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IConnector } from './IConnector';
import { IConnectorEnd } from './IConnectorEnd';
import { IDependency } from './IDependency';
import { IElement } from './IElement';
import { IFeature } from './IFeature';
import { INamespace } from './INamespace';
import { IRedefinableElement } from './IRedefinableElement';
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
  public contract: Set<IBehavior | string> = new Set();

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
  public redefinedConnector: Set<IConnector | string> = new Set();

  /**
   * type
   * 
   * @type Association
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: IAssociation | string = undefined;

  // Inherited from Feature
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Feature
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from Feature
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from Feature
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from Feature
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from Feature
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from Feature
  /**
   * isStatic
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isStatic!: boolean;

  constructor(init?: Partial<IConnector>) {
    super(init);
    this.contract = init?.contract ?? new Set();
    this.end = init?.end ?? [];
    this.redefinedConnector = init?.redefinedConnector ?? new Set();
    this.type = init?.type ?? undefined;
  }
  getContract(): Set<IBehavior | string> {
    return this.contract;
  }

  setContract(value: Set<IBehavior | string>): void {
    this.contract = value;
  }

  getEnd(): IConnectorEnd[] {
    return this.end;
  }

  setEnd(value: IConnectorEnd[]): void {
    this.end = value;
  }

  getRedefinedConnector(): Set<IConnector | string> {
    return this.redefinedConnector;
  }

  setRedefinedConnector(value: Set<IConnector | string>): void {
    this.redefinedConnector = value;
  }

  getType(): IAssociation | string | undefined {
    return this.type;
  }

  setType(value: IAssociation | string | undefined): void {
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
