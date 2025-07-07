/**
 * Interface for RedefinableElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { INamedElement } from './INamedElement';

export interface IRedefinableElement extends INamedElement {
  /**
   * isLeaf
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isLeaf: boolean;
}

// Type aliases for RedefinableElement
export type RedefinableElementInput = Partial<IRedefinableElement>;
export type RedefinableElementOutput = IRedefinableElement;
export type RedefinableElementUnion = IRedefinableElement | IClassifier | IFeature | IRegion | IState | ITransition | IRedefinableTemplateSignature | IExtensionPoint | IActivityEdge | IActivityNode;
