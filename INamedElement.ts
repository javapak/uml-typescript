/**
 * Interface for NamedElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Element
 */
import { IActivityGroup } from './IActivityGroup';
import { ICollaborationUse } from './ICollaborationUse';
import { IDeployedArtifact } from './IDeployedArtifact';
import { IDeploymentTarget } from './IDeploymentTarget';
import { IElement } from './IElement';
import { IExtend } from './IExtend';
import { IGeneralOrdering } from './IGeneralOrdering';
import { IInclude } from './IInclude';
import { IInteractionFragment } from './IInteractionFragment';
import { ILifeline } from './ILifeline';
import { IMessage } from './IMessage';
import { IMessageEnd } from './IMessageEnd';
import { INamespace } from './INamespace';
import { IPackageableElement } from './IPackageableElement';
import { IParameterSet } from './IParameterSet';
import { IRedefinableElement } from './IRedefinableElement';
import { IStringExpression } from './IStringExpression';
import { ITrigger } from './ITrigger';
import { ITypedElement } from './ITypedElement';
import { IVertex } from './IVertex';
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
  visibility?: VisibilityKind;
}

// Type aliases for NamedElement
export type NamedElementInput = Partial<INamedElement>;
export type NamedElementOutput = INamedElement;
export type NamedElementUnion = INamedElement | INamespace | IPackageableElement | ITypedElement | IDeploymentTarget | IDeployedArtifact | IRedefinableElement | IParameterSet | IVertex | ITrigger | ICollaborationUse | IExtend | IInclude | IActivityGroup | IMessage | IInteractionFragment | ILifeline | IMessageEnd | IGeneralOrdering;
