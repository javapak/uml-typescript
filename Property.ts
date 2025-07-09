/**
 * Implementation class for Property
 * 
 * @since UML 2.5
 * @package uml
 * @extends StructuralFeature, ConnectableElement, DeploymentTarget
 */
import { AggregationKind } from './AggregationKind';
import { ConnectableElement } from './ConnectableElement';
import { DeploymentTarget } from './DeploymentTarget';
import { IAssociation } from './IAssociation';
import { IComment } from './IComment';
import { IConnectableElement } from './IConnectableElement';
import { IDataType } from './IDataType';
import { IDeployment } from './IDeployment';
import { IDeploymentTarget } from './IDeploymentTarget';
import { IInterface } from './IInterface';
import { IProperty } from './IProperty';
import { IStringExpression } from './IStringExpression';
import { IStructuralFeature } from './IStructuralFeature';
import { ITemplateParameter } from './ITemplateParameter';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';
import { StringExpression } from './StringExpression';
import { StructuralFeature } from './StructuralFeature';
import { ValidationError, ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';
import { VisibilityKind } from './VisibilityKind';

export class Property extends StructuralFeature implements IProperty {
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
  public aggregation!: AggregationKind;

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


  constructor(init?: Partial<IProperty>) {
    super(init);

    this.datatype = init?.datatype;
    this.interface = init?.interface;
    this.aggregation = init?.aggregation!;
    this.associationEnd = init?.associationEnd;
    this.qualifier = init?.qualifier ? [...init.qualifier] : [];
    this.defaultValue = init?.defaultValue;
    this.isDerived = init?.isDerived ?? false;
    this.isDerivedUnion = init?.isDerivedUnion ?? false;
    this.isID = init?.isID ?? false;
    this.owningAssociation = init?.owningAssociation;
    this.redefinedProperty = init?.redefinedProperty ? new Set(init.redefinedProperty) : new Set();
    this.subsettedProperty = init?.subsettedProperty ? new Set(init.subsettedProperty) : new Set();
    this.association = init?.association;
  }
  getDatatype(): string | undefined {
    return this.datatype;
  }

  setDatatype(value: string | undefined): void {
    this.datatype = value;
  }

  getInterface(): string | undefined {
    return this.interface;
  }

  setInterface(value: string | undefined): void {
    this.interface = value;
  }

  getAggregation(): AggregationKind {
    return this.aggregation;
  }

  setAggregation(value: AggregationKind): void {
    this.aggregation = value;
  }

  getAssociationEnd(): string | undefined {
    return this.associationEnd;
  }

  setAssociationEnd(value: string | undefined): void {
    this.associationEnd = value;
  }

  getQualifier(): IProperty[] {
    return this.qualifier;
  }

  setQualifier(value: IProperty[]): void {
    this.qualifier = value;
  }

  getDefaultValue(): IValueSpecification | undefined {
    return this.defaultValue;
  }

  setDefaultValue(value: IValueSpecification | undefined): void {
    this.defaultValue = value;
  }

  getIsDerived(): boolean {
    return this.isDerived;
  }

  setIsDerived(value: boolean): void {
    this.isDerived = value;
  }

  getIsDerivedUnion(): boolean {
    return this.isDerivedUnion;
  }

  setIsDerivedUnion(value: boolean): void {
    this.isDerivedUnion = value;
  }

  getIsID(): boolean {
    return this.isID;
  }

  setIsID(value: boolean): void {
    this.isID = value;
  }

  getOwningAssociation(): string | undefined {
    return this.owningAssociation;
  }

  setOwningAssociation(value: string | undefined): void {
    this.owningAssociation = value;
  }

  getRedefinedProperty(): Set<string> {
    return this.redefinedProperty;
  }

  setRedefinedProperty(value: Set<string>): void {
    this.redefinedProperty = value;
  }

  getSubsettedProperty(): Set<string> {
    return this.subsettedProperty;
  }

  setSubsettedProperty(value: Set<string>): void {
    this.subsettedProperty = value;
  }

  getAssociation(): string | undefined {
    return this.association;
  }

  setAssociation(value: string | undefined): void {
    this.association = value;
  }

  /**
   * Converts this instance to a plain object matching the interface
   */
  toJSON(): IProperty {
    const parentJson = super.toJSON();
    return {
      ...parentJson,
      ...(this.datatype !== undefined && { datatype: this.datatype }),
      ...(this.interface !== undefined && { interface: this.interface }),
      aggregation: this.aggregation,
      ...(this.associationEnd !== undefined && { associationEnd: this.associationEnd }),
      qualifier: this.qualifier,
      ...(this.defaultValue !== undefined && { defaultValue: this.defaultValue }),
      isDerived: this.isDerived,
      isDerivedUnion: this.isDerivedUnion,
      isID: this.isID,
      ...(this.owningAssociation !== undefined && { owningAssociation: this.owningAssociation }),
      redefinedProperty: this.redefinedProperty,
      subsettedProperty: this.subsettedProperty,
      ...(this.association !== undefined && { association: this.association }),
    };
  }

  /**
   * Converts this instance to a JSON-serializable object
   * (Sets are converted to Arrays for JSON compatibility)
   */
  toJSONSerialized(): any {
    const parentJson = super.toJSONSerialized() ? super.toJSONSerialized() : super.toJSON();
    const result: any = { ...parentJson };

    if (this.datatype !== undefined) {
      result.datatype = this.datatype;
    }
    if (this.interface !== undefined) {
      result.interface = this.interface;
    }
    result.aggregation = this.aggregation;
    if (this.associationEnd !== undefined) {
      result.associationEnd = this.associationEnd;
    }
    result.qualifier = [...this.qualifier];
    if (this.defaultValue !== undefined) {
      result.defaultValue = this.defaultValue;
    }
    result.isDerived = this.isDerived;
    result.isDerivedUnion = this.isDerivedUnion;
    result.isID = this.isID;
    if (this.owningAssociation !== undefined) {
      result.owningAssociation = this.owningAssociation;
    }
    result.redefinedProperty = Array.from(this.redefinedProperty);
    result.subsettedProperty = Array.from(this.subsettedProperty);
    if (this.association !== undefined) {
      result.association = this.association;
    }

    return result;
  }

  /**
   * Creates a shallow copy of this instance
   */
  clone(): Property {
    return new Property(this);
  }

  /**
   * Updates this instance with values from another object
   */
  update(values: Partial<IProperty>): void {
    Object.assign(this, values);
  }

  /**
   * Checks if this instance equals another object
   */
  equals(other: any): boolean {
    if (!(other instanceof Property)) {
      return false;
    }
    return JSON.stringify(this.toJSONSerialized()) === JSON.stringify(other.toJSONSerialized());
  }

  /**
   * Returns a string representation of this instance
   */
  toString(): string {
    return `Property{name: ${this.name || 'unnamed'}}`;
  }

  /**
   * Creates an instance from a JSON-serialized object
   */
  static fromJSON(json: any): Property {
    const instance = new Property();

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
    // Validate inherited properties
    const parentResult = super.validate();
    errors.push(...parentResult.errors);
    return { isValid: errors.length === 0, errors };
  }

  static validate(instance: IProperty): ValidationResult {
    if (instance instanceof Property) {
      return instance.validate();
    }
    // Validate plain object
    const temp = new Property(instance);
    return temp.validate();
  }
}
