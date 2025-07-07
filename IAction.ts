/**
 * Interface for Action
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends ExecutableNode
 */
import { Constraint } from './Constraint';
import { IConstraint } from './IConstraint';
import { IExecutableNode } from './IExecutableNode';

export interface IAction extends IExecutableNode {
  /**
   * isLocallyReentrant
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isLocallyReentrant: boolean;
  /**
   * localPostcondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  localPostcondition: Set<IConstraint>;
  /**
   * localPrecondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  localPrecondition: Set<IConstraint>;
}

// Type aliases for Action
export type ActionInput = Partial<IAction>;
export type ActionOutput = IAction;
export type ActionUnion = IAction | IStructuredActivityNode | IValueSpecificationAction | IVariableAction | ILinkAction | IStructuralFeatureAction | IAcceptEventAction | IInvocationAction | IClearAssociationAction | ICreateObjectAction | IDestroyObjectAction | IOpaqueAction | IRaiseExceptionAction | IReadExtentAction | IReadIsClassifiedObjectAction | IReadLinkObjectEndAction | IReadLinkObjectEndQualifierAction | IReadSelfAction | IReclassifyObjectAction | IReduceAction | IReplyAction | IStartClassifierBehaviorAction | ITestIdentityAction | IUnmarshallAction;
