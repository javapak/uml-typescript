/**
 * Implementation class for Port
 * 
 * @since UML 2.5
 * @package uml
 * @extends Property
 */
import { AggregationKind } from './AggregationKind';
import { IAssociation } from './IAssociation';
import { IComment } from './IComment';
import { IDataType } from './IDataType';
import { IDeployment } from './IDeployment';
import { IInterface } from './IInterface';
import { IPort } from './IPort';
import { IProperty } from './IProperty';
import { IProtocolStateMachine } from './IProtocolStateMachine';
import { IStringExpression } from './IStringExpression';
import { ITemplateParameter } from './ITemplateParameter';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';
import { Property } from './Property';
import { StringExpression } from './StringExpression';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class Port extends Property implements IPort {
  /**
   * isBehavior
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isBehavior!: boolean;

  /**
   * isConjugated
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isConjugated!: boolean;

  /**
   * isService
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isService!: boolean;

  /**
   * protocol
   * 
   * @type ProtocolStateMachine
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public protocol?: string;

  /**
   * redefinedPort
   * 
   * @type Port
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedPort: Set<string> = new Set();

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

  /**
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: string;

  /**
   * isOrdered
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isOrdered!: boolean;

  /**
   * isUnique
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isUnique!: boolean;

  /**
   * lowerValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public lowerValue?: IValueSpecification;

  /**
   * upperValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public upperValue?: IValueSpecification;

  /**
   * isReadOnly
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isReadOnly!: boolean;

  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: string;

  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: string;

  /**
   * deployment
   * 
   * @type Deployment
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite location
   */
  public deployment: Set<IDeployment> = new Set();

  /**
   * datatype
   * 
   * @type DataType
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedAttribute
   */
  public datatype?: string;

  /**
   * interface
   * 
   * @type Interface
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedAttribute
   */
  public interface?: string;

  /**
   * aggregation
   * 
   * @type AggregationKind
   * @multiplicity [1..1]
   */
  public aggregation: AggregationKind = AggregationKind.NONE;
  /**
   * associationEnd
   * 
   * @type Property
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite qualifier
   */
  public associationEnd?: string;

  /**
   * qualifier
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite associationEnd
   */
  public qualifier: IProperty[] = [];

  /**
   * defaultValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public defaultValue?: IValueSpecification;

  /**
   * isDerived
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isDerived!: boolean;

  /**
   * isDerivedUnion
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isDerivedUnion!: boolean;

  /**
   * isID
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isID!: boolean;

  /**
   * owningAssociation
   * 
   * @type Association
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedEnd
   */
  public owningAssociation?: string;

  /**
   * redefinedProperty
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedProperty: Set<string> = new Set();

  /**
   * subsettedProperty
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public subsettedProperty: Set<string> = new Set();

  /**
   * association
   * 
   * @type Association
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite memberEnd
   */
  public association?: string;


  constructor(init?: Partial<IPort>) {
    super(init);

    this.isBehavior = init?.isBehavior ?? false;
    this.isConjugated = init?.isConjugated ?? false;
    this.isService = init?.isService ?? false;
    this.protocol = init?.protocol;
    this.redefinedPort = init?.redefinedPort ? new Set(init.redefinedPort) : new Set();
  }
  getIsBehavior(): boolean {
    return this.isBehavior;
  }

  setIsBehavior(value: boolean): void {
    this.isBehavior = value;
  }

  getIsConjugated(): boolean {
    return this.isConjugated;
  }

  setIsConjugated(value: boolean): void {
    this.isConjugated = value;
  }

  getIsService(): boolean {
    return this.isService;
  }

  setIsService(value: boolean): void {
    this.isService = value;
  }

  getProtocol(): string | undefined {
    return this.protocol;
  }

  setProtocol(value: string | undefined): void {
    this.protocol = value;
  }

  getRedefinedPort(): Set<string> {
    return this.redefinedPort;
  }

  setRedefinedPort(value: Set<string>): void {
    this.redefinedPort = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IPort {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      isBehavior: this.isBehavior,
      isConjugated: this.isConjugated,
      isService: this.isService,
      ...(this.protocol !== undefined && { protocol: this.protocol }),
      redefinedPort: this.redefinedPort,
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    result.isBehavior = this.isBehavior;
    result.isConjugated = this.isConjugated;
    result.isService = this.isService;
    if (this.protocol !== undefined) {
      result.protocol = this.protocol;
    }
    result.redefinedPort = Array.from(this.redefinedPort);

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Port {
    return new Port(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IPort>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Port)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Port{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Port {
    const instance = new Port();

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
    if (json.type !== undefined) {
      instance.type = json.type;
    }
    instance.isOrdered = json.isOrdered;
    instance.isUnique = json.isUnique;
    if (json.lowerValue !== undefined) {
      instance.lowerValue = json.lowerValue;
    }
    if (json.upperValue !== undefined) {
      instance.upperValue = json.upperValue;
    }
    instance.isReadOnly = json.isReadOnly;
    if (json.owningTemplateParameter !== undefined) {
      instance.owningTemplateParameter = json.owningTemplateParameter;
    }
    if (json.templateParameter !== undefined) {
      instance.templateParameter = json.templateParameter;
    }
    if (json.deployment && Array.isArray(json.deployment)) {
      instance.deployment = new Set(json.deployment);
    }
    if (json.datatype !== undefined) {
      instance.datatype = json.datatype;
    }
    if (json.interface !== undefined) {
      instance.interface = json.interface;
    }
    instance.aggregation = json.aggregation;
    if (json.associationEnd !== undefined) {
      instance.associationEnd = json.associationEnd;
    }
    if (json.qualifier && Array.isArray(json.qualifier)) {
      instance.qualifier = [...json.qualifier];
    }
    if (json.defaultValue !== undefined) {
      instance.defaultValue = json.defaultValue;
    }
    instance.isDerived = json.isDerived;
    instance.isDerivedUnion = json.isDerivedUnion;
    instance.isID = json.isID;
    if (json.owningAssociation !== undefined) {
      instance.owningAssociation = json.owningAssociation;
    }
    if (json.redefinedProperty && Array.isArray(json.redefinedProperty)) {
      instance.redefinedProperty = new Set(json.redefinedProperty);
    }
    if (json.subsettedProperty && Array.isArray(json.subsettedProperty)) {
      instance.subsettedProperty = new Set(json.subsettedProperty);
    }
    if (json.association !== undefined) {
      instance.association = json.association;
    }
    instance.isBehavior = json.isBehavior;
    instance.isConjugated = json.isConjugated;
    instance.isService = json.isService;
    if (json.protocol !== undefined) {
      instance.protocol = json.protocol;
    }
    if (json.redefinedPort && Array.isArray(json.redefinedPort)) {
      instance.redefinedPort = new Set(json.redefinedPort);
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
    if (this.isOrdered == null) {
      errors.push({
        property: 'isOrdered',
        message: 'isOrdered is required',
        code: 'REQUIRED'
      });
    }
    if (this.isOrdered !== undefined) {
      if (typeof this.isOrdered !== 'boolean') {
        errors.push({
          property: 'isOrdered',
          message: 'isOrdered must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isOrdered
        });
      }
    }
    if (this.isUnique == null) {
      errors.push({
        property: 'isUnique',
        message: 'isUnique is required',
        code: 'REQUIRED'
      });
    }
    if (this.isUnique !== undefined) {
      if (typeof this.isUnique !== 'boolean') {
        errors.push({
          property: 'isUnique',
          message: 'isUnique must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isUnique
        });
      }
    }
    if (this.isReadOnly == null) {
      errors.push({
        property: 'isReadOnly',
        message: 'isReadOnly is required',
        code: 'REQUIRED'
      });
    }
    if (this.isReadOnly !== undefined) {
      if (typeof this.isReadOnly !== 'boolean') {
        errors.push({
          property: 'isReadOnly',
          message: 'isReadOnly must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isReadOnly
        });
      }
    }
    if (this.deployment) {
    }
    if (this.aggregation == null) {
      errors.push({
        property: 'aggregation',
        message: 'aggregation is required',
        code: 'REQUIRED'
      });
    }
    if (this.aggregation !== undefined) {
    }
    if (this.qualifier) {
    }
    if (this.isDerived == null) {
      errors.push({
        property: 'isDerived',
        message: 'isDerived is required',
        code: 'REQUIRED'
      });
    }
    if (this.isDerived !== undefined) {
      if (typeof this.isDerived !== 'boolean') {
        errors.push({
          property: 'isDerived',
          message: 'isDerived must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isDerived
        });
      }
    }
    if (this.isDerivedUnion == null) {
      errors.push({
        property: 'isDerivedUnion',
        message: 'isDerivedUnion is required',
        code: 'REQUIRED'
      });
    }
    if (this.isDerivedUnion !== undefined) {
      if (typeof this.isDerivedUnion !== 'boolean') {
        errors.push({
          property: 'isDerivedUnion',
          message: 'isDerivedUnion must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isDerivedUnion
        });
      }
    }
    if (this.isID == null) {
      errors.push({
        property: 'isID',
        message: 'isID is required',
        code: 'REQUIRED'
      });
    }
    if (this.isID !== undefined) {
      if (typeof this.isID !== 'boolean') {
        errors.push({
          property: 'isID',
          message: 'isID must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isID
        });
      }
    }
    if (this.redefinedProperty) {
    }
    if (this.subsettedProperty) {
    }
    if (this.isBehavior == null) {
      errors.push({
        property: 'isBehavior',
        message: 'isBehavior is required',
        code: 'REQUIRED'
      });
    }
    if (this.isBehavior !== undefined) {
      if (typeof this.isBehavior !== 'boolean') {
        errors.push({
          property: 'isBehavior',
          message: 'isBehavior must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isBehavior
        });
      }
    }
    if (this.isConjugated == null) {
      errors.push({
        property: 'isConjugated',
        message: 'isConjugated is required',
        code: 'REQUIRED'
      });
    }
    if (this.isConjugated !== undefined) {
      if (typeof this.isConjugated !== 'boolean') {
        errors.push({
          property: 'isConjugated',
          message: 'isConjugated must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isConjugated
        });
      }
    }
    if (this.isService == null) {
      errors.push({
        property: 'isService',
        message: 'isService is required',
        code: 'REQUIRED'
      });
    }
    if (this.isService !== undefined) {
      if (typeof this.isService !== 'boolean') {
        errors.push({
          property: 'isService',
          message: 'isService must be a boolean',
          code: 'TYPE_ERROR',
          value: this.isService
        });
      }
    }
    if (this.redefinedPort) {
    }
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IPort): ValidationResult {
    if (instance instanceof Port) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Port(instance);
    return temp.validate();
  }
}
