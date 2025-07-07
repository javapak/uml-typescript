/**
 * Interface for Classifier
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends Namespace, RedefinableElement, Type, TemplateableElement
 */
import { CollaborationUse } from './CollaborationUse';
import { Generalization } from './Generalization';
import { ICollaborationUse } from './ICollaborationUse';
import { IGeneralization } from './IGeneralization';
import { IGeneralizationSet } from './IGeneralizationSet';
import { INamespace } from './INamespace';
import { IRedefinableElement } from './IRedefinableElement';
import { ISubstitution } from './ISubstitution';
import { ITemplateableElement } from './ITemplateableElement';
import { IType } from './IType';
import { IUseCase } from './IUseCase';
import { Substitution } from './Substitution';
import { UseCase } from './UseCase';

export interface IClassifier extends INamespace, IRedefinableElement, IType, ITemplateableElement {
  /**
   * collaborationUse
   * 
   * @type CollaborationUse
   * @multiplicity [0..*]
   * @relationship containment
   */
  collaborationUse: Set<ICollaborationUse>;
  /**
   * generalization
   * 
   * @type Generalization
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite specific
   */
  generalization: Set<IGeneralization>;
  /**
   * powertypeExtent
   * 
   * @type GeneralizationSet
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite powertype
   */
  powertypeExtent: Set<IGeneralizationSet | string>;
  /**
   * isAbstract
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isAbstract: boolean;
  /**
   * isFinalSpecialization
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isFinalSpecialization: boolean;
  /**
   * ownedUseCase
   * 
   * @type UseCase
   * @multiplicity [0..*]
   * @relationship containment
   */
  ownedUseCase: Set<IUseCase>;
  /**
   * useCase
   * 
   * @type UseCase
   * @multiplicity [0..*]
   * @relationship cross-reference
   * @opposite subject
   */
  useCase: Set<IUseCase | string>;
  /**
   * redefinedClassifier
   * 
   * @type Classifier
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  redefinedClassifier: Set<IClassifier | string>;
  /**
   * representation
   * 
   * @type CollaborationUse
   * @multiplicity [0..1]
   * @relationship cross-reference
   */
  representation?: ICollaborationUse | string;
  /**
   * substitution
   * 
   * @type Substitution
   * @multiplicity [0..*]
   * @relationship containment
   * @opposite substitutingClassifier
   */
  substitution: Set<ISubstitution>;
}

// Type aliases for Classifier
export type ClassifierInput = Partial<IClassifier>;
export type ClassifierOutput = IClassifier;
export type ClassifierUnion = IClassifier | IBehavioredClassifier | IAssociation | IArtifact | IDataType | IInterface | ISignal | IStructuredClassifier | IInformationItem;
