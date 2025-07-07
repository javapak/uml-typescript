/**
 * Interface for InformationFlow
 * 
 * @since UML 2.5
 * @package uml
 * @extends PackageableElement, DirectedRelationship
 */
import { IActivityEdge } from './IActivityEdge';
import { IClassifier } from './IClassifier';
import { IConnector } from './IConnector';
import { IDirectedRelationship } from './IDirectedRelationship';
import { IMessage } from './IMessage';
import { INamedElement } from './INamedElement';
import { IPackageableElement } from './IPackageableElement';
import { IRelationship } from './IRelationship';

export interface IInformationFlow extends IPackageableElement, IDirectedRelationship {
  /**
   * conveyed
   * 
   * @type Classifier
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  conveyed: Set<IClassifier | string>;
  /**
   * informationSource
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  informationSource: Set<INamedElement | string>;
  /**
   * informationTarget
   * 
   * @type NamedElement
   * @multiplicity [1..*]
   * @relationship cross-reference
   */
  informationTarget: Set<INamedElement | string>;
  /**
   * realization
   * 
   * @type Relationship
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  realization: Set<IRelationship | string>;
  /**
   * realizingActivityEdge
   * 
   * @type ActivityEdge
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  realizingActivityEdge: Set<IActivityEdge | string>;
  /**
   * realizingConnector
   * 
   * @type Connector
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  realizingConnector: Set<IConnector | string>;
  /**
   * realizingMessage
   * 
   * @type Message
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  realizingMessage: Set<IMessage | string>;
}

// Type aliases for InformationFlow
export type InformationFlowInput = Partial<IInformationFlow>;
export type InformationFlowOutput = IInformationFlow;
