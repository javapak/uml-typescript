/**
 * Interface for Collaboration
 * 
 * @since UML 2.5
 * @package uml
 * @extends StructuredClassifier, BehavioredClassifier
 */
import { IBehavioredClassifier } from './IBehavioredClassifier';
import { IConnectableElement } from './IConnectableElement';
import { IStructuredClassifier } from './IStructuredClassifier';

export interface ICollaboration extends IStructuredClassifier, IBehavioredClassifier {
  /**
   * collaborationRole
   * 
   * @type ConnectableElement
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  collaborationRole?: Set<string>;
}

// Type aliases for Collaboration
export type CollaborationInput = Partial<ICollaboration>;
export type CollaborationOutput = ICollaboration;
