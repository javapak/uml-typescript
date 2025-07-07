/**
 * Interface for CollaborationUse
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement
 */
import { Dependency } from './Dependency';
import { ICollaboration } from './ICollaboration';
import { IDependency } from './IDependency';
import { INamedElement } from './INamedElement';

export interface ICollaborationUse extends INamedElement {
  /**
   * roleBinding
   * 
   * @type Dependency
   * @multiplicity [0..*]
   * @relationship containment
   */
  roleBinding: Set<IDependency>;
  /**
   * type
   * 
   * @type Collaboration
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  type: ICollaboration | string;
}

// Type aliases for CollaborationUse
export type CollaborationUseInput = Partial<ICollaborationUse>;
export type CollaborationUseOutput = ICollaborationUse;
