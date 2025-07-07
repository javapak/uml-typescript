/**
 * Implementation class for Port
 * 
 * @since UML 2.5
 * @package uml
 * @extends Property
 */
import { AggregationKind } from './AggregationKind';
import { Comment } from './Comment';
import { Deployment } from './Deployment';
import { IAssociation } from './IAssociation';
import { IClass } from './IClass';
import { IClassifier } from './IClassifier';
import { IComment } from './IComment';
import { IConnectorEnd } from './IConnectorEnd';
import { IDataType } from './IDataType';
import { IDependency } from './IDependency';
import { IDeployment } from './IDeployment';
import { IElement } from './IElement';
import { IInterface } from './IInterface';
import { INamespace } from './INamespace';
import { IPackageableElement } from './IPackageableElement';
import { IPort } from './IPort';
import { IProperty } from './IProperty';
import { IProtocolStateMachine } from './IProtocolStateMachine';
import { IRedefinableElement } from './IRedefinableElement';
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
  public protocol?: IProtocolStateMachine | string = undefined;

  /**
   * redefinedPort
   * 
   * @type Port
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedPort: Set<IPort | string> = new Set();

  // Inherited from Property
  /**
   * eAnnotations
   * 
   * @type EAnnotation
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite eModelElement
   */
  public eAnnotations: Record<string, any>[] = [];

  // Inherited from Property
  /**
   * ownedComment
   * 
   * @type Comment
   * @multiplicity [0..*]
   * @relationship containment
   */
  public ownedComment: Set<IComment> = new Set();

  // Inherited from Property
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  public name?: string = undefined;

  // Inherited from Property
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  public nameExpression?: IStringExpression = undefined;

  // Inherited from Property
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  public visibility?: any = undefined;

  // Inherited from Property
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isLeaf!: boolean;

  // Inherited from Property
  /**
   * isStatic
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isStatic!: boolean;

  // Inherited from Property
  /**
   * type
   * 
   * @type Type
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  public type?: IType | string = undefined;

  // Inherited from Property
  /**
   * isOrdered
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isOrdered!: boolean;

  // Inherited from Property
  /**
   * isUnique
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isUnique!: boolean;

  // Inherited from Property
  /**
   * lowerValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public lowerValue?: IValueSpecification = undefined;

  // Inherited from Property
  /**
   * upperValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public upperValue?: IValueSpecification = undefined;

  // Inherited from Property
  /**
   * isReadOnly
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isReadOnly!: boolean;

  // Inherited from Property
  /**
   * owningTemplateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedParameteredElement
   */
  public owningTemplateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Property
  /**
   * templateParameter
   * 
   * @type TemplateParameter
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite parameteredElement
   */
  public templateParameter?: ITemplateParameter | string = undefined;

  // Inherited from Property
  /**
   * deployment
   * 
   * @type Deployment
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite location
   */
  public deployment: Set<IDeployment> = new Set();

  // Inherited from Property
  /**
   * datatype
   * 
   * @type DataType
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedAttribute
   */
  public datatype?: IDataType | string = undefined;

  // Inherited from Property
  /**
   * interface
   * 
   * @type Interface
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedAttribute
   */
  public interface?: IInterface | string = undefined;

  // Inherited from Property
  /**
   * aggregation
   * 
   * @type AggregationKind
   * @multiplicity [1..1]
   */
  public aggregation!: any;

  // Inherited from Property
  /**
   * associationEnd
   * 
   * @type Property
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite qualifier
   */
  public associationEnd?: IProperty | string = undefined;

  // Inherited from Property
  /**
   * qualifier
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite associationEnd
   */
  public qualifier: IProperty[] = [];

  // Inherited from Property
  /**
   * defaultValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  public defaultValue?: IValueSpecification = undefined;

  // Inherited from Property
  /**
   * isDerived
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isDerived!: boolean;

  // Inherited from Property
  /**
   * isDerivedUnion
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isDerivedUnion!: boolean;

  // Inherited from Property
  /**
   * isID
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  public isID!: boolean;

  // Inherited from Property
  /**
   * owningAssociation
   * 
   * @type Association
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedEnd
   */
  public owningAssociation?: IAssociation | string = undefined;

  // Inherited from Property
  /**
   * redefinedProperty
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public redefinedProperty: Set<IProperty | string> = new Set();

  // Inherited from Property
  /**
   * subsettedProperty
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  public subsettedProperty: Set<IProperty | string> = new Set();

  // Inherited from Property
  /**
   * association
   * 
   * @type Association
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite memberEnd
   */
  public association?: IAssociation | string = undefined;

  constructor(init?: Partial<IPort>) {
    super(init);
    this.isBehavior = init?.isBehavior!;
    this.isConjugated = init?.isConjugated!;
    this.isService = init?.isService!;
    this.protocol = init?.protocol ?? undefined;
    this.redefinedPort = init?.redefinedPort ?? new Set();
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

  getProtocol(): IProtocolStateMachine | string | undefined {
    return this.protocol;
  }

  setProtocol(value: IProtocolStateMachine | string | undefined): void {
    this.protocol = value;
  }

  getRedefinedPort(): Set<IPort | string> {
    return this.redefinedPort;
  }

  setRedefinedPort(value: Set<IPort | string>): void {
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
