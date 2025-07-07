/**
 * Interface for Property
 * 
 * @since UML 2.5
 * @package uml
 * @extends StructuralFeature, ConnectableElement, DeploymentTarget
 */
import { AggregationKind } from './AggregationKind';
import { IAssociation } from './IAssociation';
import { IConnectableElement } from './IConnectableElement';
import { IDataType } from './IDataType';
import { IDeploymentTarget } from './IDeploymentTarget';
import { IInterface } from './IInterface';
import { IStructuralFeature } from './IStructuralFeature';
import { IValueSpecification } from './IValueSpecification';
import { ValueSpecification } from './ValueSpecification';

export interface IProperty extends IStructuralFeature, IConnectableElement, IDeploymentTarget {
  /**
   * datatype
   * 
   * @type DataType
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedAttribute
   */
  datatype?: IDataType | string;
  /**
   * interface
   * 
   * @type Interface
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedAttribute
   */
  interface?: IInterface | string;
  /**
   * aggregation
   * 
   * @type AggregationKind
   * @multiplicity [1..1]
   */
  aggregation: any;
  /**
   * associationEnd
   * 
   * @type Property
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite qualifier
   */
  associationEnd?: IProperty | string;
  /**
   * qualifier
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite associationEnd
   */
  qualifier: IProperty[];
  /**
   * defaultValue
   * 
   * @type ValueSpecification
   * @multiplicity [0..1]
   * @relationship containment
   */
  defaultValue?: IValueSpecification;
  /**
   * isDerived
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isDerived: boolean;
  /**
   * isDerivedUnion
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isDerivedUnion: boolean;
  /**
   * isID
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isID: boolean;
  /**
   * owningAssociation
   * 
   * @type Association
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedEnd
   */
  owningAssociation?: IAssociation | string;
  /**
   * redefinedProperty
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  redefinedProperty: Set<IProperty | string>;
  /**
   * subsettedProperty
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  subsettedProperty: Set<IProperty | string>;
  /**
   * association
   * 
   * @type Association
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite memberEnd
   */
  association?: IAssociation | string;
}

// Type aliases for Property
export type PropertyInput = Partial<IProperty>;
export type PropertyOutput = IProperty;
export type PropertyUnion = IProperty | IPort | IExtensionEnd;
