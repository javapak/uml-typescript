/**
 * Interface for Association
 * 
 * @since UML 2.5
 * @package uml
 * @extends Classifier, Relationship
 */
import { IAssociationClass } from './IAssociationClass';
import { IClassifier } from './IClassifier';
import { ICommunicationPath } from './ICommunicationPath';
import { IExtension } from './IExtension';
import { IProperty } from './IProperty';
import { IRelationship } from './IRelationship';
import { Property } from './Property';

export interface IAssociation extends IClassifier, IRelationship {
  /**
   * isDerived
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isDerived: boolean;
  /**
   * memberEnd
   * 
   * @type Property
   * @multiplicity [2..*]
   * @relationship cross-reference
   * @opposite association
   */
  memberEnd: string[];
  /**
   * ownedEnd
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite owningAssociation
   */
  ownedEnd?: IProperty[];
  /**
   * navigableOwnedEnd
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  navigableOwnedEnd?: Set<string>;
}

// Type aliases for Association
export type AssociationInput = Partial<IAssociation>;
export type AssociationOutput = IAssociation;
export type AssociationUnion = IAssociation | IExtension | ICommunicationPath | IAssociationClass;
