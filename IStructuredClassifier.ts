/**
 * Interface for StructuredClassifier
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Classifier
 */
import { Connector } from './Connector';
import { IClassifier } from './IClassifier';
import { IConnector } from './IConnector';
import { IProperty } from './IProperty';
import { Property } from './Property';

export interface IStructuredClassifier extends IClassifier {
  /**
   * ownedAttribute
   * 
   * @type Property
   * @multiplicity [0..*]
   * @relationship containment
   */
  ownedAttribute?: IProperty[];
  /**
   * ownedConnector
   * 
   * @type Connector
   * @multiplicity [0..*]
   * @relationship containment
   */
  ownedConnector?: Set<IConnector>;
}

// Type aliases for StructuredClassifier
export type StructuredClassifierInput = Partial<IStructuredClassifier>;
export type StructuredClassifierOutput = IStructuredClassifier;
export type StructuredClassifierUnion = IStructuredClassifier | ICollaboration | IEncapsulatedClassifier;
