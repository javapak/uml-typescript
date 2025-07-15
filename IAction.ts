/**
 * Interface for Action
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends ExecutableNode
 */
import { Constraint } from './Constraint';
import { IAcceptEventAction } from './IAcceptEventAction';
import { IClearAssociationAction } from './IClearAssociationAction';
import { IConstraint } from './IConstraint';
import { ICreateObjectAction } from './ICreateObjectAction';
import { IDestroyObjectAction } from './IDestroyObjectAction';
import { IExecutableNode } from './IExecutableNode';
import { IInvocationAction } from './IInvocationAction';
import { ILinkAction } from './ILinkAction';
import { IOpaqueAction } from './IOpaqueAction';
import { IRaiseExceptionAction } from './IRaiseExceptionAction';
import { IReadExtentAction } from './IReadExtentAction';
import { IReadIsClassifiedObjectAction } from './IReadIsClassifiedObjectAction';
import { IReadLinkObjectEndAction } from './IReadLinkObjectEndAction';
import { IReadLinkObjectEndQualifierAction } from './IReadLinkObjectEndQualifierAction';
import { IReadSelfAction } from './IReadSelfAction';
import { IReclassifyObjectAction } from './IReclassifyObjectAction';
import { IReduceAction } from './IReduceAction';
import { IReplyAction } from './IReplyAction';
import { IStartClassifierBehaviorAction } from './IStartClassifierBehaviorAction';
import { IStructuralFeatureAction } from './IStructuralFeatureAction';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { ITestIdentityAction } from './ITestIdentityAction';
import { IUnmarshallAction } from './IUnmarshallAction';
import { IValueSpecificationAction } from './IValueSpecificationAction';
import { IVariableAction } from './IVariableAction';

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
  localPostcondition?: Set<IConstraint>;
  /**
   * localPrecondition
   * 
   * @type Constraint
   * @multiplicity [0..*]
   * @relationship containment
   */
  localPrecondition?: Set<IConstraint>;
}

// Type aliases for Action
export type ActionInput = Partial<IAction>;
export type ActionOutput = IAction;
export type ActionUnion = IAction | IStructuredActivityNode | IValueSpecificationAction | IVariableAction | ILinkAction | IStructuralFeatureAction | IAcceptEventAction | IInvocationAction | IClearAssociationAction | ICreateObjectAction | IDestroyObjectAction | IOpaqueAction | IRaiseExceptionAction | IReadExtentAction | IReadIsClassifiedObjectAction | IReadLinkObjectEndAction | IReadLinkObjectEndQualifierAction | IReadSelfAction | IReclassifyObjectAction | IReduceAction | IReplyAction | IStartClassifierBehaviorAction | ITestIdentityAction | IUnmarshallAction;
