/**
 * Interface for NamedElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Element
 */
import { IElement } from './IElement';
import { IStringExpression } from './IStringExpression';
import { StringExpression } from './StringExpression';
import { VisibilityKind } from './VisibilityKind';

export interface INamedElement extends IElement {
  /**
   * name
   * 
   * @type String
   * @multiplicity [0..1]
   */
  name?: string;
  /**
   * nameExpression
   * 
   * @type StringExpression
   * @multiplicity [0..1]
   * @relationship containment
   */
  nameExpression?: IStringExpression;
  /**
   * visibility
   * 
   * @type VisibilityKind
   * @multiplicity [0..1]
   */
  visibility?: any;
}

// Type aliases for NamedElement
export type NamedElementInput = Partial<INamedElement>;
export type NamedElementOutput = INamedElement;
export type NamedElementUnion = INamedElement | INamespace | IPackageableElement | ITypedElement | IDeploymentTarget | IDeployedArtifact | IRedefinableElement | IParameterSet | IVertex | ITrigger | ICollaborationUse | IExtend | IInclude | IActivityGroup | IMessage | IInteractionFragment | ILifeline | IMessageEnd | IGeneralOrdering;
