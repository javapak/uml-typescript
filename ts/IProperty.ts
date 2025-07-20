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
import { IExtensionEnd } from './IExtensionEnd';
import { IInterface } from './IInterface';
import { IPort } from './IPort';
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
  datatype?: string;
  /**
   * interface
   * 
   * @type Interface
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite ownedAttribute
   */
  interface?: string;
  /**
   * aggregation
   * 
   * @type AggregationKind
   * @multiplicity [1..1]
   */
  aggregation: AggregationKind;
  /**
   * associationEnd
   * 
   * @type Property
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite qualifier
   */
  associationEnd?: string;
  /**
   * qualifier
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite associationEnd
   */
  qualifier?: IProperty[];
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
  owningAssociation?: string;
  /**
   * redefinedProperty
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  redefinedProperty?: Set<string>;
  /**
   * subsettedProperty
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  subsettedProperty?: Set<string>;
  /**
   * association
   * 
   * @type Association
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite memberEnd
   */
  association?: string;
}

// Type aliases for Property
export type PropertyInput = Partial<IProperty>;
export type PropertyOutput = IProperty;
export type PropertyUnion = IProperty | IPort | IExtensionEnd;
