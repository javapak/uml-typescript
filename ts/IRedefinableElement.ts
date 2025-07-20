/**
 * Interface for RedefinableElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { IActivityEdge } from './IActivityEdge';
import { IActivityNode } from './IActivityNode';
import { IClassifier } from './IClassifier';
import { IExtensionPoint } from './IExtensionPoint';
import { IFeature } from './IFeature';
import { INamedElement } from './INamedElement';
import { IRedefinableTemplateSignature } from './IRedefinableTemplateSignature';
import { IRegion } from './IRegion';
import { IState } from './IState';
import { ITransition } from './ITransition';

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
