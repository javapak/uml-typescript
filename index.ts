/**
 * UML 2.5 Metamodel TypeScript Definitions
 * Auto-generated from Eclipse UML2 implementation
 * 
 * This file serves as the main entry point for the UML metamodel library.
 * It exports all interfaces, classes, enums, types, and validation utilities.
 */

// Validation Types - Re-exported from ValidationTypes.ts
export {
  ValidationError,
  ValidationResult,
  ValidatorFunction,
  ValidationHelper
} from './ValidationTypes';

// Enums
export {
  AggregationKind,
  AggregationKindLiteral,
  AggregationKindUtils
} from './AggregationKind';
export {
  CallConcurrencyKind,
  CallConcurrencyKindLiteral,
  CallConcurrencyKindUtils
} from './CallConcurrencyKind';
export {
  ConnectorKind,
  ConnectorKindLiteral,
  ConnectorKindUtils
} from './ConnectorKind';
export {
  ExpansionKind,
  ExpansionKindLiteral,
  ExpansionKindUtils
} from './ExpansionKind';
export {
  InteractionOperatorKind,
  InteractionOperatorKindLiteral,
  InteractionOperatorKindUtils
} from './InteractionOperatorKind';
export {
  MessageKind,
  MessageKindLiteral,
  MessageKindUtils
} from './MessageKind';
export {
  MessageSort,
  MessageSortLiteral,
  MessageSortUtils
} from './MessageSort';
export {
  ObjectNodeOrderingKind,
  ObjectNodeOrderingKindLiteral,
  ObjectNodeOrderingKindUtils
} from './ObjectNodeOrderingKind';
export {
  ParameterDirectionKind,
  ParameterDirectionKindLiteral,
  ParameterDirectionKindUtils
} from './ParameterDirectionKind';
export {
  ParameterEffectKind,
  ParameterEffectKindLiteral,
  ParameterEffectKindUtils
} from './ParameterEffectKind';
export {
  PseudostateKind,
  PseudostateKindLiteral,
  PseudostateKindUtils
} from './PseudostateKind';
export {
  TransitionKind,
  TransitionKindLiteral,
  TransitionKindUtils
} from './TransitionKind';
export {
  VisibilityKind,
  VisibilityKindLiteral,
  VisibilityKindUtils
} from './VisibilityKind';

// Interfaces
// Exported in dependency order to avoid circular references
export { IActivityContent } from './IActivityContent';
export { IEModelElement } from './IEModelElement';
export { IElement } from './IElement';
export { INamedElement } from './INamedElement';
export { INamespace } from './INamespace';
export { IRedefinableElement } from './IRedefinableElement';
export { IParameterableElement } from './IParameterableElement';
export { IPackageableElement } from './IPackageableElement';
export { IType } from './IType';
export { ITemplateableElement } from './ITemplateableElement';
export { IClassifier } from './IClassifier';
export { IStructuredClassifier } from './IStructuredClassifier';
export { IEncapsulatedClassifier } from './IEncapsulatedClassifier';
export { IBehavioredClassifier } from './IBehavioredClassifier';
export { IClass } from './IClass';
export { IBehavior } from './IBehavior';
export { IActivity } from './IActivity';
export { IComment } from './IComment';
export { IStereotype } from './IStereotype';
export { IImage } from './IImage';
export { IPackage } from './IPackage';
export { IProfile } from './IProfile';
export { ITemplateParameter } from './ITemplateParameter';
export { ITemplateSignature } from './ITemplateSignature';
export { IRelationship } from './IRelationship';
export { IDirectedRelationship } from './IDirectedRelationship';
export { ITemplateBinding } from './ITemplateBinding';
export { ITemplateParameterSubstitution } from './ITemplateParameterSubstitution';
export { IAssociation } from './IAssociation';
export { IFeature } from './IFeature';
export { ITypedElement } from './ITypedElement';
export { IMultiplicityElement } from './IMultiplicityElement';
export { IStructuralFeature } from './IStructuralFeature';
export { IConnectableElement } from './IConnectableElement';
export { IDeploymentTarget } from './IDeploymentTarget';
export { IProperty } from './IProperty';
export { IConnectorEnd } from './IConnectorEnd';
export { IValueSpecification } from './IValueSpecification';
export { IConnectableElementTemplateParameter } from './IConnectableElementTemplateParameter';
export { IDependency } from './IDependency';
export { IDeployment } from './IDeployment';
export { IDeployedArtifact } from './IDeployedArtifact';
export { IArtifact } from './IArtifact';
export { IDeploymentSpecification } from './IDeploymentSpecification';
export { IAbstraction } from './IAbstraction';
export { IManifestation } from './IManifestation';
export { IOpaqueExpression } from './IOpaqueExpression';
export { IParameter } from './IParameter';
export { IBehavioralFeature } from './IBehavioralFeature';
export { IOperation } from './IOperation';
export { IParameterSet } from './IParameterSet';
export { IConstraint } from './IConstraint';
export { IDataType } from './IDataType';
export { IInterface } from './IInterface';
export { IReception } from './IReception';
export { ISignal } from './ISignal';
export { IStateMachine } from './IStateMachine';
export { IProtocolStateMachine } from './IProtocolStateMachine';
export { IVertex } from './IVertex';
export { IPseudostate } from './IPseudostate';
export { IRegion } from './IRegion';
export { IState } from './IState';
export { IConnectionPointReference } from './IConnectionPointReference';
export { ITrigger } from './ITrigger';
export { IEvent } from './IEvent';
export { IPort } from './IPort';
export { ITransition } from './ITransition';
export { IProtocolConformance } from './IProtocolConformance';
export { IOperationTemplateParameter } from './IOperationTemplateParameter';
export { IPackageMerge } from './IPackageMerge';
export { IProfileApplication } from './IProfileApplication';
export { IEnumeration } from './IEnumeration';
export { IInstanceSpecification } from './IInstanceSpecification';
export { IEnumerationLiteral } from './IEnumerationLiteral';
export { ISlot } from './ISlot';
export { IPrimitiveType } from './IPrimitiveType';
export { IElementImport } from './IElementImport';
export { IPackageImport } from './IPackageImport';
export { IExtension } from './IExtension';
export { IExtensionEnd } from './IExtensionEnd';
export { IModel } from './IModel';
export { IExpression } from './IExpression';
export { IStringExpression } from './IStringExpression';
export { IUsage } from './IUsage';
export { ICollaborationUse } from './ICollaborationUse';
export { ICollaboration } from './ICollaboration';
export { IConnector } from './IConnector';
export { IGeneralization } from './IGeneralization';
export { IGeneralizationSet } from './IGeneralizationSet';
export { IRedefinableTemplateSignature } from './IRedefinableTemplateSignature';
export { IUseCase } from './IUseCase';
export { IExtend } from './IExtend';
export { IExtensionPoint } from './IExtensionPoint';
export { IInclude } from './IInclude';
export { IRealization } from './IRealization';
export { ISubstitution } from './ISubstitution';
export { IClassifierTemplateParameter } from './IClassifierTemplateParameter';
export { IInterfaceRealization } from './IInterfaceRealization';
export { IActivityGroup } from './IActivityGroup';
export { IActivityEdge } from './IActivityEdge';
export { IActivityPartition } from './IActivityPartition';
export { IActivityNode } from './IActivityNode';
export { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
export { IExecutableNode } from './IExecutableNode';
export { IAction } from './IAction';
export { IStructuredActivityNode } from './IStructuredActivityNode';
export { IExceptionHandler } from './IExceptionHandler';
export { IObjectNode } from './IObjectNode';
export { IPin } from './IPin';
export { IInputPin } from './IInputPin';
export { IOutputPin } from './IOutputPin';
export { IVariable } from './IVariable';
export { IValueSpecificationAction } from './IValueSpecificationAction';
export { IVariableAction } from './IVariableAction';
export { ILinkAction } from './ILinkAction';
export { IWriteLinkAction } from './IWriteLinkAction';
export { ILinkEndData } from './ILinkEndData';
export { IQualifierValue } from './IQualifierValue';
export { IStructuralFeatureAction } from './IStructuralFeatureAction';
export { IWriteStructuralFeatureAction } from './IWriteStructuralFeatureAction';
export { IWriteVariableAction } from './IWriteVariableAction';
export { IAcceptEventAction } from './IAcceptEventAction';
export { IAcceptCallAction } from './IAcceptCallAction';
export { IActionInputPin } from './IActionInputPin';
export { IAddStructuralFeatureValueAction } from './IAddStructuralFeatureValueAction';
export { IAddVariableValueAction } from './IAddVariableValueAction';
export { IInvocationAction } from './IInvocationAction';
export { IBroadcastSignalAction } from './IBroadcastSignalAction';
export { ICallAction } from './ICallAction';
export { ICallBehaviorAction } from './ICallBehaviorAction';
export { ICallOperationAction } from './ICallOperationAction';
export { IClause } from './IClause';
export { IClearAssociationAction } from './IClearAssociationAction';
export { IClearStructuralFeatureAction } from './IClearStructuralFeatureAction';
export { IClearVariableAction } from './IClearVariableAction';
export { IConditionalNode } from './IConditionalNode';
export { ICreateLinkAction } from './ICreateLinkAction';
export { ILinkEndCreationData } from './ILinkEndCreationData';
export { ICreateLinkObjectAction } from './ICreateLinkObjectAction';
export { ICreateObjectAction } from './ICreateObjectAction';
export { IDestroyLinkAction } from './IDestroyLinkAction';
export { ILinkEndDestructionData } from './ILinkEndDestructionData';
export { IDestroyObjectAction } from './IDestroyObjectAction';
export { IExpansionNode } from './IExpansionNode';
export { IExpansionRegion } from './IExpansionRegion';
export { ILoopNode } from './ILoopNode';
export { IOpaqueAction } from './IOpaqueAction';
export { IRaiseExceptionAction } from './IRaiseExceptionAction';
export { IReadExtentAction } from './IReadExtentAction';
export { IReadIsClassifiedObjectAction } from './IReadIsClassifiedObjectAction';
export { IReadLinkAction } from './IReadLinkAction';
export { IReadLinkObjectEndAction } from './IReadLinkObjectEndAction';
export { IReadLinkObjectEndQualifierAction } from './IReadLinkObjectEndQualifierAction';
export { IReadSelfAction } from './IReadSelfAction';
export { IReadStructuralFeatureAction } from './IReadStructuralFeatureAction';
export { IReadVariableAction } from './IReadVariableAction';
export { IReclassifyObjectAction } from './IReclassifyObjectAction';
export { IReduceAction } from './IReduceAction';
export { IRemoveStructuralFeatureValueAction } from './IRemoveStructuralFeatureValueAction';
export { IRemoveVariableValueAction } from './IRemoveVariableValueAction';
export { IReplyAction } from './IReplyAction';
export { ISendObjectAction } from './ISendObjectAction';
export { ISendSignalAction } from './ISendSignalAction';
export { ISequenceNode } from './ISequenceNode';
export { IStartClassifierBehaviorAction } from './IStartClassifierBehaviorAction';
export { IStartObjectBehaviorAction } from './IStartObjectBehaviorAction';
export { ITestIdentityAction } from './ITestIdentityAction';
export { IUnmarshallAction } from './IUnmarshallAction';
export { IValuePin } from './IValuePin';
export { IControlNode } from './IControlNode';
export { IFinalNode } from './IFinalNode';
export { IActivityFinalNode } from './IActivityFinalNode';
export { IActivityParameterNode } from './IActivityParameterNode';
export { ICentralBufferNode } from './ICentralBufferNode';
export { IControlFlow } from './IControlFlow';
export { IDataStoreNode } from './IDataStoreNode';
export { IDecisionNode } from './IDecisionNode';
export { IObjectFlow } from './IObjectFlow';
export { IFlowFinalNode } from './IFlowFinalNode';
export { IForkNode } from './IForkNode';
export { IInitialNode } from './IInitialNode';
export { IJoinNode } from './IJoinNode';
export { IMergeNode } from './IMergeNode';
export { IInstanceValue } from './IInstanceValue';
export { IMessageEvent } from './IMessageEvent';
export { IAnyReceiveEvent } from './IAnyReceiveEvent';
export { ICallEvent } from './ICallEvent';
export { IChangeEvent } from './IChangeEvent';
export { IOpaqueBehavior } from './IOpaqueBehavior';
export { IFunctionBehavior } from './IFunctionBehavior';
export { ISignalEvent } from './ISignalEvent';
export { ITimeEvent } from './ITimeEvent';
export { ITimeExpression } from './ITimeExpression';
export { IObservation } from './IObservation';
export { ICommunicationPath } from './ICommunicationPath';
export { INode } from './INode';
export { IDevice } from './IDevice';
export { IExecutionEnvironment } from './IExecutionEnvironment';
export { IInformationFlow } from './IInformationFlow';
export { IMessage } from './IMessage';
export { IInteractionFragment } from './IInteractionFragment';
export { IInteraction } from './IInteraction';
export { ILifeline } from './ILifeline';
export { IInteractionUse } from './IInteractionUse';
export { IPartDecomposition } from './IPartDecomposition';
export { IMessageEnd } from './IMessageEnd';
export { IGate } from './IGate';
export { IInteractionOperand } from './IInteractionOperand';
export { IInteractionConstraint } from './IInteractionConstraint';
export { IGeneralOrdering } from './IGeneralOrdering';
export { IOccurrenceSpecification } from './IOccurrenceSpecification';
export { IInformationItem } from './IInformationItem';
export { IExecutionSpecification } from './IExecutionSpecification';
export { IActionExecutionSpecification } from './IActionExecutionSpecification';
export { IBehaviorExecutionSpecification } from './IBehaviorExecutionSpecification';
export { ICombinedFragment } from './ICombinedFragment';
export { IConsiderIgnoreFragment } from './IConsiderIgnoreFragment';
export { IContinuation } from './IContinuation';
export { IMessageOccurrenceSpecification } from './IMessageOccurrenceSpecification';
export { IDestructionOccurrenceSpecification } from './IDestructionOccurrenceSpecification';
export { IExecutionOccurrenceSpecification } from './IExecutionOccurrenceSpecification';
export { IStateInvariant } from './IStateInvariant';
export { IFinalState } from './IFinalState';
export { IProtocolTransition } from './IProtocolTransition';
export { IAssociationClass } from './IAssociationClass';
export { IComponent } from './IComponent';
export { IComponentRealization } from './IComponentRealization';
export { IActor } from './IActor';
export { IDuration } from './IDuration';
export { IIntervalConstraint } from './IIntervalConstraint';
export { IDurationConstraint } from './IDurationConstraint';
export { IInterval } from './IInterval';
export { IDurationInterval } from './IDurationInterval';
export { IDurationObservation } from './IDurationObservation';
export { ILiteralSpecification } from './ILiteralSpecification';
export { ILiteralBoolean } from './ILiteralBoolean';
export { ILiteralInteger } from './ILiteralInteger';
export { ILiteralNull } from './ILiteralNull';
export { ILiteralReal } from './ILiteralReal';
export { ILiteralString } from './ILiteralString';
export { ILiteralUnlimitedNatural } from './ILiteralUnlimitedNatural';
export { ITimeConstraint } from './ITimeConstraint';
export { ITimeInterval } from './ITimeInterval';
export { ITimeObservation } from './ITimeObservation';

// Implementation Classes
// Exported in dependency order to avoid circular references
export { ActivityContent } from './ActivityContent';
export { EModelElement } from './EModelElement';
export { Element } from './Element';
export { NamedElement } from './NamedElement';
export { Namespace } from './Namespace';
export { RedefinableElement } from './RedefinableElement';
export { ParameterableElement } from './ParameterableElement';
export { PackageableElement } from './PackageableElement';
export { Type } from './Type';
export { TemplateableElement } from './TemplateableElement';
export { Classifier } from './Classifier';
export { StructuredClassifier } from './StructuredClassifier';
export { EncapsulatedClassifier } from './EncapsulatedClassifier';
export { BehavioredClassifier } from './BehavioredClassifier';
export { Class } from './Class';
export { Behavior } from './Behavior';
export { Activity } from './Activity';
export { Comment } from './Comment';
export { Stereotype } from './Stereotype';
export { Image } from './Image';
export { Package } from './Package';
export { Profile } from './Profile';
export { TemplateParameter } from './TemplateParameter';
export { TemplateSignature } from './TemplateSignature';
export { Relationship } from './Relationship';
export { DirectedRelationship } from './DirectedRelationship';
export { TemplateBinding } from './TemplateBinding';
export { TemplateParameterSubstitution } from './TemplateParameterSubstitution';
export { Association } from './Association';
export { Feature } from './Feature';
export { TypedElement } from './TypedElement';
export { MultiplicityElement } from './MultiplicityElement';
export { StructuralFeature } from './StructuralFeature';
export { ConnectableElement } from './ConnectableElement';
export { DeploymentTarget } from './DeploymentTarget';
export { Property } from './Property';
export { ConnectorEnd } from './ConnectorEnd';
export { ValueSpecification } from './ValueSpecification';
export { ConnectableElementTemplateParameter } from './ConnectableElementTemplateParameter';
export { Dependency } from './Dependency';
export { Deployment } from './Deployment';
export { DeployedArtifact } from './DeployedArtifact';
export { Artifact } from './Artifact';
export { DeploymentSpecification } from './DeploymentSpecification';
export { Abstraction } from './Abstraction';
export { Manifestation } from './Manifestation';
export { OpaqueExpression } from './OpaqueExpression';
export { Parameter } from './Parameter';
export { BehavioralFeature } from './BehavioralFeature';
export { Operation } from './Operation';
export { ParameterSet } from './ParameterSet';
export { Constraint } from './Constraint';
export { DataType } from './DataType';
export { Interface } from './Interface';
export { Reception } from './Reception';
export { Signal } from './Signal';
export { StateMachine } from './StateMachine';
export { ProtocolStateMachine } from './ProtocolStateMachine';
export { Vertex } from './Vertex';
export { Pseudostate } from './Pseudostate';
export { Region } from './Region';
export { State } from './State';
export { ConnectionPointReference } from './ConnectionPointReference';
export { Trigger } from './Trigger';
export { Event } from './Event';
export { Port } from './Port';
export { Transition } from './Transition';
export { ProtocolConformance } from './ProtocolConformance';
export { OperationTemplateParameter } from './OperationTemplateParameter';
export { PackageMerge } from './PackageMerge';
export { ProfileApplication } from './ProfileApplication';
export { Enumeration } from './Enumeration';
export { InstanceSpecification } from './InstanceSpecification';
export { EnumerationLiteral } from './EnumerationLiteral';
export { Slot } from './Slot';
export { PrimitiveType } from './PrimitiveType';
export { ElementImport } from './ElementImport';
export { PackageImport } from './PackageImport';
export { Extension } from './Extension';
export { ExtensionEnd } from './ExtensionEnd';
export { Model } from './Model';
export { Expression } from './Expression';
export { StringExpression } from './StringExpression';
export { Usage } from './Usage';
export { CollaborationUse } from './CollaborationUse';
export { Collaboration } from './Collaboration';
export { Connector } from './Connector';
export { Generalization } from './Generalization';
export { GeneralizationSet } from './GeneralizationSet';
export { RedefinableTemplateSignature } from './RedefinableTemplateSignature';
export { UseCase } from './UseCase';
export { Extend } from './Extend';
export { ExtensionPoint } from './ExtensionPoint';
export { Include } from './Include';
export { Realization } from './Realization';
export { Substitution } from './Substitution';
export { ClassifierTemplateParameter } from './ClassifierTemplateParameter';
export { InterfaceRealization } from './InterfaceRealization';
export { ActivityGroup } from './ActivityGroup';
export { ActivityEdge } from './ActivityEdge';
export { ActivityPartition } from './ActivityPartition';
export { ActivityNode } from './ActivityNode';
export { InterruptibleActivityRegion } from './InterruptibleActivityRegion';
export { ExecutableNode } from './ExecutableNode';
export { Action } from './Action';
export { StructuredActivityNode } from './StructuredActivityNode';
export { ExceptionHandler } from './ExceptionHandler';
export { ObjectNode } from './ObjectNode';
export { Pin } from './Pin';
export { InputPin } from './InputPin';
export { OutputPin } from './OutputPin';
export { Variable } from './Variable';
export { ValueSpecificationAction } from './ValueSpecificationAction';
export { VariableAction } from './VariableAction';
export { LinkAction } from './LinkAction';
export { WriteLinkAction } from './WriteLinkAction';
export { LinkEndData } from './LinkEndData';
export { QualifierValue } from './QualifierValue';
export { StructuralFeatureAction } from './StructuralFeatureAction';
export { WriteStructuralFeatureAction } from './WriteStructuralFeatureAction';
export { WriteVariableAction } from './WriteVariableAction';
export { AcceptEventAction } from './AcceptEventAction';
export { AcceptCallAction } from './AcceptCallAction';
export { ActionInputPin } from './ActionInputPin';
export { AddStructuralFeatureValueAction } from './AddStructuralFeatureValueAction';
export { AddVariableValueAction } from './AddVariableValueAction';
export { InvocationAction } from './InvocationAction';
export { BroadcastSignalAction } from './BroadcastSignalAction';
export { CallAction } from './CallAction';
export { CallBehaviorAction } from './CallBehaviorAction';
export { CallOperationAction } from './CallOperationAction';
export { Clause } from './Clause';
export { ClearAssociationAction } from './ClearAssociationAction';
export { ClearStructuralFeatureAction } from './ClearStructuralFeatureAction';
export { ClearVariableAction } from './ClearVariableAction';
export { ConditionalNode } from './ConditionalNode';
export { CreateLinkAction } from './CreateLinkAction';
export { LinkEndCreationData } from './LinkEndCreationData';
export { CreateLinkObjectAction } from './CreateLinkObjectAction';
export { CreateObjectAction } from './CreateObjectAction';
export { DestroyLinkAction } from './DestroyLinkAction';
export { LinkEndDestructionData } from './LinkEndDestructionData';
export { DestroyObjectAction } from './DestroyObjectAction';
export { ExpansionNode } from './ExpansionNode';
export { ExpansionRegion } from './ExpansionRegion';
export { LoopNode } from './LoopNode';
export { OpaqueAction } from './OpaqueAction';
export { RaiseExceptionAction } from './RaiseExceptionAction';
export { ReadExtentAction } from './ReadExtentAction';
export { ReadIsClassifiedObjectAction } from './ReadIsClassifiedObjectAction';
export { ReadLinkAction } from './ReadLinkAction';
export { ReadLinkObjectEndAction } from './ReadLinkObjectEndAction';
export { ReadLinkObjectEndQualifierAction } from './ReadLinkObjectEndQualifierAction';
export { ReadSelfAction } from './ReadSelfAction';
export { ReadStructuralFeatureAction } from './ReadStructuralFeatureAction';
export { ReadVariableAction } from './ReadVariableAction';
export { ReclassifyObjectAction } from './ReclassifyObjectAction';
export { ReduceAction } from './ReduceAction';
export { RemoveStructuralFeatureValueAction } from './RemoveStructuralFeatureValueAction';
export { RemoveVariableValueAction } from './RemoveVariableValueAction';
export { ReplyAction } from './ReplyAction';
export { SendObjectAction } from './SendObjectAction';
export { SendSignalAction } from './SendSignalAction';
export { SequenceNode } from './SequenceNode';
export { StartClassifierBehaviorAction } from './StartClassifierBehaviorAction';
export { StartObjectBehaviorAction } from './StartObjectBehaviorAction';
export { TestIdentityAction } from './TestIdentityAction';
export { UnmarshallAction } from './UnmarshallAction';
export { ValuePin } from './ValuePin';
export { ControlNode } from './ControlNode';
export { FinalNode } from './FinalNode';
export { ActivityFinalNode } from './ActivityFinalNode';
export { ActivityParameterNode } from './ActivityParameterNode';
export { CentralBufferNode } from './CentralBufferNode';
export { ControlFlow } from './ControlFlow';
export { DataStoreNode } from './DataStoreNode';
export { DecisionNode } from './DecisionNode';
export { ObjectFlow } from './ObjectFlow';
export { FlowFinalNode } from './FlowFinalNode';
export { ForkNode } from './ForkNode';
export { InitialNode } from './InitialNode';
export { JoinNode } from './JoinNode';
export { MergeNode } from './MergeNode';
export { InstanceValue } from './InstanceValue';
export { MessageEvent } from './MessageEvent';
export { AnyReceiveEvent } from './AnyReceiveEvent';
export { CallEvent } from './CallEvent';
export { ChangeEvent } from './ChangeEvent';
export { OpaqueBehavior } from './OpaqueBehavior';
export { FunctionBehavior } from './FunctionBehavior';
export { SignalEvent } from './SignalEvent';
export { TimeEvent } from './TimeEvent';
export { TimeExpression } from './TimeExpression';
export { Observation } from './Observation';
export { CommunicationPath } from './CommunicationPath';
export { Node } from './Node';
export { Device } from './Device';
export { ExecutionEnvironment } from './ExecutionEnvironment';
export { InformationFlow } from './InformationFlow';
export { Message } from './Message';
export { InteractionFragment } from './InteractionFragment';
export { Interaction } from './Interaction';
export { Lifeline } from './Lifeline';
export { InteractionUse } from './InteractionUse';
export { PartDecomposition } from './PartDecomposition';
export { MessageEnd } from './MessageEnd';
export { Gate } from './Gate';
export { InteractionOperand } from './InteractionOperand';
export { InteractionConstraint } from './InteractionConstraint';
export { GeneralOrdering } from './GeneralOrdering';
export { OccurrenceSpecification } from './OccurrenceSpecification';
export { InformationItem } from './InformationItem';
export { ExecutionSpecification } from './ExecutionSpecification';
export { ActionExecutionSpecification } from './ActionExecutionSpecification';
export { BehaviorExecutionSpecification } from './BehaviorExecutionSpecification';
export { CombinedFragment } from './CombinedFragment';
export { ConsiderIgnoreFragment } from './ConsiderIgnoreFragment';
export { Continuation } from './Continuation';
export { MessageOccurrenceSpecification } from './MessageOccurrenceSpecification';
export { DestructionOccurrenceSpecification } from './DestructionOccurrenceSpecification';
export { ExecutionOccurrenceSpecification } from './ExecutionOccurrenceSpecification';
export { StateInvariant } from './StateInvariant';
export { FinalState } from './FinalState';
export { ProtocolTransition } from './ProtocolTransition';
export { AssociationClass } from './AssociationClass';
export { Component } from './Component';
export { ComponentRealization } from './ComponentRealization';
export { Actor } from './Actor';
export { Duration } from './Duration';
export { IntervalConstraint } from './IntervalConstraint';
export { DurationConstraint } from './DurationConstraint';
export { Interval } from './Interval';
export { DurationInterval } from './DurationInterval';
export { DurationObservation } from './DurationObservation';
export { LiteralSpecification } from './LiteralSpecification';
export { LiteralBoolean } from './LiteralBoolean';
export { LiteralInteger } from './LiteralInteger';
export { LiteralNull } from './LiteralNull';
export { LiteralReal } from './LiteralReal';
export { LiteralString } from './LiteralString';
export { LiteralUnlimitedNatural } from './LiteralUnlimitedNatural';
export { TimeConstraint } from './TimeConstraint';
export { TimeInterval } from './TimeInterval';
export { TimeObservation } from './TimeObservation';

// Type Definitions
// Utility types, aliases, and conditional types
export * from './ActivityContentTypes';
export * from './EModelElementTypes';
export * from './ElementTypes';
export * from './NamedElementTypes';
export * from './NamespaceTypes';
export * from './RedefinableElementTypes';
export * from './ParameterableElementTypes';
export * from './PackageableElementTypes';
export * from './TypeTypes';
export * from './TemplateableElementTypes';
export * from './ClassifierTypes';
export * from './StructuredClassifierTypes';
export * from './EncapsulatedClassifierTypes';
export * from './BehavioredClassifierTypes';
export * from './ClassTypes';
export * from './BehaviorTypes';
export * from './ActivityTypes';
export * from './CommentTypes';
export * from './StereotypeTypes';
export * from './ImageTypes';
export * from './PackageTypes';
export * from './ProfileTypes';
export * from './TemplateParameterTypes';
export * from './TemplateSignatureTypes';
export * from './RelationshipTypes';
export * from './DirectedRelationshipTypes';
export * from './TemplateBindingTypes';
export * from './TemplateParameterSubstitutionTypes';
export * from './AssociationTypes';
export * from './FeatureTypes';
export * from './TypedElementTypes';
export * from './MultiplicityElementTypes';
export * from './StructuralFeatureTypes';
export * from './ConnectableElementTypes';
export * from './DeploymentTargetTypes';
export * from './PropertyTypes';
export * from './ConnectorEndTypes';
export * from './ValueSpecificationTypes';
export * from './ConnectableElementTemplateParameterTypes';
export * from './DependencyTypes';
export * from './DeploymentTypes';
export * from './DeployedArtifactTypes';
export * from './ArtifactTypes';
export * from './DeploymentSpecificationTypes';
export * from './AbstractionTypes';
export * from './ManifestationTypes';
export * from './OpaqueExpressionTypes';
export * from './ParameterTypes';
export * from './BehavioralFeatureTypes';
export * from './OperationTypes';
export * from './ParameterSetTypes';
export * from './ConstraintTypes';
export * from './DataTypeTypes';
export * from './InterfaceTypes';
export * from './ReceptionTypes';
export * from './SignalTypes';
export * from './StateMachineTypes';
export * from './ProtocolStateMachineTypes';
export * from './VertexTypes';
export * from './PseudostateTypes';
export * from './RegionTypes';
export * from './StateTypes';
export * from './ConnectionPointReferenceTypes';
export * from './TriggerTypes';
export * from './EventTypes';
export * from './PortTypes';
export * from './TransitionTypes';
export * from './ProtocolConformanceTypes';
export * from './OperationTemplateParameterTypes';
export * from './PackageMergeTypes';
export * from './ProfileApplicationTypes';
export * from './EnumerationTypes';
export * from './InstanceSpecificationTypes';
export * from './EnumerationLiteralTypes';
export * from './SlotTypes';
export * from './PrimitiveTypeTypes';
export * from './ElementImportTypes';
export * from './PackageImportTypes';
export * from './ExtensionTypes';
export * from './ExtensionEndTypes';
export * from './ModelTypes';
export * from './ExpressionTypes';
export * from './StringExpressionTypes';
export * from './UsageTypes';
export * from './CollaborationUseTypes';
export * from './CollaborationTypes';
export * from './ConnectorTypes';
export * from './GeneralizationTypes';
export * from './GeneralizationSetTypes';
export * from './RedefinableTemplateSignatureTypes';
export * from './UseCaseTypes';
export * from './ExtendTypes';
export * from './ExtensionPointTypes';
export * from './IncludeTypes';
export * from './RealizationTypes';
export * from './SubstitutionTypes';
export * from './ClassifierTemplateParameterTypes';
export * from './InterfaceRealizationTypes';
export * from './ActivityGroupTypes';
export * from './ActivityEdgeTypes';
export * from './ActivityPartitionTypes';
export * from './ActivityNodeTypes';
export * from './InterruptibleActivityRegionTypes';
export * from './ExecutableNodeTypes';
export * from './ActionTypes';
export * from './StructuredActivityNodeTypes';
export * from './ExceptionHandlerTypes';
export * from './ObjectNodeTypes';
export * from './PinTypes';
export * from './InputPinTypes';
export * from './OutputPinTypes';
export * from './VariableTypes';
export * from './ValueSpecificationActionTypes';
export * from './VariableActionTypes';
export * from './LinkActionTypes';
export * from './WriteLinkActionTypes';
export * from './LinkEndDataTypes';
export * from './QualifierValueTypes';
export * from './StructuralFeatureActionTypes';
export * from './WriteStructuralFeatureActionTypes';
export * from './WriteVariableActionTypes';
export * from './AcceptEventActionTypes';
export * from './AcceptCallActionTypes';
export * from './ActionInputPinTypes';
export * from './AddStructuralFeatureValueActionTypes';
export * from './AddVariableValueActionTypes';
export * from './InvocationActionTypes';
export * from './BroadcastSignalActionTypes';
export * from './CallActionTypes';
export * from './CallBehaviorActionTypes';
export * from './CallOperationActionTypes';
export * from './ClauseTypes';
export * from './ClearAssociationActionTypes';
export * from './ClearStructuralFeatureActionTypes';
export * from './ClearVariableActionTypes';
export * from './ConditionalNodeTypes';
export * from './CreateLinkActionTypes';
export * from './LinkEndCreationDataTypes';
export * from './CreateLinkObjectActionTypes';
export * from './CreateObjectActionTypes';
export * from './DestroyLinkActionTypes';
export * from './LinkEndDestructionDataTypes';
export * from './DestroyObjectActionTypes';
export * from './ExpansionNodeTypes';
export * from './ExpansionRegionTypes';
export * from './LoopNodeTypes';
export * from './OpaqueActionTypes';
export * from './RaiseExceptionActionTypes';
export * from './ReadExtentActionTypes';
export * from './ReadIsClassifiedObjectActionTypes';
export * from './ReadLinkActionTypes';
export * from './ReadLinkObjectEndActionTypes';
export * from './ReadLinkObjectEndQualifierActionTypes';
export * from './ReadSelfActionTypes';
export * from './ReadStructuralFeatureActionTypes';
export * from './ReadVariableActionTypes';
export * from './ReclassifyObjectActionTypes';
export * from './ReduceActionTypes';
export * from './RemoveStructuralFeatureValueActionTypes';
export * from './RemoveVariableValueActionTypes';
export * from './ReplyActionTypes';
export * from './SendObjectActionTypes';
export * from './SendSignalActionTypes';
export * from './SequenceNodeTypes';
export * from './StartClassifierBehaviorActionTypes';
export * from './StartObjectBehaviorActionTypes';
export * from './TestIdentityActionTypes';
export * from './UnmarshallActionTypes';
export * from './ValuePinTypes';
export * from './ControlNodeTypes';
export * from './FinalNodeTypes';
export * from './ActivityFinalNodeTypes';
export * from './ActivityParameterNodeTypes';
export * from './CentralBufferNodeTypes';
export * from './ControlFlowTypes';
export * from './DataStoreNodeTypes';
export * from './DecisionNodeTypes';
export * from './ObjectFlowTypes';
export * from './FlowFinalNodeTypes';
export * from './ForkNodeTypes';
export * from './InitialNodeTypes';
export * from './JoinNodeTypes';
export * from './MergeNodeTypes';
export * from './InstanceValueTypes';
export * from './MessageEventTypes';
export * from './AnyReceiveEventTypes';
export * from './CallEventTypes';
export * from './ChangeEventTypes';
export * from './OpaqueBehaviorTypes';
export * from './FunctionBehaviorTypes';
export * from './SignalEventTypes';
export * from './TimeEventTypes';
export * from './TimeExpressionTypes';
export * from './ObservationTypes';
export * from './CommunicationPathTypes';
export * from './NodeTypes';
export * from './DeviceTypes';
export * from './ExecutionEnvironmentTypes';
export * from './InformationFlowTypes';
export * from './MessageTypes';
export * from './InteractionFragmentTypes';
export * from './InteractionTypes';
export * from './LifelineTypes';
export * from './InteractionUseTypes';
export * from './PartDecompositionTypes';
export * from './MessageEndTypes';
export * from './GateTypes';
export * from './InteractionOperandTypes';
export * from './InteractionConstraintTypes';
export * from './GeneralOrderingTypes';
export * from './OccurrenceSpecificationTypes';
export * from './InformationItemTypes';
export * from './ExecutionSpecificationTypes';
export * from './ActionExecutionSpecificationTypes';
export * from './BehaviorExecutionSpecificationTypes';
export * from './CombinedFragmentTypes';
export * from './ConsiderIgnoreFragmentTypes';
export * from './ContinuationTypes';
export * from './MessageOccurrenceSpecificationTypes';
export * from './DestructionOccurrenceSpecificationTypes';
export * from './ExecutionOccurrenceSpecificationTypes';
export * from './StateInvariantTypes';
export * from './FinalStateTypes';
export * from './ProtocolTransitionTypes';
export * from './AssociationClassTypes';
export * from './ComponentTypes';
export * from './ComponentRealizationTypes';
export * from './ActorTypes';
export * from './DurationTypes';
export * from './IntervalConstraintTypes';
export * from './DurationConstraintTypes';
export * from './IntervalTypes';
export * from './DurationIntervalTypes';
export * from './DurationObservationTypes';
export * from './LiteralSpecificationTypes';
export * from './LiteralBooleanTypes';
export * from './LiteralIntegerTypes';
export * from './LiteralNullTypes';
export * from './LiteralRealTypes';
export * from './LiteralStringTypes';
export * from './LiteralUnlimitedNaturalTypes';
export * from './TimeConstraintTypes';
export * from './TimeIntervalTypes';
export * from './TimeObservationTypes';

// Namespace for organized access
export namespace UML {
  // Type aliases for interfaces
  export type ActivityContent = IActivityContent;
  export type EModelElement = IEModelElement;
  export type Element = IElement;
  export type NamedElement = INamedElement;
  export type Namespace = INamespace;
  export type RedefinableElement = IRedefinableElement;
  export type ParameterableElement = IParameterableElement;
  export type PackageableElement = IPackageableElement;
  export type Type = IType;
  export type TemplateableElement = ITemplateableElement;
  export type Classifier = IClassifier;
  export type StructuredClassifier = IStructuredClassifier;
  export type EncapsulatedClassifier = IEncapsulatedClassifier;
  export type BehavioredClassifier = IBehavioredClassifier;
  export type Class = IClass;
  export type Behavior = IBehavior;
  export type Activity = IActivity;
  export type Comment = IComment;
  export type Stereotype = IStereotype;
  export type Image = IImage;
  export type Package = IPackage;
  export type Profile = IProfile;
  export type TemplateParameter = ITemplateParameter;
  export type TemplateSignature = ITemplateSignature;
  export type Relationship = IRelationship;
  export type DirectedRelationship = IDirectedRelationship;
  export type TemplateBinding = ITemplateBinding;
  export type TemplateParameterSubstitution = ITemplateParameterSubstitution;
  export type Association = IAssociation;
  export type Feature = IFeature;
  export type TypedElement = ITypedElement;
  export type MultiplicityElement = IMultiplicityElement;
  export type StructuralFeature = IStructuralFeature;
  export type ConnectableElement = IConnectableElement;
  export type DeploymentTarget = IDeploymentTarget;
  export type Property = IProperty;
  export type ConnectorEnd = IConnectorEnd;
  export type ValueSpecification = IValueSpecification;
  export type ConnectableElementTemplateParameter = IConnectableElementTemplateParameter;
  export type Dependency = IDependency;
  export type Deployment = IDeployment;
  export type DeployedArtifact = IDeployedArtifact;
  export type Artifact = IArtifact;
  export type DeploymentSpecification = IDeploymentSpecification;
  export type Abstraction = IAbstraction;
  export type Manifestation = IManifestation;
  export type OpaqueExpression = IOpaqueExpression;
  export type Parameter = IParameter;
  export type BehavioralFeature = IBehavioralFeature;
  export type Operation = IOperation;
  export type ParameterSet = IParameterSet;
  export type Constraint = IConstraint;
  export type DataType = IDataType;
  export type Interface = IInterface;
  export type Reception = IReception;
  export type Signal = ISignal;
  export type StateMachine = IStateMachine;
  export type ProtocolStateMachine = IProtocolStateMachine;
  export type Vertex = IVertex;
  export type Pseudostate = IPseudostate;
  export type Region = IRegion;
  export type State = IState;
  export type ConnectionPointReference = IConnectionPointReference;
  export type Trigger = ITrigger;
  export type Event = IEvent;
  export type Port = IPort;
  export type Transition = ITransition;
  export type ProtocolConformance = IProtocolConformance;
  export type OperationTemplateParameter = IOperationTemplateParameter;
  export type PackageMerge = IPackageMerge;
  export type ProfileApplication = IProfileApplication;
  export type Enumeration = IEnumeration;
  export type InstanceSpecification = IInstanceSpecification;
  export type EnumerationLiteral = IEnumerationLiteral;
  export type Slot = ISlot;
  export type PrimitiveType = IPrimitiveType;
  export type ElementImport = IElementImport;
  export type PackageImport = IPackageImport;
  export type Extension = IExtension;
  export type ExtensionEnd = IExtensionEnd;
  export type Model = IModel;
  export type Expression = IExpression;
  export type StringExpression = IStringExpression;
  export type Usage = IUsage;
  export type CollaborationUse = ICollaborationUse;
  export type Collaboration = ICollaboration;
  export type Connector = IConnector;
  export type Generalization = IGeneralization;
  export type GeneralizationSet = IGeneralizationSet;
  export type RedefinableTemplateSignature = IRedefinableTemplateSignature;
  export type UseCase = IUseCase;
  export type Extend = IExtend;
  export type ExtensionPoint = IExtensionPoint;
  export type Include = IInclude;
  export type Realization = IRealization;
  export type Substitution = ISubstitution;
  export type ClassifierTemplateParameter = IClassifierTemplateParameter;
  export type InterfaceRealization = IInterfaceRealization;
  export type ActivityGroup = IActivityGroup;
  export type ActivityEdge = IActivityEdge;
  export type ActivityPartition = IActivityPartition;
  export type ActivityNode = IActivityNode;
  export type InterruptibleActivityRegion = IInterruptibleActivityRegion;
  export type ExecutableNode = IExecutableNode;
  export type Action = IAction;
  export type StructuredActivityNode = IStructuredActivityNode;
  export type ExceptionHandler = IExceptionHandler;
  export type ObjectNode = IObjectNode;
  export type Pin = IPin;
  export type InputPin = IInputPin;
  export type OutputPin = IOutputPin;
  export type Variable = IVariable;
  export type ValueSpecificationAction = IValueSpecificationAction;
  export type VariableAction = IVariableAction;
  export type LinkAction = ILinkAction;
  export type WriteLinkAction = IWriteLinkAction;
  export type LinkEndData = ILinkEndData;
  export type QualifierValue = IQualifierValue;
  export type StructuralFeatureAction = IStructuralFeatureAction;
  export type WriteStructuralFeatureAction = IWriteStructuralFeatureAction;
  export type WriteVariableAction = IWriteVariableAction;
  export type AcceptEventAction = IAcceptEventAction;
  export type AcceptCallAction = IAcceptCallAction;
  export type ActionInputPin = IActionInputPin;
  export type AddStructuralFeatureValueAction = IAddStructuralFeatureValueAction;
  export type AddVariableValueAction = IAddVariableValueAction;
  export type InvocationAction = IInvocationAction;
  export type BroadcastSignalAction = IBroadcastSignalAction;
  export type CallAction = ICallAction;
  export type CallBehaviorAction = ICallBehaviorAction;
  export type CallOperationAction = ICallOperationAction;
  export type Clause = IClause;
  export type ClearAssociationAction = IClearAssociationAction;
  export type ClearStructuralFeatureAction = IClearStructuralFeatureAction;
  export type ClearVariableAction = IClearVariableAction;
  export type ConditionalNode = IConditionalNode;
  export type CreateLinkAction = ICreateLinkAction;
  export type LinkEndCreationData = ILinkEndCreationData;
  export type CreateLinkObjectAction = ICreateLinkObjectAction;
  export type CreateObjectAction = ICreateObjectAction;
  export type DestroyLinkAction = IDestroyLinkAction;
  export type LinkEndDestructionData = ILinkEndDestructionData;
  export type DestroyObjectAction = IDestroyObjectAction;
  export type ExpansionNode = IExpansionNode;
  export type ExpansionRegion = IExpansionRegion;
  export type LoopNode = ILoopNode;
  export type OpaqueAction = IOpaqueAction;
  export type RaiseExceptionAction = IRaiseExceptionAction;
  export type ReadExtentAction = IReadExtentAction;
  export type ReadIsClassifiedObjectAction = IReadIsClassifiedObjectAction;
  export type ReadLinkAction = IReadLinkAction;
  export type ReadLinkObjectEndAction = IReadLinkObjectEndAction;
  export type ReadLinkObjectEndQualifierAction = IReadLinkObjectEndQualifierAction;
  export type ReadSelfAction = IReadSelfAction;
  export type ReadStructuralFeatureAction = IReadStructuralFeatureAction;
  export type ReadVariableAction = IReadVariableAction;
  export type ReclassifyObjectAction = IReclassifyObjectAction;
  export type ReduceAction = IReduceAction;
  export type RemoveStructuralFeatureValueAction = IRemoveStructuralFeatureValueAction;
  export type RemoveVariableValueAction = IRemoveVariableValueAction;
  export type ReplyAction = IReplyAction;
  export type SendObjectAction = ISendObjectAction;
  export type SendSignalAction = ISendSignalAction;
  export type SequenceNode = ISequenceNode;
  export type StartClassifierBehaviorAction = IStartClassifierBehaviorAction;
  export type StartObjectBehaviorAction = IStartObjectBehaviorAction;
  export type TestIdentityAction = ITestIdentityAction;
  export type UnmarshallAction = IUnmarshallAction;
  export type ValuePin = IValuePin;
  export type ControlNode = IControlNode;
  export type FinalNode = IFinalNode;
  export type ActivityFinalNode = IActivityFinalNode;
  export type ActivityParameterNode = IActivityParameterNode;
  export type CentralBufferNode = ICentralBufferNode;
  export type ControlFlow = IControlFlow;
  export type DataStoreNode = IDataStoreNode;
  export type DecisionNode = IDecisionNode;
  export type ObjectFlow = IObjectFlow;
  export type FlowFinalNode = IFlowFinalNode;
  export type ForkNode = IForkNode;
  export type InitialNode = IInitialNode;
  export type JoinNode = IJoinNode;
  export type MergeNode = IMergeNode;
  export type InstanceValue = IInstanceValue;
  export type MessageEvent = IMessageEvent;
  export type AnyReceiveEvent = IAnyReceiveEvent;
  export type CallEvent = ICallEvent;
  export type ChangeEvent = IChangeEvent;
  export type OpaqueBehavior = IOpaqueBehavior;
  export type FunctionBehavior = IFunctionBehavior;
  export type SignalEvent = ISignalEvent;
  export type TimeEvent = ITimeEvent;
  export type TimeExpression = ITimeExpression;
  export type Observation = IObservation;
  export type CommunicationPath = ICommunicationPath;
  export type Node = INode;
  export type Device = IDevice;
  export type ExecutionEnvironment = IExecutionEnvironment;
  export type InformationFlow = IInformationFlow;
  export type Message = IMessage;
  export type InteractionFragment = IInteractionFragment;
  export type Interaction = IInteraction;
  export type Lifeline = ILifeline;
  export type InteractionUse = IInteractionUse;
  export type PartDecomposition = IPartDecomposition;
  export type MessageEnd = IMessageEnd;
  export type Gate = IGate;
  export type InteractionOperand = IInteractionOperand;
  export type InteractionConstraint = IInteractionConstraint;
  export type GeneralOrdering = IGeneralOrdering;
  export type OccurrenceSpecification = IOccurrenceSpecification;
  export type InformationItem = IInformationItem;
  export type ExecutionSpecification = IExecutionSpecification;
  export type ActionExecutionSpecification = IActionExecutionSpecification;
  export type BehaviorExecutionSpecification = IBehaviorExecutionSpecification;
  export type CombinedFragment = ICombinedFragment;
  export type ConsiderIgnoreFragment = IConsiderIgnoreFragment;
  export type Continuation = IContinuation;
  export type MessageOccurrenceSpecification = IMessageOccurrenceSpecification;
  export type DestructionOccurrenceSpecification = IDestructionOccurrenceSpecification;
  export type ExecutionOccurrenceSpecification = IExecutionOccurrenceSpecification;
  export type StateInvariant = IStateInvariant;
  export type FinalState = IFinalState;
  export type ProtocolTransition = IProtocolTransition;
  export type AssociationClass = IAssociationClass;
  export type Component = IComponent;
  export type ComponentRealization = IComponentRealization;
  export type Actor = IActor;
  export type Duration = IDuration;
  export type IntervalConstraint = IIntervalConstraint;
  export type DurationConstraint = IDurationConstraint;
  export type Interval = IInterval;
  export type DurationInterval = IDurationInterval;
  export type DurationObservation = IDurationObservation;
  export type LiteralSpecification = ILiteralSpecification;
  export type LiteralBoolean = ILiteralBoolean;
  export type LiteralInteger = ILiteralInteger;
  export type LiteralNull = ILiteralNull;
  export type LiteralReal = ILiteralReal;
  export type LiteralString = ILiteralString;
  export type LiteralUnlimitedNatural = ILiteralUnlimitedNatural;
  export type TimeConstraint = ITimeConstraint;
  export type TimeInterval = ITimeInterval;
  export type TimeObservation = ITimeObservation;

  // Implementation classes
  export namespace Impl {
    export { ActivityContent } from '../ActivityContent';
    export { EModelElement } from '../EModelElement';
    export { Element } from '../Element';
    export { NamedElement } from '../NamedElement';
    export { Namespace } from '../Namespace';
    export { RedefinableElement } from '../RedefinableElement';
    export { ParameterableElement } from '../ParameterableElement';
    export { PackageableElement } from '../PackageableElement';
    export { Type } from '../Type';
    export { TemplateableElement } from '../TemplateableElement';
    export { Classifier } from '../Classifier';
    export { StructuredClassifier } from '../StructuredClassifier';
    export { EncapsulatedClassifier } from '../EncapsulatedClassifier';
    export { BehavioredClassifier } from '../BehavioredClassifier';
    export { Class } from '../Class';
    export { Behavior } from '../Behavior';
    export { Activity } from '../Activity';
    export { Comment } from '../Comment';
    export { Stereotype } from '../Stereotype';
    export { Image } from '../Image';
    export { Package } from '../Package';
    export { Profile } from '../Profile';
    export { TemplateParameter } from '../TemplateParameter';
    export { TemplateSignature } from '../TemplateSignature';
    export { Relationship } from '../Relationship';
    export { DirectedRelationship } from '../DirectedRelationship';
    export { TemplateBinding } from '../TemplateBinding';
    export { TemplateParameterSubstitution } from '../TemplateParameterSubstitution';
    export { Association } from '../Association';
    export { Feature } from '../Feature';
    export { TypedElement } from '../TypedElement';
    export { MultiplicityElement } from '../MultiplicityElement';
    export { StructuralFeature } from '../StructuralFeature';
    export { ConnectableElement } from '../ConnectableElement';
    export { DeploymentTarget } from '../DeploymentTarget';
    export { Property } from '../Property';
    export { ConnectorEnd } from '../ConnectorEnd';
    export { ValueSpecification } from '../ValueSpecification';
    export { ConnectableElementTemplateParameter } from '../ConnectableElementTemplateParameter';
    export { Dependency } from '../Dependency';
    export { Deployment } from '../Deployment';
    export { DeployedArtifact } from '../DeployedArtifact';
    export { Artifact } from '../Artifact';
    export { DeploymentSpecification } from '../DeploymentSpecification';
    export { Abstraction } from '../Abstraction';
    export { Manifestation } from '../Manifestation';
    export { OpaqueExpression } from '../OpaqueExpression';
    export { Parameter } from '../Parameter';
    export { BehavioralFeature } from '../BehavioralFeature';
    export { Operation } from '../Operation';
    export { ParameterSet } from '../ParameterSet';
    export { Constraint } from '../Constraint';
    export { DataType } from '../DataType';
    export { Interface } from '../Interface';
    export { Reception } from '../Reception';
    export { Signal } from '../Signal';
    export { StateMachine } from '../StateMachine';
    export { ProtocolStateMachine } from '../ProtocolStateMachine';
    export { Vertex } from '../Vertex';
    export { Pseudostate } from '../Pseudostate';
    export { Region } from '../Region';
    export { State } from '../State';
    export { ConnectionPointReference } from '../ConnectionPointReference';
    export { Trigger } from '../Trigger';
    export { Event } from '../Event';
    export { Port } from '../Port';
    export { Transition } from '../Transition';
    export { ProtocolConformance } from '../ProtocolConformance';
    export { OperationTemplateParameter } from '../OperationTemplateParameter';
    export { PackageMerge } from '../PackageMerge';
    export { ProfileApplication } from '../ProfileApplication';
    export { Enumeration } from '../Enumeration';
    export { InstanceSpecification } from '../InstanceSpecification';
    export { EnumerationLiteral } from '../EnumerationLiteral';
    export { Slot } from '../Slot';
    export { PrimitiveType } from '../PrimitiveType';
    export { ElementImport } from '../ElementImport';
    export { PackageImport } from '../PackageImport';
    export { Extension } from '../Extension';
    export { ExtensionEnd } from '../ExtensionEnd';
    export { Model } from '../Model';
    export { Expression } from '../Expression';
    export { StringExpression } from '../StringExpression';
    export { Usage } from '../Usage';
    export { CollaborationUse } from '../CollaborationUse';
    export { Collaboration } from '../Collaboration';
    export { Connector } from '../Connector';
    export { Generalization } from '../Generalization';
    export { GeneralizationSet } from '../GeneralizationSet';
    export { RedefinableTemplateSignature } from '../RedefinableTemplateSignature';
    export { UseCase } from '../UseCase';
    export { Extend } from '../Extend';
    export { ExtensionPoint } from '../ExtensionPoint';
    export { Include } from '../Include';
    export { Realization } from '../Realization';
    export { Substitution } from '../Substitution';
    export { ClassifierTemplateParameter } from '../ClassifierTemplateParameter';
    export { InterfaceRealization } from '../InterfaceRealization';
    export { ActivityGroup } from '../ActivityGroup';
    export { ActivityEdge } from '../ActivityEdge';
    export { ActivityPartition } from '../ActivityPartition';
    export { ActivityNode } from '../ActivityNode';
    export { InterruptibleActivityRegion } from '../InterruptibleActivityRegion';
    export { ExecutableNode } from '../ExecutableNode';
    export { Action } from '../Action';
    export { StructuredActivityNode } from '../StructuredActivityNode';
    export { ExceptionHandler } from '../ExceptionHandler';
    export { ObjectNode } from '../ObjectNode';
    export { Pin } from '../Pin';
    export { InputPin } from '../InputPin';
    export { OutputPin } from '../OutputPin';
    export { Variable } from '../Variable';
    export { ValueSpecificationAction } from '../ValueSpecificationAction';
    export { VariableAction } from '../VariableAction';
    export { LinkAction } from '../LinkAction';
    export { WriteLinkAction } from '../WriteLinkAction';
    export { LinkEndData } from '../LinkEndData';
    export { QualifierValue } from '../QualifierValue';
    export { StructuralFeatureAction } from '../StructuralFeatureAction';
    export { WriteStructuralFeatureAction } from '../WriteStructuralFeatureAction';
    export { WriteVariableAction } from '../WriteVariableAction';
    export { AcceptEventAction } from '../AcceptEventAction';
    export { AcceptCallAction } from '../AcceptCallAction';
    export { ActionInputPin } from '../ActionInputPin';
    export { AddStructuralFeatureValueAction } from '../AddStructuralFeatureValueAction';
    export { AddVariableValueAction } from '../AddVariableValueAction';
    export { InvocationAction } from '../InvocationAction';
    export { BroadcastSignalAction } from '../BroadcastSignalAction';
    export { CallAction } from '../CallAction';
    export { CallBehaviorAction } from '../CallBehaviorAction';
    export { CallOperationAction } from '../CallOperationAction';
    export { Clause } from '../Clause';
    export { ClearAssociationAction } from '../ClearAssociationAction';
    export { ClearStructuralFeatureAction } from '../ClearStructuralFeatureAction';
    export { ClearVariableAction } from '../ClearVariableAction';
    export { ConditionalNode } from '../ConditionalNode';
    export { CreateLinkAction } from '../CreateLinkAction';
    export { LinkEndCreationData } from '../LinkEndCreationData';
    export { CreateLinkObjectAction } from '../CreateLinkObjectAction';
    export { CreateObjectAction } from '../CreateObjectAction';
    export { DestroyLinkAction } from '../DestroyLinkAction';
    export { LinkEndDestructionData } from '../LinkEndDestructionData';
    export { DestroyObjectAction } from '../DestroyObjectAction';
    export { ExpansionNode } from '../ExpansionNode';
    export { ExpansionRegion } from '../ExpansionRegion';
    export { LoopNode } from '../LoopNode';
    export { OpaqueAction } from '../OpaqueAction';
    export { RaiseExceptionAction } from '../RaiseExceptionAction';
    export { ReadExtentAction } from '../ReadExtentAction';
    export { ReadIsClassifiedObjectAction } from '../ReadIsClassifiedObjectAction';
    export { ReadLinkAction } from '../ReadLinkAction';
    export { ReadLinkObjectEndAction } from '../ReadLinkObjectEndAction';
    export { ReadLinkObjectEndQualifierAction } from '../ReadLinkObjectEndQualifierAction';
    export { ReadSelfAction } from '../ReadSelfAction';
    export { ReadStructuralFeatureAction } from '../ReadStructuralFeatureAction';
    export { ReadVariableAction } from '../ReadVariableAction';
    export { ReclassifyObjectAction } from '../ReclassifyObjectAction';
    export { ReduceAction } from '../ReduceAction';
    export { RemoveStructuralFeatureValueAction } from '../RemoveStructuralFeatureValueAction';
    export { RemoveVariableValueAction } from '../RemoveVariableValueAction';
    export { ReplyAction } from '../ReplyAction';
    export { SendObjectAction } from '../SendObjectAction';
    export { SendSignalAction } from '../SendSignalAction';
    export { SequenceNode } from '../SequenceNode';
    export { StartClassifierBehaviorAction } from '../StartClassifierBehaviorAction';
    export { StartObjectBehaviorAction } from '../StartObjectBehaviorAction';
    export { TestIdentityAction } from '../TestIdentityAction';
    export { UnmarshallAction } from '../UnmarshallAction';
    export { ValuePin } from '../ValuePin';
    export { ControlNode } from '../ControlNode';
    export { FinalNode } from '../FinalNode';
    export { ActivityFinalNode } from '../ActivityFinalNode';
    export { ActivityParameterNode } from '../ActivityParameterNode';
    export { CentralBufferNode } from '../CentralBufferNode';
    export { ControlFlow } from '../ControlFlow';
    export { DataStoreNode } from '../DataStoreNode';
    export { DecisionNode } from '../DecisionNode';
    export { ObjectFlow } from '../ObjectFlow';
    export { FlowFinalNode } from '../FlowFinalNode';
    export { ForkNode } from '../ForkNode';
    export { InitialNode } from '../InitialNode';
    export { JoinNode } from '../JoinNode';
    export { MergeNode } from '../MergeNode';
    export { InstanceValue } from '../InstanceValue';
    export { MessageEvent } from '../MessageEvent';
    export { AnyReceiveEvent } from '../AnyReceiveEvent';
    export { CallEvent } from '../CallEvent';
    export { ChangeEvent } from '../ChangeEvent';
    export { OpaqueBehavior } from '../OpaqueBehavior';
    export { FunctionBehavior } from '../FunctionBehavior';
    export { SignalEvent } from '../SignalEvent';
    export { TimeEvent } from '../TimeEvent';
    export { TimeExpression } from '../TimeExpression';
    export { Observation } from '../Observation';
    export { CommunicationPath } from '../CommunicationPath';
    export { Node } from '../Node';
    export { Device } from '../Device';
    export { ExecutionEnvironment } from '../ExecutionEnvironment';
    export { InformationFlow } from '../InformationFlow';
    export { Message } from '../Message';
    export { InteractionFragment } from '../InteractionFragment';
    export { Interaction } from '../Interaction';
    export { Lifeline } from '../Lifeline';
    export { InteractionUse } from '../InteractionUse';
    export { PartDecomposition } from '../PartDecomposition';
    export { MessageEnd } from '../MessageEnd';
    export { Gate } from '../Gate';
    export { InteractionOperand } from '../InteractionOperand';
    export { InteractionConstraint } from '../InteractionConstraint';
    export { GeneralOrdering } from '../GeneralOrdering';
    export { OccurrenceSpecification } from '../OccurrenceSpecification';
    export { InformationItem } from '../InformationItem';
    export { ExecutionSpecification } from '../ExecutionSpecification';
    export { ActionExecutionSpecification } from '../ActionExecutionSpecification';
    export { BehaviorExecutionSpecification } from '../BehaviorExecutionSpecification';
    export { CombinedFragment } from '../CombinedFragment';
    export { ConsiderIgnoreFragment } from '../ConsiderIgnoreFragment';
    export { Continuation } from '../Continuation';
    export { MessageOccurrenceSpecification } from '../MessageOccurrenceSpecification';
    export { DestructionOccurrenceSpecification } from '../DestructionOccurrenceSpecification';
    export { ExecutionOccurrenceSpecification } from '../ExecutionOccurrenceSpecification';
    export { StateInvariant } from '../StateInvariant';
    export { FinalState } from '../FinalState';
    export { ProtocolTransition } from '../ProtocolTransition';
    export { AssociationClass } from '../AssociationClass';
    export { Component } from '../Component';
    export { ComponentRealization } from '../ComponentRealization';
    export { Actor } from '../Actor';
    export { Duration } from '../Duration';
    export { IntervalConstraint } from '../IntervalConstraint';
    export { DurationConstraint } from '../DurationConstraint';
    export { Interval } from '../Interval';
    export { DurationInterval } from '../DurationInterval';
    export { DurationObservation } from '../DurationObservation';
    export { LiteralSpecification } from '../LiteralSpecification';
    export { LiteralBoolean } from '../LiteralBoolean';
    export { LiteralInteger } from '../LiteralInteger';
    export { LiteralNull } from '../LiteralNull';
    export { LiteralReal } from '../LiteralReal';
    export { LiteralString } from '../LiteralString';
    export { LiteralUnlimitedNatural } from '../LiteralUnlimitedNatural';
    export { TimeConstraint } from '../TimeConstraint';
    export { TimeInterval } from '../TimeInterval';
    export { TimeObservation } from '../TimeObservation';
  }

  // Enums
  export namespace Enums {
    export { VisibilityKind } from '../VisibilityKind';
    export { ParameterDirectionKind } from '../ParameterDirectionKind';
    export { ParameterEffectKind } from '../ParameterEffectKind';
    export { CallConcurrencyKind } from '../CallConcurrencyKind';
    export { TransitionKind } from '../TransitionKind';
    export { PseudostateKind } from '../PseudostateKind';
    export { AggregationKind } from '../AggregationKind';
    export { ConnectorKind } from '../ConnectorKind';
    export { ObjectNodeOrderingKind } from '../ObjectNodeOrderingKind';
    export { ExpansionKind } from '../ExpansionKind';
    export { MessageKind } from '../MessageKind';
    export { MessageSort } from '../MessageSort';
    export { InteractionOperatorKind } from '../InteractionOperatorKind';
  }
}

// Factory Functions
export const UMLFactory = {
  createClass(init?: Partial<IClass>): Class {
    return new Class(init);
  },
  createActivity(init?: Partial<IActivity>): Activity {
    return new Activity(init);
  },
  createComment(init?: Partial<IComment>): Comment {
    return new Comment(init);
  },
  createStereotype(init?: Partial<IStereotype>): Stereotype {
    return new Stereotype(init);
  },
  createImage(init?: Partial<IImage>): Image {
    return new Image(init);
  },
  createPackage(init?: Partial<IPackage>): Package {
    return new Package(init);
  },
  createProfile(init?: Partial<IProfile>): Profile {
    return new Profile(init);
  },
  createTemplateParameter(init?: Partial<ITemplateParameter>): TemplateParameter {
    return new TemplateParameter(init);
  },
  createTemplateSignature(init?: Partial<ITemplateSignature>): TemplateSignature {
    return new TemplateSignature(init);
  },
  createTemplateBinding(init?: Partial<ITemplateBinding>): TemplateBinding {
    return new TemplateBinding(init);
  },
  createTemplateParameterSubstitution(init?: Partial<ITemplateParameterSubstitution>): TemplateParameterSubstitution {
    return new TemplateParameterSubstitution(init);
  },
  createAssociation(init?: Partial<IAssociation>): Association {
    return new Association(init);
  },
  createProperty(init?: Partial<IProperty>): Property {
    return new Property(init);
  },
  createConnectorEnd(init?: Partial<IConnectorEnd>): ConnectorEnd {
    return new ConnectorEnd(init);
  },
  createConnectableElementTemplateParameter(init?: Partial<IConnectableElementTemplateParameter>): ConnectableElementTemplateParameter {
    return new ConnectableElementTemplateParameter(init);
  },
  createDependency(init?: Partial<IDependency>): Dependency {
    return new Dependency(init);
  },
  createDeployment(init?: Partial<IDeployment>): Deployment {
    return new Deployment(init);
  },
  createArtifact(init?: Partial<IArtifact>): Artifact {
    return new Artifact(init);
  },
  createDeploymentSpecification(init?: Partial<IDeploymentSpecification>): DeploymentSpecification {
    return new DeploymentSpecification(init);
  },
  createAbstraction(init?: Partial<IAbstraction>): Abstraction {
    return new Abstraction(init);
  },
  createManifestation(init?: Partial<IManifestation>): Manifestation {
    return new Manifestation(init);
  },
  createOpaqueExpression(init?: Partial<IOpaqueExpression>): OpaqueExpression {
    return new OpaqueExpression(init);
  },
  createParameter(init?: Partial<IParameter>): Parameter {
    return new Parameter(init);
  },
  createOperation(init?: Partial<IOperation>): Operation {
    return new Operation(init);
  },
  createParameterSet(init?: Partial<IParameterSet>): ParameterSet {
    return new ParameterSet(init);
  },
  createConstraint(init?: Partial<IConstraint>): Constraint {
    return new Constraint(init);
  },
  createDataType(init?: Partial<IDataType>): DataType {
    return new DataType(init);
  },
  createInterface(init?: Partial<IInterface>): Interface {
    return new Interface(init);
  },
  createReception(init?: Partial<IReception>): Reception {
    return new Reception(init);
  },
  createSignal(init?: Partial<ISignal>): Signal {
    return new Signal(init);
  },
  createStateMachine(init?: Partial<IStateMachine>): StateMachine {
    return new StateMachine(init);
  },
  createProtocolStateMachine(init?: Partial<IProtocolStateMachine>): ProtocolStateMachine {
    return new ProtocolStateMachine(init);
  },
  createPseudostate(init?: Partial<IPseudostate>): Pseudostate {
    return new Pseudostate(init);
  },
  createRegion(init?: Partial<IRegion>): Region {
    return new Region(init);
  },
  createState(init?: Partial<IState>): State {
    return new State(init);
  },
  createConnectionPointReference(init?: Partial<IConnectionPointReference>): ConnectionPointReference {
    return new ConnectionPointReference(init);
  },
  createTrigger(init?: Partial<ITrigger>): Trigger {
    return new Trigger(init);
  },
  createPort(init?: Partial<IPort>): Port {
    return new Port(init);
  },
  createTransition(init?: Partial<ITransition>): Transition {
    return new Transition(init);
  },
  createProtocolConformance(init?: Partial<IProtocolConformance>): ProtocolConformance {
    return new ProtocolConformance(init);
  },
  createOperationTemplateParameter(init?: Partial<IOperationTemplateParameter>): OperationTemplateParameter {
    return new OperationTemplateParameter(init);
  },
  createPackageMerge(init?: Partial<IPackageMerge>): PackageMerge {
    return new PackageMerge(init);
  },
  createProfileApplication(init?: Partial<IProfileApplication>): ProfileApplication {
    return new ProfileApplication(init);
  },
  createEnumeration(init?: Partial<IEnumeration>): Enumeration {
    return new Enumeration(init);
  },
  createInstanceSpecification(init?: Partial<IInstanceSpecification>): InstanceSpecification {
    return new InstanceSpecification(init);
  },
  createEnumerationLiteral(init?: Partial<IEnumerationLiteral>): EnumerationLiteral {
    return new EnumerationLiteral(init);
  },
  createSlot(init?: Partial<ISlot>): Slot {
    return new Slot(init);
  },
  createPrimitiveType(init?: Partial<IPrimitiveType>): PrimitiveType {
    return new PrimitiveType(init);
  },
  createElementImport(init?: Partial<IElementImport>): ElementImport {
    return new ElementImport(init);
  },
  createPackageImport(init?: Partial<IPackageImport>): PackageImport {
    return new PackageImport(init);
  },
  createExtension(init?: Partial<IExtension>): Extension {
    return new Extension(init);
  },
  createExtensionEnd(init?: Partial<IExtensionEnd>): ExtensionEnd {
    return new ExtensionEnd(init);
  },
  createModel(init?: Partial<IModel>): Model {
    return new Model(init);
  },
  createExpression(init?: Partial<IExpression>): Expression {
    return new Expression(init);
  },
  createStringExpression(init?: Partial<IStringExpression>): StringExpression {
    return new StringExpression(init);
  },
  createUsage(init?: Partial<IUsage>): Usage {
    return new Usage(init);
  },
  createCollaborationUse(init?: Partial<ICollaborationUse>): CollaborationUse {
    return new CollaborationUse(init);
  },
  createCollaboration(init?: Partial<ICollaboration>): Collaboration {
    return new Collaboration(init);
  },
  createConnector(init?: Partial<IConnector>): Connector {
    return new Connector(init);
  },
  createGeneralization(init?: Partial<IGeneralization>): Generalization {
    return new Generalization(init);
  },
  createGeneralizationSet(init?: Partial<IGeneralizationSet>): GeneralizationSet {
    return new GeneralizationSet(init);
  },
  createRedefinableTemplateSignature(init?: Partial<IRedefinableTemplateSignature>): RedefinableTemplateSignature {
    return new RedefinableTemplateSignature(init);
  },
  createUseCase(init?: Partial<IUseCase>): UseCase {
    return new UseCase(init);
  },
  createExtend(init?: Partial<IExtend>): Extend {
    return new Extend(init);
  },
  createExtensionPoint(init?: Partial<IExtensionPoint>): ExtensionPoint {
    return new ExtensionPoint(init);
  },
  createInclude(init?: Partial<IInclude>): Include {
    return new Include(init);
  },
  createRealization(init?: Partial<IRealization>): Realization {
    return new Realization(init);
  },
  createSubstitution(init?: Partial<ISubstitution>): Substitution {
    return new Substitution(init);
  },
  createClassifierTemplateParameter(init?: Partial<IClassifierTemplateParameter>): ClassifierTemplateParameter {
    return new ClassifierTemplateParameter(init);
  },
  createInterfaceRealization(init?: Partial<IInterfaceRealization>): InterfaceRealization {
    return new InterfaceRealization(init);
  },
  createActivityPartition(init?: Partial<IActivityPartition>): ActivityPartition {
    return new ActivityPartition(init);
  },
  createInterruptibleActivityRegion(init?: Partial<IInterruptibleActivityRegion>): InterruptibleActivityRegion {
    return new InterruptibleActivityRegion(init);
  },
  createStructuredActivityNode(init?: Partial<IStructuredActivityNode>): StructuredActivityNode {
    return new StructuredActivityNode(init);
  },
  createExceptionHandler(init?: Partial<IExceptionHandler>): ExceptionHandler {
    return new ExceptionHandler(init);
  },
  createInputPin(init?: Partial<IInputPin>): InputPin {
    return new InputPin(init);
  },
  createOutputPin(init?: Partial<IOutputPin>): OutputPin {
    return new OutputPin(init);
  },
  createVariable(init?: Partial<IVariable>): Variable {
    return new Variable(init);
  },
  createValueSpecificationAction(init?: Partial<IValueSpecificationAction>): ValueSpecificationAction {
    return new ValueSpecificationAction(init);
  },
  createLinkEndData(init?: Partial<ILinkEndData>): LinkEndData {
    return new LinkEndData(init);
  },
  createQualifierValue(init?: Partial<IQualifierValue>): QualifierValue {
    return new QualifierValue(init);
  },
  createAcceptEventAction(init?: Partial<IAcceptEventAction>): AcceptEventAction {
    return new AcceptEventAction(init);
  },
  createAcceptCallAction(init?: Partial<IAcceptCallAction>): AcceptCallAction {
    return new AcceptCallAction(init);
  },
  createActionInputPin(init?: Partial<IActionInputPin>): ActionInputPin {
    return new ActionInputPin(init);
  },
  createAddStructuralFeatureValueAction(init?: Partial<IAddStructuralFeatureValueAction>): AddStructuralFeatureValueAction {
    return new AddStructuralFeatureValueAction(init);
  },
  createAddVariableValueAction(init?: Partial<IAddVariableValueAction>): AddVariableValueAction {
    return new AddVariableValueAction(init);
  },
  createBroadcastSignalAction(init?: Partial<IBroadcastSignalAction>): BroadcastSignalAction {
    return new BroadcastSignalAction(init);
  },
  createCallBehaviorAction(init?: Partial<ICallBehaviorAction>): CallBehaviorAction {
    return new CallBehaviorAction(init);
  },
  createCallOperationAction(init?: Partial<ICallOperationAction>): CallOperationAction {
    return new CallOperationAction(init);
  },
  createClause(init?: Partial<IClause>): Clause {
    return new Clause(init);
  },
  createClearAssociationAction(init?: Partial<IClearAssociationAction>): ClearAssociationAction {
    return new ClearAssociationAction(init);
  },
  createClearStructuralFeatureAction(init?: Partial<IClearStructuralFeatureAction>): ClearStructuralFeatureAction {
    return new ClearStructuralFeatureAction(init);
  },
  createClearVariableAction(init?: Partial<IClearVariableAction>): ClearVariableAction {
    return new ClearVariableAction(init);
  },
  createConditionalNode(init?: Partial<IConditionalNode>): ConditionalNode {
    return new ConditionalNode(init);
  },
  createCreateLinkAction(init?: Partial<ICreateLinkAction>): CreateLinkAction {
    return new CreateLinkAction(init);
  },
  createLinkEndCreationData(init?: Partial<ILinkEndCreationData>): LinkEndCreationData {
    return new LinkEndCreationData(init);
  },
  createCreateLinkObjectAction(init?: Partial<ICreateLinkObjectAction>): CreateLinkObjectAction {
    return new CreateLinkObjectAction(init);
  },
  createCreateObjectAction(init?: Partial<ICreateObjectAction>): CreateObjectAction {
    return new CreateObjectAction(init);
  },
  createDestroyLinkAction(init?: Partial<IDestroyLinkAction>): DestroyLinkAction {
    return new DestroyLinkAction(init);
  },
  createLinkEndDestructionData(init?: Partial<ILinkEndDestructionData>): LinkEndDestructionData {
    return new LinkEndDestructionData(init);
  },
  createDestroyObjectAction(init?: Partial<IDestroyObjectAction>): DestroyObjectAction {
    return new DestroyObjectAction(init);
  },
  createExpansionNode(init?: Partial<IExpansionNode>): ExpansionNode {
    return new ExpansionNode(init);
  },
  createExpansionRegion(init?: Partial<IExpansionRegion>): ExpansionRegion {
    return new ExpansionRegion(init);
  },
  createLoopNode(init?: Partial<ILoopNode>): LoopNode {
    return new LoopNode(init);
  },
  createOpaqueAction(init?: Partial<IOpaqueAction>): OpaqueAction {
    return new OpaqueAction(init);
  },
  createRaiseExceptionAction(init?: Partial<IRaiseExceptionAction>): RaiseExceptionAction {
    return new RaiseExceptionAction(init);
  },
  createReadExtentAction(init?: Partial<IReadExtentAction>): ReadExtentAction {
    return new ReadExtentAction(init);
  },
  createReadIsClassifiedObjectAction(init?: Partial<IReadIsClassifiedObjectAction>): ReadIsClassifiedObjectAction {
    return new ReadIsClassifiedObjectAction(init);
  },
  createReadLinkAction(init?: Partial<IReadLinkAction>): ReadLinkAction {
    return new ReadLinkAction(init);
  },
  createReadLinkObjectEndAction(init?: Partial<IReadLinkObjectEndAction>): ReadLinkObjectEndAction {
    return new ReadLinkObjectEndAction(init);
  },
  createReadLinkObjectEndQualifierAction(init?: Partial<IReadLinkObjectEndQualifierAction>): ReadLinkObjectEndQualifierAction {
    return new ReadLinkObjectEndQualifierAction(init);
  },
  createReadSelfAction(init?: Partial<IReadSelfAction>): ReadSelfAction {
    return new ReadSelfAction(init);
  },
  createReadStructuralFeatureAction(init?: Partial<IReadStructuralFeatureAction>): ReadStructuralFeatureAction {
    return new ReadStructuralFeatureAction(init);
  },
  createReadVariableAction(init?: Partial<IReadVariableAction>): ReadVariableAction {
    return new ReadVariableAction(init);
  },
  createReclassifyObjectAction(init?: Partial<IReclassifyObjectAction>): ReclassifyObjectAction {
    return new ReclassifyObjectAction(init);
  },
  createReduceAction(init?: Partial<IReduceAction>): ReduceAction {
    return new ReduceAction(init);
  },
  createRemoveStructuralFeatureValueAction(init?: Partial<IRemoveStructuralFeatureValueAction>): RemoveStructuralFeatureValueAction {
    return new RemoveStructuralFeatureValueAction(init);
  },
  createRemoveVariableValueAction(init?: Partial<IRemoveVariableValueAction>): RemoveVariableValueAction {
    return new RemoveVariableValueAction(init);
  },
  createReplyAction(init?: Partial<IReplyAction>): ReplyAction {
    return new ReplyAction(init);
  },
  createSendObjectAction(init?: Partial<ISendObjectAction>): SendObjectAction {
    return new SendObjectAction(init);
  },
  createSendSignalAction(init?: Partial<ISendSignalAction>): SendSignalAction {
    return new SendSignalAction(init);
  },
  createSequenceNode(init?: Partial<ISequenceNode>): SequenceNode {
    return new SequenceNode(init);
  },
  createStartClassifierBehaviorAction(init?: Partial<IStartClassifierBehaviorAction>): StartClassifierBehaviorAction {
    return new StartClassifierBehaviorAction(init);
  },
  createStartObjectBehaviorAction(init?: Partial<IStartObjectBehaviorAction>): StartObjectBehaviorAction {
    return new StartObjectBehaviorAction(init);
  },
  createTestIdentityAction(init?: Partial<ITestIdentityAction>): TestIdentityAction {
    return new TestIdentityAction(init);
  },
  createUnmarshallAction(init?: Partial<IUnmarshallAction>): UnmarshallAction {
    return new UnmarshallAction(init);
  },
  createValuePin(init?: Partial<IValuePin>): ValuePin {
    return new ValuePin(init);
  },
  createActivityFinalNode(init?: Partial<IActivityFinalNode>): ActivityFinalNode {
    return new ActivityFinalNode(init);
  },
  createActivityParameterNode(init?: Partial<IActivityParameterNode>): ActivityParameterNode {
    return new ActivityParameterNode(init);
  },
  createCentralBufferNode(init?: Partial<ICentralBufferNode>): CentralBufferNode {
    return new CentralBufferNode(init);
  },
  createControlFlow(init?: Partial<IControlFlow>): ControlFlow {
    return new ControlFlow(init);
  },
  createDataStoreNode(init?: Partial<IDataStoreNode>): DataStoreNode {
    return new DataStoreNode(init);
  },
  createDecisionNode(init?: Partial<IDecisionNode>): DecisionNode {
    return new DecisionNode(init);
  },
  createObjectFlow(init?: Partial<IObjectFlow>): ObjectFlow {
    return new ObjectFlow(init);
  },
  createFlowFinalNode(init?: Partial<IFlowFinalNode>): FlowFinalNode {
    return new FlowFinalNode(init);
  },
  createForkNode(init?: Partial<IForkNode>): ForkNode {
    return new ForkNode(init);
  },
  createInitialNode(init?: Partial<IInitialNode>): InitialNode {
    return new InitialNode(init);
  },
  createJoinNode(init?: Partial<IJoinNode>): JoinNode {
    return new JoinNode(init);
  },
  createMergeNode(init?: Partial<IMergeNode>): MergeNode {
    return new MergeNode(init);
  },
  createInstanceValue(init?: Partial<IInstanceValue>): InstanceValue {
    return new InstanceValue(init);
  },
  createAnyReceiveEvent(init?: Partial<IAnyReceiveEvent>): AnyReceiveEvent {
    return new AnyReceiveEvent(init);
  },
  createCallEvent(init?: Partial<ICallEvent>): CallEvent {
    return new CallEvent(init);
  },
  createChangeEvent(init?: Partial<IChangeEvent>): ChangeEvent {
    return new ChangeEvent(init);
  },
  createOpaqueBehavior(init?: Partial<IOpaqueBehavior>): OpaqueBehavior {
    return new OpaqueBehavior(init);
  },
  createFunctionBehavior(init?: Partial<IFunctionBehavior>): FunctionBehavior {
    return new FunctionBehavior(init);
  },
  createSignalEvent(init?: Partial<ISignalEvent>): SignalEvent {
    return new SignalEvent(init);
  },
  createTimeEvent(init?: Partial<ITimeEvent>): TimeEvent {
    return new TimeEvent(init);
  },
  createTimeExpression(init?: Partial<ITimeExpression>): TimeExpression {
    return new TimeExpression(init);
  },
  createCommunicationPath(init?: Partial<ICommunicationPath>): CommunicationPath {
    return new CommunicationPath(init);
  },
  createNode(init?: Partial<INode>): Node {
    return new Node(init);
  },
  createDevice(init?: Partial<IDevice>): Device {
    return new Device(init);
  },
  createExecutionEnvironment(init?: Partial<IExecutionEnvironment>): ExecutionEnvironment {
    return new ExecutionEnvironment(init);
  },
  createInformationFlow(init?: Partial<IInformationFlow>): InformationFlow {
    return new InformationFlow(init);
  },
  createMessage(init?: Partial<IMessage>): Message {
    return new Message(init);
  },
  createInteraction(init?: Partial<IInteraction>): Interaction {
    return new Interaction(init);
  },
  createLifeline(init?: Partial<ILifeline>): Lifeline {
    return new Lifeline(init);
  },
  createInteractionUse(init?: Partial<IInteractionUse>): InteractionUse {
    return new InteractionUse(init);
  },
  createPartDecomposition(init?: Partial<IPartDecomposition>): PartDecomposition {
    return new PartDecomposition(init);
  },
  createGate(init?: Partial<IGate>): Gate {
    return new Gate(init);
  },
  createInteractionOperand(init?: Partial<IInteractionOperand>): InteractionOperand {
    return new InteractionOperand(init);
  },
  createInteractionConstraint(init?: Partial<IInteractionConstraint>): InteractionConstraint {
    return new InteractionConstraint(init);
  },
  createGeneralOrdering(init?: Partial<IGeneralOrdering>): GeneralOrdering {
    return new GeneralOrdering(init);
  },
  createOccurrenceSpecification(init?: Partial<IOccurrenceSpecification>): OccurrenceSpecification {
    return new OccurrenceSpecification(init);
  },
  createInformationItem(init?: Partial<IInformationItem>): InformationItem {
    return new InformationItem(init);
  },
  createActionExecutionSpecification(init?: Partial<IActionExecutionSpecification>): ActionExecutionSpecification {
    return new ActionExecutionSpecification(init);
  },
  createBehaviorExecutionSpecification(init?: Partial<IBehaviorExecutionSpecification>): BehaviorExecutionSpecification {
    return new BehaviorExecutionSpecification(init);
  },
  createCombinedFragment(init?: Partial<ICombinedFragment>): CombinedFragment {
    return new CombinedFragment(init);
  },
  createConsiderIgnoreFragment(init?: Partial<IConsiderIgnoreFragment>): ConsiderIgnoreFragment {
    return new ConsiderIgnoreFragment(init);
  },
  createContinuation(init?: Partial<IContinuation>): Continuation {
    return new Continuation(init);
  },
  createMessageOccurrenceSpecification(init?: Partial<IMessageOccurrenceSpecification>): MessageOccurrenceSpecification {
    return new MessageOccurrenceSpecification(init);
  },
  createDestructionOccurrenceSpecification(init?: Partial<IDestructionOccurrenceSpecification>): DestructionOccurrenceSpecification {
    return new DestructionOccurrenceSpecification(init);
  },
  createExecutionOccurrenceSpecification(init?: Partial<IExecutionOccurrenceSpecification>): ExecutionOccurrenceSpecification {
    return new ExecutionOccurrenceSpecification(init);
  },
  createStateInvariant(init?: Partial<IStateInvariant>): StateInvariant {
    return new StateInvariant(init);
  },
  createFinalState(init?: Partial<IFinalState>): FinalState {
    return new FinalState(init);
  },
  createProtocolTransition(init?: Partial<IProtocolTransition>): ProtocolTransition {
    return new ProtocolTransition(init);
  },
  createAssociationClass(init?: Partial<IAssociationClass>): AssociationClass {
    return new AssociationClass(init);
  },
  createComponent(init?: Partial<IComponent>): Component {
    return new Component(init);
  },
  createComponentRealization(init?: Partial<IComponentRealization>): ComponentRealization {
    return new ComponentRealization(init);
  },
  createActor(init?: Partial<IActor>): Actor {
    return new Actor(init);
  },
  createDuration(init?: Partial<IDuration>): Duration {
    return new Duration(init);
  },
  createIntervalConstraint(init?: Partial<IIntervalConstraint>): IntervalConstraint {
    return new IntervalConstraint(init);
  },
  createDurationConstraint(init?: Partial<IDurationConstraint>): DurationConstraint {
    return new DurationConstraint(init);
  },
  createInterval(init?: Partial<IInterval>): Interval {
    return new Interval(init);
  },
  createDurationInterval(init?: Partial<IDurationInterval>): DurationInterval {
    return new DurationInterval(init);
  },
  createDurationObservation(init?: Partial<IDurationObservation>): DurationObservation {
    return new DurationObservation(init);
  },
  createLiteralBoolean(init?: Partial<ILiteralBoolean>): LiteralBoolean {
    return new LiteralBoolean(init);
  },
  createLiteralInteger(init?: Partial<ILiteralInteger>): LiteralInteger {
    return new LiteralInteger(init);
  },
  createLiteralNull(init?: Partial<ILiteralNull>): LiteralNull {
    return new LiteralNull(init);
  },
  createLiteralReal(init?: Partial<ILiteralReal>): LiteralReal {
    return new LiteralReal(init);
  },
  createLiteralString(init?: Partial<ILiteralString>): LiteralString {
    return new LiteralString(init);
  },
  createLiteralUnlimitedNatural(init?: Partial<ILiteralUnlimitedNatural>): LiteralUnlimitedNatural {
    return new LiteralUnlimitedNatural(init);
  },
  createTimeConstraint(init?: Partial<ITimeConstraint>): TimeConstraint {
    return new TimeConstraint(init);
  },
  createTimeInterval(init?: Partial<ITimeInterval>): TimeInterval {
    return new TimeInterval(init);
  },
  createTimeObservation(init?: Partial<ITimeObservation>): TimeObservation {
    return new TimeObservation(init);
  }
};

// Validation Utilities
export const UMLValidator = {
  validateActivityContent(instance: IActivityContent): ValidationResult {
    return ActivityContent.validate(instance);
  },
  validateEModelElement(instance: IEModelElement): ValidationResult {
    return EModelElement.validate(instance);
  },
  validateElement(instance: IElement): ValidationResult {
    return Element.validate(instance);
  },
  validateNamedElement(instance: INamedElement): ValidationResult {
    return NamedElement.validate(instance);
  },
  validateNamespace(instance: INamespace): ValidationResult {
    return Namespace.validate(instance);
  },
  validateRedefinableElement(instance: IRedefinableElement): ValidationResult {
    return RedefinableElement.validate(instance);
  },
  validateParameterableElement(instance: IParameterableElement): ValidationResult {
    return ParameterableElement.validate(instance);
  },
  validatePackageableElement(instance: IPackageableElement): ValidationResult {
    return PackageableElement.validate(instance);
  },
  validateType(instance: IType): ValidationResult {
    return Type.validate(instance);
  },
  validateTemplateableElement(instance: ITemplateableElement): ValidationResult {
    return TemplateableElement.validate(instance);
  },
  validateClassifier(instance: IClassifier): ValidationResult {
    return Classifier.validate(instance);
  },
  validateStructuredClassifier(instance: IStructuredClassifier): ValidationResult {
    return StructuredClassifier.validate(instance);
  },
  validateEncapsulatedClassifier(instance: IEncapsulatedClassifier): ValidationResult {
    return EncapsulatedClassifier.validate(instance);
  },
  validateBehavioredClassifier(instance: IBehavioredClassifier): ValidationResult {
    return BehavioredClassifier.validate(instance);
  },
  validateClass(instance: IClass): ValidationResult {
    return Class.validate(instance);
  },
  validateBehavior(instance: IBehavior): ValidationResult {
    return Behavior.validate(instance);
  },
  validateActivity(instance: IActivity): ValidationResult {
    return Activity.validate(instance);
  },
  validateComment(instance: IComment): ValidationResult {
    return Comment.validate(instance);
  },
  validateStereotype(instance: IStereotype): ValidationResult {
    return Stereotype.validate(instance);
  },
  validateImage(instance: IImage): ValidationResult {
    return Image.validate(instance);
  },
  validatePackage(instance: IPackage): ValidationResult {
    return Package.validate(instance);
  },
  validateProfile(instance: IProfile): ValidationResult {
    return Profile.validate(instance);
  },
  validateTemplateParameter(instance: ITemplateParameter): ValidationResult {
    return TemplateParameter.validate(instance);
  },
  validateTemplateSignature(instance: ITemplateSignature): ValidationResult {
    return TemplateSignature.validate(instance);
  },
  validateRelationship(instance: IRelationship): ValidationResult {
    return Relationship.validate(instance);
  },
  validateDirectedRelationship(instance: IDirectedRelationship): ValidationResult {
    return DirectedRelationship.validate(instance);
  },
  validateTemplateBinding(instance: ITemplateBinding): ValidationResult {
    return TemplateBinding.validate(instance);
  },
  validateTemplateParameterSubstitution(instance: ITemplateParameterSubstitution): ValidationResult {
    return TemplateParameterSubstitution.validate(instance);
  },
  validateAssociation(instance: IAssociation): ValidationResult {
    return Association.validate(instance);
  },
  validateFeature(instance: IFeature): ValidationResult {
    return Feature.validate(instance);
  },
  validateTypedElement(instance: ITypedElement): ValidationResult {
    return TypedElement.validate(instance);
  },
  validateMultiplicityElement(instance: IMultiplicityElement): ValidationResult {
    return MultiplicityElement.validate(instance);
  },
  validateStructuralFeature(instance: IStructuralFeature): ValidationResult {
    return StructuralFeature.validate(instance);
  },
  validateConnectableElement(instance: IConnectableElement): ValidationResult {
    return ConnectableElement.validate(instance);
  },
  validateDeploymentTarget(instance: IDeploymentTarget): ValidationResult {
    return DeploymentTarget.validate(instance);
  },
  validateProperty(instance: IProperty): ValidationResult {
    return Property.validate(instance);
  },
  validateConnectorEnd(instance: IConnectorEnd): ValidationResult {
    return ConnectorEnd.validate(instance);
  },
  validateValueSpecification(instance: IValueSpecification): ValidationResult {
    return ValueSpecification.validate(instance);
  },
  validateConnectableElementTemplateParameter(instance: IConnectableElementTemplateParameter): ValidationResult {
    return ConnectableElementTemplateParameter.validate(instance);
  },
  validateDependency(instance: IDependency): ValidationResult {
    return Dependency.validate(instance);
  },
  validateDeployment(instance: IDeployment): ValidationResult {
    return Deployment.validate(instance);
  },
  validateDeployedArtifact(instance: IDeployedArtifact): ValidationResult {
    return DeployedArtifact.validate(instance);
  },
  validateArtifact(instance: IArtifact): ValidationResult {
    return Artifact.validate(instance);
  },
  validateDeploymentSpecification(instance: IDeploymentSpecification): ValidationResult {
    return DeploymentSpecification.validate(instance);
  },
  validateAbstraction(instance: IAbstraction): ValidationResult {
    return Abstraction.validate(instance);
  },
  validateManifestation(instance: IManifestation): ValidationResult {
    return Manifestation.validate(instance);
  },
  validateOpaqueExpression(instance: IOpaqueExpression): ValidationResult {
    return OpaqueExpression.validate(instance);
  },
  validateParameter(instance: IParameter): ValidationResult {
    return Parameter.validate(instance);
  },
  validateBehavioralFeature(instance: IBehavioralFeature): ValidationResult {
    return BehavioralFeature.validate(instance);
  },
  validateOperation(instance: IOperation): ValidationResult {
    return Operation.validate(instance);
  },
  validateParameterSet(instance: IParameterSet): ValidationResult {
    return ParameterSet.validate(instance);
  },
  validateConstraint(instance: IConstraint): ValidationResult {
    return Constraint.validate(instance);
  },
  validateDataType(instance: IDataType): ValidationResult {
    return DataType.validate(instance);
  },
  validateInterface(instance: IInterface): ValidationResult {
    return Interface.validate(instance);
  },
  validateReception(instance: IReception): ValidationResult {
    return Reception.validate(instance);
  },
  validateSignal(instance: ISignal): ValidationResult {
    return Signal.validate(instance);
  },
  validateStateMachine(instance: IStateMachine): ValidationResult {
    return StateMachine.validate(instance);
  },
  validateProtocolStateMachine(instance: IProtocolStateMachine): ValidationResult {
    return ProtocolStateMachine.validate(instance);
  },
  validateVertex(instance: IVertex): ValidationResult {
    return Vertex.validate(instance);
  },
  validatePseudostate(instance: IPseudostate): ValidationResult {
    return Pseudostate.validate(instance);
  },
  validateRegion(instance: IRegion): ValidationResult {
    return Region.validate(instance);
  },
  validateState(instance: IState): ValidationResult {
    return State.validate(instance);
  },
  validateConnectionPointReference(instance: IConnectionPointReference): ValidationResult {
    return ConnectionPointReference.validate(instance);
  },
  validateTrigger(instance: ITrigger): ValidationResult {
    return Trigger.validate(instance);
  },
  validateEvent(instance: IEvent): ValidationResult {
    return Event.validate(instance);
  },
  validatePort(instance: IPort): ValidationResult {
    return Port.validate(instance);
  },
  validateTransition(instance: ITransition): ValidationResult {
    return Transition.validate(instance);
  },
  validateProtocolConformance(instance: IProtocolConformance): ValidationResult {
    return ProtocolConformance.validate(instance);
  },
  validateOperationTemplateParameter(instance: IOperationTemplateParameter): ValidationResult {
    return OperationTemplateParameter.validate(instance);
  },
  validatePackageMerge(instance: IPackageMerge): ValidationResult {
    return PackageMerge.validate(instance);
  },
  validateProfileApplication(instance: IProfileApplication): ValidationResult {
    return ProfileApplication.validate(instance);
  },
  validateEnumeration(instance: IEnumeration): ValidationResult {
    return Enumeration.validate(instance);
  },
  validateInstanceSpecification(instance: IInstanceSpecification): ValidationResult {
    return InstanceSpecification.validate(instance);
  },
  validateEnumerationLiteral(instance: IEnumerationLiteral): ValidationResult {
    return EnumerationLiteral.validate(instance);
  },
  validateSlot(instance: ISlot): ValidationResult {
    return Slot.validate(instance);
  },
  validatePrimitiveType(instance: IPrimitiveType): ValidationResult {
    return PrimitiveType.validate(instance);
  },
  validateElementImport(instance: IElementImport): ValidationResult {
    return ElementImport.validate(instance);
  },
  validatePackageImport(instance: IPackageImport): ValidationResult {
    return PackageImport.validate(instance);
  },
  validateExtension(instance: IExtension): ValidationResult {
    return Extension.validate(instance);
  },
  validateExtensionEnd(instance: IExtensionEnd): ValidationResult {
    return ExtensionEnd.validate(instance);
  },
  validateModel(instance: IModel): ValidationResult {
    return Model.validate(instance);
  },
  validateExpression(instance: IExpression): ValidationResult {
    return Expression.validate(instance);
  },
  validateStringExpression(instance: IStringExpression): ValidationResult {
    return StringExpression.validate(instance);
  },
  validateUsage(instance: IUsage): ValidationResult {
    return Usage.validate(instance);
  },
  validateCollaborationUse(instance: ICollaborationUse): ValidationResult {
    return CollaborationUse.validate(instance);
  },
  validateCollaboration(instance: ICollaboration): ValidationResult {
    return Collaboration.validate(instance);
  },
  validateConnector(instance: IConnector): ValidationResult {
    return Connector.validate(instance);
  },
  validateGeneralization(instance: IGeneralization): ValidationResult {
    return Generalization.validate(instance);
  },
  validateGeneralizationSet(instance: IGeneralizationSet): ValidationResult {
    return GeneralizationSet.validate(instance);
  },
  validateRedefinableTemplateSignature(instance: IRedefinableTemplateSignature): ValidationResult {
    return RedefinableTemplateSignature.validate(instance);
  },
  validateUseCase(instance: IUseCase): ValidationResult {
    return UseCase.validate(instance);
  },
  validateExtend(instance: IExtend): ValidationResult {
    return Extend.validate(instance);
  },
  validateExtensionPoint(instance: IExtensionPoint): ValidationResult {
    return ExtensionPoint.validate(instance);
  },
  validateInclude(instance: IInclude): ValidationResult {
    return Include.validate(instance);
  },
  validateRealization(instance: IRealization): ValidationResult {
    return Realization.validate(instance);
  },
  validateSubstitution(instance: ISubstitution): ValidationResult {
    return Substitution.validate(instance);
  },
  validateClassifierTemplateParameter(instance: IClassifierTemplateParameter): ValidationResult {
    return ClassifierTemplateParameter.validate(instance);
  },
  validateInterfaceRealization(instance: IInterfaceRealization): ValidationResult {
    return InterfaceRealization.validate(instance);
  },
  validateActivityGroup(instance: IActivityGroup): ValidationResult {
    return ActivityGroup.validate(instance);
  },
  validateActivityEdge(instance: IActivityEdge): ValidationResult {
    return ActivityEdge.validate(instance);
  },
  validateActivityPartition(instance: IActivityPartition): ValidationResult {
    return ActivityPartition.validate(instance);
  },
  validateActivityNode(instance: IActivityNode): ValidationResult {
    return ActivityNode.validate(instance);
  },
  validateInterruptibleActivityRegion(instance: IInterruptibleActivityRegion): ValidationResult {
    return InterruptibleActivityRegion.validate(instance);
  },
  validateExecutableNode(instance: IExecutableNode): ValidationResult {
    return ExecutableNode.validate(instance);
  },
  validateAction(instance: IAction): ValidationResult {
    return Action.validate(instance);
  },
  validateStructuredActivityNode(instance: IStructuredActivityNode): ValidationResult {
    return StructuredActivityNode.validate(instance);
  },
  validateExceptionHandler(instance: IExceptionHandler): ValidationResult {
    return ExceptionHandler.validate(instance);
  },
  validateObjectNode(instance: IObjectNode): ValidationResult {
    return ObjectNode.validate(instance);
  },
  validatePin(instance: IPin): ValidationResult {
    return Pin.validate(instance);
  },
  validateInputPin(instance: IInputPin): ValidationResult {
    return InputPin.validate(instance);
  },
  validateOutputPin(instance: IOutputPin): ValidationResult {
    return OutputPin.validate(instance);
  },
  validateVariable(instance: IVariable): ValidationResult {
    return Variable.validate(instance);
  },
  validateValueSpecificationAction(instance: IValueSpecificationAction): ValidationResult {
    return ValueSpecificationAction.validate(instance);
  },
  validateVariableAction(instance: IVariableAction): ValidationResult {
    return VariableAction.validate(instance);
  },
  validateLinkAction(instance: ILinkAction): ValidationResult {
    return LinkAction.validate(instance);
  },
  validateWriteLinkAction(instance: IWriteLinkAction): ValidationResult {
    return WriteLinkAction.validate(instance);
  },
  validateLinkEndData(instance: ILinkEndData): ValidationResult {
    return LinkEndData.validate(instance);
  },
  validateQualifierValue(instance: IQualifierValue): ValidationResult {
    return QualifierValue.validate(instance);
  },
  validateStructuralFeatureAction(instance: IStructuralFeatureAction): ValidationResult {
    return StructuralFeatureAction.validate(instance);
  },
  validateWriteStructuralFeatureAction(instance: IWriteStructuralFeatureAction): ValidationResult {
    return WriteStructuralFeatureAction.validate(instance);
  },
  validateWriteVariableAction(instance: IWriteVariableAction): ValidationResult {
    return WriteVariableAction.validate(instance);
  },
  validateAcceptEventAction(instance: IAcceptEventAction): ValidationResult {
    return AcceptEventAction.validate(instance);
  },
  validateAcceptCallAction(instance: IAcceptCallAction): ValidationResult {
    return AcceptCallAction.validate(instance);
  },
  validateActionInputPin(instance: IActionInputPin): ValidationResult {
    return ActionInputPin.validate(instance);
  },
  validateAddStructuralFeatureValueAction(instance: IAddStructuralFeatureValueAction): ValidationResult {
    return AddStructuralFeatureValueAction.validate(instance);
  },
  validateAddVariableValueAction(instance: IAddVariableValueAction): ValidationResult {
    return AddVariableValueAction.validate(instance);
  },
  validateInvocationAction(instance: IInvocationAction): ValidationResult {
    return InvocationAction.validate(instance);
  },
  validateBroadcastSignalAction(instance: IBroadcastSignalAction): ValidationResult {
    return BroadcastSignalAction.validate(instance);
  },
  validateCallAction(instance: ICallAction): ValidationResult {
    return CallAction.validate(instance);
  },
  validateCallBehaviorAction(instance: ICallBehaviorAction): ValidationResult {
    return CallBehaviorAction.validate(instance);
  },
  validateCallOperationAction(instance: ICallOperationAction): ValidationResult {
    return CallOperationAction.validate(instance);
  },
  validateClause(instance: IClause): ValidationResult {
    return Clause.validate(instance);
  },
  validateClearAssociationAction(instance: IClearAssociationAction): ValidationResult {
    return ClearAssociationAction.validate(instance);
  },
  validateClearStructuralFeatureAction(instance: IClearStructuralFeatureAction): ValidationResult {
    return ClearStructuralFeatureAction.validate(instance);
  },
  validateClearVariableAction(instance: IClearVariableAction): ValidationResult {
    return ClearVariableAction.validate(instance);
  },
  validateConditionalNode(instance: IConditionalNode): ValidationResult {
    return ConditionalNode.validate(instance);
  },
  validateCreateLinkAction(instance: ICreateLinkAction): ValidationResult {
    return CreateLinkAction.validate(instance);
  },
  validateLinkEndCreationData(instance: ILinkEndCreationData): ValidationResult {
    return LinkEndCreationData.validate(instance);
  },
  validateCreateLinkObjectAction(instance: ICreateLinkObjectAction): ValidationResult {
    return CreateLinkObjectAction.validate(instance);
  },
  validateCreateObjectAction(instance: ICreateObjectAction): ValidationResult {
    return CreateObjectAction.validate(instance);
  },
  validateDestroyLinkAction(instance: IDestroyLinkAction): ValidationResult {
    return DestroyLinkAction.validate(instance);
  },
  validateLinkEndDestructionData(instance: ILinkEndDestructionData): ValidationResult {
    return LinkEndDestructionData.validate(instance);
  },
  validateDestroyObjectAction(instance: IDestroyObjectAction): ValidationResult {
    return DestroyObjectAction.validate(instance);
  },
  validateExpansionNode(instance: IExpansionNode): ValidationResult {
    return ExpansionNode.validate(instance);
  },
  validateExpansionRegion(instance: IExpansionRegion): ValidationResult {
    return ExpansionRegion.validate(instance);
  },
  validateLoopNode(instance: ILoopNode): ValidationResult {
    return LoopNode.validate(instance);
  },
  validateOpaqueAction(instance: IOpaqueAction): ValidationResult {
    return OpaqueAction.validate(instance);
  },
  validateRaiseExceptionAction(instance: IRaiseExceptionAction): ValidationResult {
    return RaiseExceptionAction.validate(instance);
  },
  validateReadExtentAction(instance: IReadExtentAction): ValidationResult {
    return ReadExtentAction.validate(instance);
  },
  validateReadIsClassifiedObjectAction(instance: IReadIsClassifiedObjectAction): ValidationResult {
    return ReadIsClassifiedObjectAction.validate(instance);
  },
  validateReadLinkAction(instance: IReadLinkAction): ValidationResult {
    return ReadLinkAction.validate(instance);
  },
  validateReadLinkObjectEndAction(instance: IReadLinkObjectEndAction): ValidationResult {
    return ReadLinkObjectEndAction.validate(instance);
  },
  validateReadLinkObjectEndQualifierAction(instance: IReadLinkObjectEndQualifierAction): ValidationResult {
    return ReadLinkObjectEndQualifierAction.validate(instance);
  },
  validateReadSelfAction(instance: IReadSelfAction): ValidationResult {
    return ReadSelfAction.validate(instance);
  },
  validateReadStructuralFeatureAction(instance: IReadStructuralFeatureAction): ValidationResult {
    return ReadStructuralFeatureAction.validate(instance);
  },
  validateReadVariableAction(instance: IReadVariableAction): ValidationResult {
    return ReadVariableAction.validate(instance);
  },
  validateReclassifyObjectAction(instance: IReclassifyObjectAction): ValidationResult {
    return ReclassifyObjectAction.validate(instance);
  },
  validateReduceAction(instance: IReduceAction): ValidationResult {
    return ReduceAction.validate(instance);
  },
  validateRemoveStructuralFeatureValueAction(instance: IRemoveStructuralFeatureValueAction): ValidationResult {
    return RemoveStructuralFeatureValueAction.validate(instance);
  },
  validateRemoveVariableValueAction(instance: IRemoveVariableValueAction): ValidationResult {
    return RemoveVariableValueAction.validate(instance);
  },
  validateReplyAction(instance: IReplyAction): ValidationResult {
    return ReplyAction.validate(instance);
  },
  validateSendObjectAction(instance: ISendObjectAction): ValidationResult {
    return SendObjectAction.validate(instance);
  },
  validateSendSignalAction(instance: ISendSignalAction): ValidationResult {
    return SendSignalAction.validate(instance);
  },
  validateSequenceNode(instance: ISequenceNode): ValidationResult {
    return SequenceNode.validate(instance);
  },
  validateStartClassifierBehaviorAction(instance: IStartClassifierBehaviorAction): ValidationResult {
    return StartClassifierBehaviorAction.validate(instance);
  },
  validateStartObjectBehaviorAction(instance: IStartObjectBehaviorAction): ValidationResult {
    return StartObjectBehaviorAction.validate(instance);
  },
  validateTestIdentityAction(instance: ITestIdentityAction): ValidationResult {
    return TestIdentityAction.validate(instance);
  },
  validateUnmarshallAction(instance: IUnmarshallAction): ValidationResult {
    return UnmarshallAction.validate(instance);
  },
  validateValuePin(instance: IValuePin): ValidationResult {
    return ValuePin.validate(instance);
  },
  validateControlNode(instance: IControlNode): ValidationResult {
    return ControlNode.validate(instance);
  },
  validateFinalNode(instance: IFinalNode): ValidationResult {
    return FinalNode.validate(instance);
  },
  validateActivityFinalNode(instance: IActivityFinalNode): ValidationResult {
    return ActivityFinalNode.validate(instance);
  },
  validateActivityParameterNode(instance: IActivityParameterNode): ValidationResult {
    return ActivityParameterNode.validate(instance);
  },
  validateCentralBufferNode(instance: ICentralBufferNode): ValidationResult {
    return CentralBufferNode.validate(instance);
  },
  validateControlFlow(instance: IControlFlow): ValidationResult {
    return ControlFlow.validate(instance);
  },
  validateDataStoreNode(instance: IDataStoreNode): ValidationResult {
    return DataStoreNode.validate(instance);
  },
  validateDecisionNode(instance: IDecisionNode): ValidationResult {
    return DecisionNode.validate(instance);
  },
  validateObjectFlow(instance: IObjectFlow): ValidationResult {
    return ObjectFlow.validate(instance);
  },
  validateFlowFinalNode(instance: IFlowFinalNode): ValidationResult {
    return FlowFinalNode.validate(instance);
  },
  validateForkNode(instance: IForkNode): ValidationResult {
    return ForkNode.validate(instance);
  },
  validateInitialNode(instance: IInitialNode): ValidationResult {
    return InitialNode.validate(instance);
  },
  validateJoinNode(instance: IJoinNode): ValidationResult {
    return JoinNode.validate(instance);
  },
  validateMergeNode(instance: IMergeNode): ValidationResult {
    return MergeNode.validate(instance);
  },
  validateInstanceValue(instance: IInstanceValue): ValidationResult {
    return InstanceValue.validate(instance);
  },
  validateMessageEvent(instance: IMessageEvent): ValidationResult {
    return MessageEvent.validate(instance);
  },
  validateAnyReceiveEvent(instance: IAnyReceiveEvent): ValidationResult {
    return AnyReceiveEvent.validate(instance);
  },
  validateCallEvent(instance: ICallEvent): ValidationResult {
    return CallEvent.validate(instance);
  },
  validateChangeEvent(instance: IChangeEvent): ValidationResult {
    return ChangeEvent.validate(instance);
  },
  validateOpaqueBehavior(instance: IOpaqueBehavior): ValidationResult {
    return OpaqueBehavior.validate(instance);
  },
  validateFunctionBehavior(instance: IFunctionBehavior): ValidationResult {
    return FunctionBehavior.validate(instance);
  },
  validateSignalEvent(instance: ISignalEvent): ValidationResult {
    return SignalEvent.validate(instance);
  },
  validateTimeEvent(instance: ITimeEvent): ValidationResult {
    return TimeEvent.validate(instance);
  },
  validateTimeExpression(instance: ITimeExpression): ValidationResult {
    return TimeExpression.validate(instance);
  },
  validateObservation(instance: IObservation): ValidationResult {
    return Observation.validate(instance);
  },
  validateCommunicationPath(instance: ICommunicationPath): ValidationResult {
    return CommunicationPath.validate(instance);
  },
  validateNode(instance: INode): ValidationResult {
    return Node.validate(instance);
  },
  validateDevice(instance: IDevice): ValidationResult {
    return Device.validate(instance);
  },
  validateExecutionEnvironment(instance: IExecutionEnvironment): ValidationResult {
    return ExecutionEnvironment.validate(instance);
  },
  validateInformationFlow(instance: IInformationFlow): ValidationResult {
    return InformationFlow.validate(instance);
  },
  validateMessage(instance: IMessage): ValidationResult {
    return Message.validate(instance);
  },
  validateInteractionFragment(instance: IInteractionFragment): ValidationResult {
    return InteractionFragment.validate(instance);
  },
  validateInteraction(instance: IInteraction): ValidationResult {
    return Interaction.validate(instance);
  },
  validateLifeline(instance: ILifeline): ValidationResult {
    return Lifeline.validate(instance);
  },
  validateInteractionUse(instance: IInteractionUse): ValidationResult {
    return InteractionUse.validate(instance);
  },
  validatePartDecomposition(instance: IPartDecomposition): ValidationResult {
    return PartDecomposition.validate(instance);
  },
  validateMessageEnd(instance: IMessageEnd): ValidationResult {
    return MessageEnd.validate(instance);
  },
  validateGate(instance: IGate): ValidationResult {
    return Gate.validate(instance);
  },
  validateInteractionOperand(instance: IInteractionOperand): ValidationResult {
    return InteractionOperand.validate(instance);
  },
  validateInteractionConstraint(instance: IInteractionConstraint): ValidationResult {
    return InteractionConstraint.validate(instance);
  },
  validateGeneralOrdering(instance: IGeneralOrdering): ValidationResult {
    return GeneralOrdering.validate(instance);
  },
  validateOccurrenceSpecification(instance: IOccurrenceSpecification): ValidationResult {
    return OccurrenceSpecification.validate(instance);
  },
  validateInformationItem(instance: IInformationItem): ValidationResult {
    return InformationItem.validate(instance);
  },
  validateExecutionSpecification(instance: IExecutionSpecification): ValidationResult {
    return ExecutionSpecification.validate(instance);
  },
  validateActionExecutionSpecification(instance: IActionExecutionSpecification): ValidationResult {
    return ActionExecutionSpecification.validate(instance);
  },
  validateBehaviorExecutionSpecification(instance: IBehaviorExecutionSpecification): ValidationResult {
    return BehaviorExecutionSpecification.validate(instance);
  },
  validateCombinedFragment(instance: ICombinedFragment): ValidationResult {
    return CombinedFragment.validate(instance);
  },
  validateConsiderIgnoreFragment(instance: IConsiderIgnoreFragment): ValidationResult {
    return ConsiderIgnoreFragment.validate(instance);
  },
  validateContinuation(instance: IContinuation): ValidationResult {
    return Continuation.validate(instance);
  },
  validateMessageOccurrenceSpecification(instance: IMessageOccurrenceSpecification): ValidationResult {
    return MessageOccurrenceSpecification.validate(instance);
  },
  validateDestructionOccurrenceSpecification(instance: IDestructionOccurrenceSpecification): ValidationResult {
    return DestructionOccurrenceSpecification.validate(instance);
  },
  validateExecutionOccurrenceSpecification(instance: IExecutionOccurrenceSpecification): ValidationResult {
    return ExecutionOccurrenceSpecification.validate(instance);
  },
  validateStateInvariant(instance: IStateInvariant): ValidationResult {
    return StateInvariant.validate(instance);
  },
  validateFinalState(instance: IFinalState): ValidationResult {
    return FinalState.validate(instance);
  },
  validateProtocolTransition(instance: IProtocolTransition): ValidationResult {
    return ProtocolTransition.validate(instance);
  },
  validateAssociationClass(instance: IAssociationClass): ValidationResult {
    return AssociationClass.validate(instance);
  },
  validateComponent(instance: IComponent): ValidationResult {
    return Component.validate(instance);
  },
  validateComponentRealization(instance: IComponentRealization): ValidationResult {
    return ComponentRealization.validate(instance);
  },
  validateActor(instance: IActor): ValidationResult {
    return Actor.validate(instance);
  },
  validateDuration(instance: IDuration): ValidationResult {
    return Duration.validate(instance);
  },
  validateIntervalConstraint(instance: IIntervalConstraint): ValidationResult {
    return IntervalConstraint.validate(instance);
  },
  validateDurationConstraint(instance: IDurationConstraint): ValidationResult {
    return DurationConstraint.validate(instance);
  },
  validateInterval(instance: IInterval): ValidationResult {
    return Interval.validate(instance);
  },
  validateDurationInterval(instance: IDurationInterval): ValidationResult {
    return DurationInterval.validate(instance);
  },
  validateDurationObservation(instance: IDurationObservation): ValidationResult {
    return DurationObservation.validate(instance);
  },
  validateLiteralSpecification(instance: ILiteralSpecification): ValidationResult {
    return LiteralSpecification.validate(instance);
  },
  validateLiteralBoolean(instance: ILiteralBoolean): ValidationResult {
    return LiteralBoolean.validate(instance);
  },
  validateLiteralInteger(instance: ILiteralInteger): ValidationResult {
    return LiteralInteger.validate(instance);
  },
  validateLiteralNull(instance: ILiteralNull): ValidationResult {
    return LiteralNull.validate(instance);
  },
  validateLiteralReal(instance: ILiteralReal): ValidationResult {
    return LiteralReal.validate(instance);
  },
  validateLiteralString(instance: ILiteralString): ValidationResult {
    return LiteralString.validate(instance);
  },
  validateLiteralUnlimitedNatural(instance: ILiteralUnlimitedNatural): ValidationResult {
    return LiteralUnlimitedNatural.validate(instance);
  },
  validateTimeConstraint(instance: ITimeConstraint): ValidationResult {
    return TimeConstraint.validate(instance);
  },
  validateTimeInterval(instance: ITimeInterval): ValidationResult {
    return TimeInterval.validate(instance);
  },
  validateTimeObservation(instance: ITimeObservation): ValidationResult {
    return TimeObservation.validate(instance);
  }
};

// Type Guards
export const UMLTypeGuards = {
  isActivityContent(obj: any): obj is IActivityContent {
    return obj && typeof obj === 'object'
  },
  isEModelElement(obj: any): obj is IEModelElement {
    return obj && typeof obj === 'object'
  },
  isElement(obj: any): obj is IElement {
    return obj && typeof obj === 'object'
  },
  isNamedElement(obj: any): obj is INamedElement {
    return obj && typeof obj === 'object'
  },
  isNamespace(obj: any): obj is INamespace {
    return obj && typeof obj === 'object'
  },
  isRedefinableElement(obj: any): obj is IRedefinableElement {
    return obj && typeof obj === 'object'
      && 'isLeaf' in obj
  },
  isParameterableElement(obj: any): obj is IParameterableElement {
    return obj && typeof obj === 'object'
  },
  isPackageableElement(obj: any): obj is IPackageableElement {
    return obj && typeof obj === 'object'
  },
  isType(obj: any): obj is IType {
    return obj && typeof obj === 'object'
  },
  isTemplateableElement(obj: any): obj is ITemplateableElement {
    return obj && typeof obj === 'object'
  },
  isClassifier(obj: any): obj is IClassifier {
    return obj && typeof obj === 'object'
      && 'isAbstract' in obj
      && 'isFinalSpecialization' in obj
  },
  isStructuredClassifier(obj: any): obj is IStructuredClassifier {
    return obj && typeof obj === 'object'
  },
  isEncapsulatedClassifier(obj: any): obj is IEncapsulatedClassifier {
    return obj && typeof obj === 'object'
  },
  isBehavioredClassifier(obj: any): obj is IBehavioredClassifier {
    return obj && typeof obj === 'object'
  },
  isClass(obj: any): obj is IClass {
    return obj && typeof obj === 'object'
      && 'isActive' in obj
  },
  isBehavior(obj: any): obj is IBehavior {
    return obj && typeof obj === 'object'
  },
  isActivity(obj: any): obj is IActivity {
    return obj && typeof obj === 'object'
      && 'isReadOnly' in obj
      && 'isSingleExecution' in obj
  },
  isComment(obj: any): obj is IComment {
    return obj && typeof obj === 'object'
  },
  isStereotype(obj: any): obj is IStereotype {
    return obj && typeof obj === 'object'
      && 'profile' in obj
  },
  isImage(obj: any): obj is IImage {
    return obj && typeof obj === 'object'
  },
  isPackage(obj: any): obj is IPackage {
    return obj && typeof obj === 'object'
  },
  isProfile(obj: any): obj is IProfile {
    return obj && typeof obj === 'object'
  },
  isTemplateParameter(obj: any): obj is ITemplateParameter {
    return obj && typeof obj === 'object'
      && 'parameteredElement' in obj
      && 'signature' in obj
  },
  isTemplateSignature(obj: any): obj is ITemplateSignature {
    return obj && typeof obj === 'object'
      && 'template' in obj
  },
  isRelationship(obj: any): obj is IRelationship {
    return obj && typeof obj === 'object'
  },
  isDirectedRelationship(obj: any): obj is IDirectedRelationship {
    return obj && typeof obj === 'object'
  },
  isTemplateBinding(obj: any): obj is ITemplateBinding {
    return obj && typeof obj === 'object'
      && 'signature' in obj
      && 'boundElement' in obj
  },
  isTemplateParameterSubstitution(obj: any): obj is ITemplateParameterSubstitution {
    return obj && typeof obj === 'object'
      && 'actual' in obj
      && 'formal' in obj
      && 'templateBinding' in obj
  },
  isAssociation(obj: any): obj is IAssociation {
    return obj && typeof obj === 'object'
      && 'isDerived' in obj
  },
  isFeature(obj: any): obj is IFeature {
    return obj && typeof obj === 'object'
      && 'isStatic' in obj
  },
  isTypedElement(obj: any): obj is ITypedElement {
    return obj && typeof obj === 'object'
  },
  isMultiplicityElement(obj: any): obj is IMultiplicityElement {
    return obj && typeof obj === 'object'
      && 'isOrdered' in obj
      && 'isUnique' in obj
      && 'upper' in obj
  },
  isStructuralFeature(obj: any): obj is IStructuralFeature {
    return obj && typeof obj === 'object'
      && 'isReadOnly' in obj
  },
  isConnectableElement(obj: any): obj is IConnectableElement {
    return obj && typeof obj === 'object'
  },
  isDeploymentTarget(obj: any): obj is IDeploymentTarget {
    return obj && typeof obj === 'object'
  },
  isProperty(obj: any): obj is IProperty {
    return obj && typeof obj === 'object'
      && 'aggregation' in obj
      && 'isComposite' in obj
      && 'isDerived' in obj
      && 'isDerivedUnion' in obj
      && 'isID' in obj
  },
  isConnectorEnd(obj: any): obj is IConnectorEnd {
    return obj && typeof obj === 'object'
      && 'role' in obj
  },
  isValueSpecification(obj: any): obj is IValueSpecification {
    return obj && typeof obj === 'object'
  },
  isConnectableElementTemplateParameter(obj: any): obj is IConnectableElementTemplateParameter {
    return obj && typeof obj === 'object'
  },
  isDependency(obj: any): obj is IDependency {
    return obj && typeof obj === 'object'
  },
  isDeployment(obj: any): obj is IDeployment {
    return obj && typeof obj === 'object'
      && 'location' in obj
  },
  isDeployedArtifact(obj: any): obj is IDeployedArtifact {
    return obj && typeof obj === 'object'
  },
  isArtifact(obj: any): obj is IArtifact {
    return obj && typeof obj === 'object'
  },
  isDeploymentSpecification(obj: any): obj is IDeploymentSpecification {
    return obj && typeof obj === 'object'
  },
  isAbstraction(obj: any): obj is IAbstraction {
    return obj && typeof obj === 'object'
  },
  isManifestation(obj: any): obj is IManifestation {
    return obj && typeof obj === 'object'
      && 'utilizedElement' in obj
  },
  isOpaqueExpression(obj: any): obj is IOpaqueExpression {
    return obj && typeof obj === 'object'
  },
  isParameter(obj: any): obj is IParameter {
    return obj && typeof obj === 'object'
      && 'direction' in obj
      && 'isException' in obj
      && 'isStream' in obj
  },
  isBehavioralFeature(obj: any): obj is IBehavioralFeature {
    return obj && typeof obj === 'object'
      && 'concurrency' in obj
      && 'isAbstract' in obj
  },
  isOperation(obj: any): obj is IOperation {
    return obj && typeof obj === 'object'
      && 'isOrdered' in obj
      && 'isQuery' in obj
      && 'isUnique' in obj
  },
  isParameterSet(obj: any): obj is IParameterSet {
    return obj && typeof obj === 'object'
  },
  isConstraint(obj: any): obj is IConstraint {
    return obj && typeof obj === 'object'
      && 'specification' in obj
  },
  isDataType(obj: any): obj is IDataType {
    return obj && typeof obj === 'object'
  },
  isInterface(obj: any): obj is IInterface {
    return obj && typeof obj === 'object'
  },
  isReception(obj: any): obj is IReception {
    return obj && typeof obj === 'object'
      && 'signal' in obj
  },
  isSignal(obj: any): obj is ISignal {
    return obj && typeof obj === 'object'
  },
  isStateMachine(obj: any): obj is IStateMachine {
    return obj && typeof obj === 'object'
  },
  isProtocolStateMachine(obj: any): obj is IProtocolStateMachine {
    return obj && typeof obj === 'object'
  },
  isVertex(obj: any): obj is IVertex {
    return obj && typeof obj === 'object'
  },
  isPseudostate(obj: any): obj is IPseudostate {
    return obj && typeof obj === 'object'
      && 'kind' in obj
  },
  isRegion(obj: any): obj is IRegion {
    return obj && typeof obj === 'object'
  },
  isState(obj: any): obj is IState {
    return obj && typeof obj === 'object'
      && 'isComposite' in obj
      && 'isOrthogonal' in obj
      && 'isSimple' in obj
      && 'isSubmachineState' in obj
  },
  isConnectionPointReference(obj: any): obj is IConnectionPointReference {
    return obj && typeof obj === 'object'
  },
  isTrigger(obj: any): obj is ITrigger {
    return obj && typeof obj === 'object'
      && 'event' in obj
  },
  isEvent(obj: any): obj is IEvent {
    return obj && typeof obj === 'object'
  },
  isPort(obj: any): obj is IPort {
    return obj && typeof obj === 'object'
      && 'isBehavior' in obj
      && 'isConjugated' in obj
      && 'isService' in obj
  },
  isTransition(obj: any): obj is ITransition {
    return obj && typeof obj === 'object'
      && 'kind' in obj
      && 'source' in obj
      && 'target' in obj
      && 'container' in obj
  },
  isProtocolConformance(obj: any): obj is IProtocolConformance {
    return obj && typeof obj === 'object'
      && 'generalMachine' in obj
      && 'specificMachine' in obj
  },
  isOperationTemplateParameter(obj: any): obj is IOperationTemplateParameter {
    return obj && typeof obj === 'object'
  },
  isPackageMerge(obj: any): obj is IPackageMerge {
    return obj && typeof obj === 'object'
      && 'mergedPackage' in obj
      && 'receivingPackage' in obj
  },
  isProfileApplication(obj: any): obj is IProfileApplication {
    return obj && typeof obj === 'object'
      && 'appliedProfile' in obj
      && 'isStrict' in obj
      && 'applyingPackage' in obj
  },
  isEnumeration(obj: any): obj is IEnumeration {
    return obj && typeof obj === 'object'
  },
  isInstanceSpecification(obj: any): obj is IInstanceSpecification {
    return obj && typeof obj === 'object'
  },
  isEnumerationLiteral(obj: any): obj is IEnumerationLiteral {
    return obj && typeof obj === 'object'
      && 'enumeration' in obj
  },
  isSlot(obj: any): obj is ISlot {
    return obj && typeof obj === 'object'
      && 'definingFeature' in obj
      && 'owningInstance' in obj
  },
  isPrimitiveType(obj: any): obj is IPrimitiveType {
    return obj && typeof obj === 'object'
  },
  isElementImport(obj: any): obj is IElementImport {
    return obj && typeof obj === 'object'
      && 'importedElement' in obj
      && 'importingNamespace' in obj
      && 'visibility' in obj
  },
  isPackageImport(obj: any): obj is IPackageImport {
    return obj && typeof obj === 'object'
      && 'importedPackage' in obj
      && 'importingNamespace' in obj
      && 'visibility' in obj
  },
  isExtension(obj: any): obj is IExtension {
    return obj && typeof obj === 'object'
      && 'isRequired' in obj
      && 'metaclass' in obj
  },
  isExtensionEnd(obj: any): obj is IExtensionEnd {
    return obj && typeof obj === 'object'
  },
  isModel(obj: any): obj is IModel {
    return obj && typeof obj === 'object'
  },
  isExpression(obj: any): obj is IExpression {
    return obj && typeof obj === 'object'
  },
  isStringExpression(obj: any): obj is IStringExpression {
    return obj && typeof obj === 'object'
  },
  isUsage(obj: any): obj is IUsage {
    return obj && typeof obj === 'object'
  },
  isCollaborationUse(obj: any): obj is ICollaborationUse {
    return obj && typeof obj === 'object'
      && 'type' in obj
  },
  isCollaboration(obj: any): obj is ICollaboration {
    return obj && typeof obj === 'object'
  },
  isConnector(obj: any): obj is IConnector {
    return obj && typeof obj === 'object'
      && 'kind' in obj
  },
  isGeneralization(obj: any): obj is IGeneralization {
    return obj && typeof obj === 'object'
      && 'general' in obj
      && 'specific' in obj
  },
  isGeneralizationSet(obj: any): obj is IGeneralizationSet {
    return obj && typeof obj === 'object'
      && 'isCovering' in obj
      && 'isDisjoint' in obj
  },
  isRedefinableTemplateSignature(obj: any): obj is IRedefinableTemplateSignature {
    return obj && typeof obj === 'object'
      && 'classifier' in obj
  },
  isUseCase(obj: any): obj is IUseCase {
    return obj && typeof obj === 'object'
  },
  isExtend(obj: any): obj is IExtend {
    return obj && typeof obj === 'object'
      && 'extendedCase' in obj
      && 'extension' in obj
  },
  isExtensionPoint(obj: any): obj is IExtensionPoint {
    return obj && typeof obj === 'object'
      && 'useCase' in obj
  },
  isInclude(obj: any): obj is IInclude {
    return obj && typeof obj === 'object'
      && 'addition' in obj
      && 'includingCase' in obj
  },
  isRealization(obj: any): obj is IRealization {
    return obj && typeof obj === 'object'
  },
  isSubstitution(obj: any): obj is ISubstitution {
    return obj && typeof obj === 'object'
      && 'contract' in obj
      && 'substitutingClassifier' in obj
  },
  isClassifierTemplateParameter(obj: any): obj is IClassifierTemplateParameter {
    return obj && typeof obj === 'object'
      && 'allowSubstitutable' in obj
  },
  isInterfaceRealization(obj: any): obj is IInterfaceRealization {
    return obj && typeof obj === 'object'
      && 'contract' in obj
      && 'implementingClassifier' in obj
  },
  isActivityGroup(obj: any): obj is IActivityGroup {
    return obj && typeof obj === 'object'
  },
  isActivityEdge(obj: any): obj is IActivityEdge {
    return obj && typeof obj === 'object'
      && 'target' in obj
      && 'source' in obj
  },
  isActivityPartition(obj: any): obj is IActivityPartition {
    return obj && typeof obj === 'object'
      && 'isDimension' in obj
      && 'isExternal' in obj
  },
  isActivityNode(obj: any): obj is IActivityNode {
    return obj && typeof obj === 'object'
  },
  isInterruptibleActivityRegion(obj: any): obj is IInterruptibleActivityRegion {
    return obj && typeof obj === 'object'
  },
  isExecutableNode(obj: any): obj is IExecutableNode {
    return obj && typeof obj === 'object'
  },
  isAction(obj: any): obj is IAction {
    return obj && typeof obj === 'object'
      && 'isLocallyReentrant' in obj
  },
  isStructuredActivityNode(obj: any): obj is IStructuredActivityNode {
    return obj && typeof obj === 'object'
      && 'mustIsolate' in obj
  },
  isExceptionHandler(obj: any): obj is IExceptionHandler {
    return obj && typeof obj === 'object'
      && 'exceptionInput' in obj
      && 'handlerBody' in obj
      && 'protectedNode' in obj
  },
  isObjectNode(obj: any): obj is IObjectNode {
    return obj && typeof obj === 'object'
      && 'isControlType' in obj
      && 'ordering' in obj
  },
  isPin(obj: any): obj is IPin {
    return obj && typeof obj === 'object'
      && 'isControl' in obj
  },
  isInputPin(obj: any): obj is IInputPin {
    return obj && typeof obj === 'object'
  },
  isOutputPin(obj: any): obj is IOutputPin {
    return obj && typeof obj === 'object'
  },
  isVariable(obj: any): obj is IVariable {
    return obj && typeof obj === 'object'
  },
  isValueSpecificationAction(obj: any): obj is IValueSpecificationAction {
    return obj && typeof obj === 'object'
      && 'result' in obj
      && 'value' in obj
  },
  isVariableAction(obj: any): obj is IVariableAction {
    return obj && typeof obj === 'object'
      && 'variable' in obj
  },
  isLinkAction(obj: any): obj is ILinkAction {
    return obj && typeof obj === 'object'
  },
  isWriteLinkAction(obj: any): obj is IWriteLinkAction {
    return obj && typeof obj === 'object'
  },
  isLinkEndData(obj: any): obj is ILinkEndData {
    return obj && typeof obj === 'object'
      && 'end' in obj
  },
  isQualifierValue(obj: any): obj is IQualifierValue {
    return obj && typeof obj === 'object'
      && 'qualifier' in obj
      && 'value' in obj
  },
  isStructuralFeatureAction(obj: any): obj is IStructuralFeatureAction {
    return obj && typeof obj === 'object'
      && 'object' in obj
      && 'structuralFeature' in obj
  },
  isWriteStructuralFeatureAction(obj: any): obj is IWriteStructuralFeatureAction {
    return obj && typeof obj === 'object'
  },
  isWriteVariableAction(obj: any): obj is IWriteVariableAction {
    return obj && typeof obj === 'object'
  },
  isAcceptEventAction(obj: any): obj is IAcceptEventAction {
    return obj && typeof obj === 'object'
      && 'isUnmarshall' in obj
  },
  isAcceptCallAction(obj: any): obj is IAcceptCallAction {
    return obj && typeof obj === 'object'
      && 'returnInformation' in obj
  },
  isActionInputPin(obj: any): obj is IActionInputPin {
    return obj && typeof obj === 'object'
      && 'fromAction' in obj
  },
  isAddStructuralFeatureValueAction(obj: any): obj is IAddStructuralFeatureValueAction {
    return obj && typeof obj === 'object'
      && 'isReplaceAll' in obj
  },
  isAddVariableValueAction(obj: any): obj is IAddVariableValueAction {
    return obj && typeof obj === 'object'
      && 'isReplaceAll' in obj
  },
  isInvocationAction(obj: any): obj is IInvocationAction {
    return obj && typeof obj === 'object'
  },
  isBroadcastSignalAction(obj: any): obj is IBroadcastSignalAction {
    return obj && typeof obj === 'object'
      && 'signal' in obj
  },
  isCallAction(obj: any): obj is ICallAction {
    return obj && typeof obj === 'object'
      && 'isSynchronous' in obj
  },
  isCallBehaviorAction(obj: any): obj is ICallBehaviorAction {
    return obj && typeof obj === 'object'
      && 'behavior' in obj
  },
  isCallOperationAction(obj: any): obj is ICallOperationAction {
    return obj && typeof obj === 'object'
      && 'operation' in obj
      && 'target' in obj
  },
  isClause(obj: any): obj is IClause {
    return obj && typeof obj === 'object'
      && 'decider' in obj
  },
  isClearAssociationAction(obj: any): obj is IClearAssociationAction {
    return obj && typeof obj === 'object'
      && 'association' in obj
      && 'object' in obj
  },
  isClearStructuralFeatureAction(obj: any): obj is IClearStructuralFeatureAction {
    return obj && typeof obj === 'object'
  },
  isClearVariableAction(obj: any): obj is IClearVariableAction {
    return obj && typeof obj === 'object'
  },
  isConditionalNode(obj: any): obj is IConditionalNode {
    return obj && typeof obj === 'object'
      && 'isAssured' in obj
      && 'isDeterminate' in obj
  },
  isCreateLinkAction(obj: any): obj is ICreateLinkAction {
    return obj && typeof obj === 'object'
  },
  isLinkEndCreationData(obj: any): obj is ILinkEndCreationData {
    return obj && typeof obj === 'object'
      && 'isReplaceAll' in obj
  },
  isCreateLinkObjectAction(obj: any): obj is ICreateLinkObjectAction {
    return obj && typeof obj === 'object'
      && 'result' in obj
  },
  isCreateObjectAction(obj: any): obj is ICreateObjectAction {
    return obj && typeof obj === 'object'
      && 'classifier' in obj
      && 'result' in obj
  },
  isDestroyLinkAction(obj: any): obj is IDestroyLinkAction {
    return obj && typeof obj === 'object'
  },
  isLinkEndDestructionData(obj: any): obj is ILinkEndDestructionData {
    return obj && typeof obj === 'object'
      && 'isDestroyDuplicates' in obj
  },
  isDestroyObjectAction(obj: any): obj is IDestroyObjectAction {
    return obj && typeof obj === 'object'
      && 'isDestroyLinks' in obj
      && 'isDestroyOwnedObjects' in obj
      && 'target' in obj
  },
  isExpansionNode(obj: any): obj is IExpansionNode {
    return obj && typeof obj === 'object'
  },
  isExpansionRegion(obj: any): obj is IExpansionRegion {
    return obj && typeof obj === 'object'
      && 'mode' in obj
  },
  isLoopNode(obj: any): obj is ILoopNode {
    return obj && typeof obj === 'object'
      && 'decider' in obj
      && 'isTestedFirst' in obj
  },
  isOpaqueAction(obj: any): obj is IOpaqueAction {
    return obj && typeof obj === 'object'
  },
  isRaiseExceptionAction(obj: any): obj is IRaiseExceptionAction {
    return obj && typeof obj === 'object'
      && 'exception' in obj
  },
  isReadExtentAction(obj: any): obj is IReadExtentAction {
    return obj && typeof obj === 'object'
      && 'classifier' in obj
      && 'result' in obj
  },
  isReadIsClassifiedObjectAction(obj: any): obj is IReadIsClassifiedObjectAction {
    return obj && typeof obj === 'object'
      && 'classifier' in obj
      && 'isDirect' in obj
      && 'object' in obj
      && 'result' in obj
  },
  isReadLinkAction(obj: any): obj is IReadLinkAction {
    return obj && typeof obj === 'object'
      && 'result' in obj
  },
  isReadLinkObjectEndAction(obj: any): obj is IReadLinkObjectEndAction {
    return obj && typeof obj === 'object'
      && 'end' in obj
      && 'object' in obj
      && 'result' in obj
  },
  isReadLinkObjectEndQualifierAction(obj: any): obj is IReadLinkObjectEndQualifierAction {
    return obj && typeof obj === 'object'
      && 'object' in obj
      && 'qualifier' in obj
      && 'result' in obj
  },
  isReadSelfAction(obj: any): obj is IReadSelfAction {
    return obj && typeof obj === 'object'
      && 'result' in obj
  },
  isReadStructuralFeatureAction(obj: any): obj is IReadStructuralFeatureAction {
    return obj && typeof obj === 'object'
      && 'result' in obj
  },
  isReadVariableAction(obj: any): obj is IReadVariableAction {
    return obj && typeof obj === 'object'
      && 'result' in obj
  },
  isReclassifyObjectAction(obj: any): obj is IReclassifyObjectAction {
    return obj && typeof obj === 'object'
      && 'isReplaceAll' in obj
      && 'object' in obj
  },
  isReduceAction(obj: any): obj is IReduceAction {
    return obj && typeof obj === 'object'
      && 'collection' in obj
      && 'isOrdered' in obj
      && 'reducer' in obj
      && 'result' in obj
  },
  isRemoveStructuralFeatureValueAction(obj: any): obj is IRemoveStructuralFeatureValueAction {
    return obj && typeof obj === 'object'
      && 'isRemoveDuplicates' in obj
  },
  isRemoveVariableValueAction(obj: any): obj is IRemoveVariableValueAction {
    return obj && typeof obj === 'object'
      && 'isRemoveDuplicates' in obj
  },
  isReplyAction(obj: any): obj is IReplyAction {
    return obj && typeof obj === 'object'
      && 'replyToCall' in obj
      && 'returnInformation' in obj
  },
  isSendObjectAction(obj: any): obj is ISendObjectAction {
    return obj && typeof obj === 'object'
      && 'request' in obj
      && 'target' in obj
  },
  isSendSignalAction(obj: any): obj is ISendSignalAction {
    return obj && typeof obj === 'object'
      && 'signal' in obj
      && 'target' in obj
  },
  isSequenceNode(obj: any): obj is ISequenceNode {
    return obj && typeof obj === 'object'
  },
  isStartClassifierBehaviorAction(obj: any): obj is IStartClassifierBehaviorAction {
    return obj && typeof obj === 'object'
      && 'object' in obj
  },
  isStartObjectBehaviorAction(obj: any): obj is IStartObjectBehaviorAction {
    return obj && typeof obj === 'object'
      && 'object' in obj
  },
  isTestIdentityAction(obj: any): obj is ITestIdentityAction {
    return obj && typeof obj === 'object'
      && 'first' in obj
      && 'result' in obj
      && 'second' in obj
  },
  isUnmarshallAction(obj: any): obj is IUnmarshallAction {
    return obj && typeof obj === 'object'
      && 'object' in obj
      && 'unmarshallType' in obj
  },
  isValuePin(obj: any): obj is IValuePin {
    return obj && typeof obj === 'object'
      && 'value' in obj
  },
  isControlNode(obj: any): obj is IControlNode {
    return obj && typeof obj === 'object'
  },
  isFinalNode(obj: any): obj is IFinalNode {
    return obj && typeof obj === 'object'
  },
  isActivityFinalNode(obj: any): obj is IActivityFinalNode {
    return obj && typeof obj === 'object'
  },
  isActivityParameterNode(obj: any): obj is IActivityParameterNode {
    return obj && typeof obj === 'object'
      && 'parameter' in obj
  },
  isCentralBufferNode(obj: any): obj is ICentralBufferNode {
    return obj && typeof obj === 'object'
  },
  isControlFlow(obj: any): obj is IControlFlow {
    return obj && typeof obj === 'object'
  },
  isDataStoreNode(obj: any): obj is IDataStoreNode {
    return obj && typeof obj === 'object'
  },
  isDecisionNode(obj: any): obj is IDecisionNode {
    return obj && typeof obj === 'object'
  },
  isObjectFlow(obj: any): obj is IObjectFlow {
    return obj && typeof obj === 'object'
      && 'isMulticast' in obj
      && 'isMultireceive' in obj
  },
  isFlowFinalNode(obj: any): obj is IFlowFinalNode {
    return obj && typeof obj === 'object'
  },
  isForkNode(obj: any): obj is IForkNode {
    return obj && typeof obj === 'object'
  },
  isInitialNode(obj: any): obj is IInitialNode {
    return obj && typeof obj === 'object'
  },
  isJoinNode(obj: any): obj is IJoinNode {
    return obj && typeof obj === 'object'
      && 'isCombineDuplicate' in obj
  },
  isMergeNode(obj: any): obj is IMergeNode {
    return obj && typeof obj === 'object'
  },
  isInstanceValue(obj: any): obj is IInstanceValue {
    return obj && typeof obj === 'object'
      && 'instance' in obj
  },
  isMessageEvent(obj: any): obj is IMessageEvent {
    return obj && typeof obj === 'object'
  },
  isAnyReceiveEvent(obj: any): obj is IAnyReceiveEvent {
    return obj && typeof obj === 'object'
  },
  isCallEvent(obj: any): obj is ICallEvent {
    return obj && typeof obj === 'object'
      && 'operation' in obj
  },
  isChangeEvent(obj: any): obj is IChangeEvent {
    return obj && typeof obj === 'object'
      && 'changeExpression' in obj
  },
  isOpaqueBehavior(obj: any): obj is IOpaqueBehavior {
    return obj && typeof obj === 'object'
  },
  isFunctionBehavior(obj: any): obj is IFunctionBehavior {
    return obj && typeof obj === 'object'
  },
  isSignalEvent(obj: any): obj is ISignalEvent {
    return obj && typeof obj === 'object'
      && 'signal' in obj
  },
  isTimeEvent(obj: any): obj is ITimeEvent {
    return obj && typeof obj === 'object'
      && 'isRelative' in obj
      && 'when' in obj
  },
  isTimeExpression(obj: any): obj is ITimeExpression {
    return obj && typeof obj === 'object'
  },
  isObservation(obj: any): obj is IObservation {
    return obj && typeof obj === 'object'
  },
  isCommunicationPath(obj: any): obj is ICommunicationPath {
    return obj && typeof obj === 'object'
  },
  isNode(obj: any): obj is INode {
    return obj && typeof obj === 'object'
  },
  isDevice(obj: any): obj is IDevice {
    return obj && typeof obj === 'object'
  },
  isExecutionEnvironment(obj: any): obj is IExecutionEnvironment {
    return obj && typeof obj === 'object'
  },
  isInformationFlow(obj: any): obj is IInformationFlow {
    return obj && typeof obj === 'object'
  },
  isMessage(obj: any): obj is IMessage {
    return obj && typeof obj === 'object'
      && 'interaction' in obj
      && 'messageKind' in obj
      && 'messageSort' in obj
  },
  isInteractionFragment(obj: any): obj is IInteractionFragment {
    return obj && typeof obj === 'object'
  },
  isInteraction(obj: any): obj is IInteraction {
    return obj && typeof obj === 'object'
  },
  isLifeline(obj: any): obj is ILifeline {
    return obj && typeof obj === 'object'
      && 'interaction' in obj
  },
  isInteractionUse(obj: any): obj is IInteractionUse {
    return obj && typeof obj === 'object'
      && 'refersTo' in obj
  },
  isPartDecomposition(obj: any): obj is IPartDecomposition {
    return obj && typeof obj === 'object'
  },
  isMessageEnd(obj: any): obj is IMessageEnd {
    return obj && typeof obj === 'object'
  },
  isGate(obj: any): obj is IGate {
    return obj && typeof obj === 'object'
  },
  isInteractionOperand(obj: any): obj is IInteractionOperand {
    return obj && typeof obj === 'object'
  },
  isInteractionConstraint(obj: any): obj is IInteractionConstraint {
    return obj && typeof obj === 'object'
  },
  isGeneralOrdering(obj: any): obj is IGeneralOrdering {
    return obj && typeof obj === 'object'
      && 'after' in obj
      && 'before' in obj
  },
  isOccurrenceSpecification(obj: any): obj is IOccurrenceSpecification {
    return obj && typeof obj === 'object'
  },
  isInformationItem(obj: any): obj is IInformationItem {
    return obj && typeof obj === 'object'
  },
  isExecutionSpecification(obj: any): obj is IExecutionSpecification {
    return obj && typeof obj === 'object'
      && 'finish' in obj
      && 'start' in obj
  },
  isActionExecutionSpecification(obj: any): obj is IActionExecutionSpecification {
    return obj && typeof obj === 'object'
      && 'action' in obj
  },
  isBehaviorExecutionSpecification(obj: any): obj is IBehaviorExecutionSpecification {
    return obj && typeof obj === 'object'
  },
  isCombinedFragment(obj: any): obj is ICombinedFragment {
    return obj && typeof obj === 'object'
      && 'interactionOperator' in obj
  },
  isConsiderIgnoreFragment(obj: any): obj is IConsiderIgnoreFragment {
    return obj && typeof obj === 'object'
  },
  isContinuation(obj: any): obj is IContinuation {
    return obj && typeof obj === 'object'
      && 'setting' in obj
  },
  isMessageOccurrenceSpecification(obj: any): obj is IMessageOccurrenceSpecification {
    return obj && typeof obj === 'object'
  },
  isDestructionOccurrenceSpecification(obj: any): obj is IDestructionOccurrenceSpecification {
    return obj && typeof obj === 'object'
  },
  isExecutionOccurrenceSpecification(obj: any): obj is IExecutionOccurrenceSpecification {
    return obj && typeof obj === 'object'
      && 'execution' in obj
  },
  isStateInvariant(obj: any): obj is IStateInvariant {
    return obj && typeof obj === 'object'
      && 'invariant' in obj
  },
  isFinalState(obj: any): obj is IFinalState {
    return obj && typeof obj === 'object'
  },
  isProtocolTransition(obj: any): obj is IProtocolTransition {
    return obj && typeof obj === 'object'
  },
  isAssociationClass(obj: any): obj is IAssociationClass {
    return obj && typeof obj === 'object'
  },
  isComponent(obj: any): obj is IComponent {
    return obj && typeof obj === 'object'
      && 'isIndirectlyInstantiated' in obj
  },
  isComponentRealization(obj: any): obj is IComponentRealization {
    return obj && typeof obj === 'object'
  },
  isActor(obj: any): obj is IActor {
    return obj && typeof obj === 'object'
  },
  isDuration(obj: any): obj is IDuration {
    return obj && typeof obj === 'object'
  },
  isIntervalConstraint(obj: any): obj is IIntervalConstraint {
    return obj && typeof obj === 'object'
  },
  isDurationConstraint(obj: any): obj is IDurationConstraint {
    return obj && typeof obj === 'object'
  },
  isInterval(obj: any): obj is IInterval {
    return obj && typeof obj === 'object'
      && 'max' in obj
      && 'min' in obj
  },
  isDurationInterval(obj: any): obj is IDurationInterval {
    return obj && typeof obj === 'object'
  },
  isDurationObservation(obj: any): obj is IDurationObservation {
    return obj && typeof obj === 'object'
  },
  isLiteralSpecification(obj: any): obj is ILiteralSpecification {
    return obj && typeof obj === 'object'
  },
  isLiteralBoolean(obj: any): obj is ILiteralBoolean {
    return obj && typeof obj === 'object'
      && 'value' in obj
  },
  isLiteralInteger(obj: any): obj is ILiteralInteger {
    return obj && typeof obj === 'object'
      && 'value' in obj
  },
  isLiteralNull(obj: any): obj is ILiteralNull {
    return obj && typeof obj === 'object'
  },
  isLiteralReal(obj: any): obj is ILiteralReal {
    return obj && typeof obj === 'object'
      && 'value' in obj
  },
  isLiteralString(obj: any): obj is ILiteralString {
    return obj && typeof obj === 'object'
  },
  isLiteralUnlimitedNatural(obj: any): obj is ILiteralUnlimitedNatural {
    return obj && typeof obj === 'object'
      && 'value' in obj
  },
  isTimeConstraint(obj: any): obj is ITimeConstraint {
    return obj && typeof obj === 'object'
  },
  isTimeInterval(obj: any): obj is ITimeInterval {
    return obj && typeof obj === 'object'
  },
  isTimeObservation(obj: any): obj is ITimeObservation {
    return obj && typeof obj === 'object'
      && 'event' in obj
      && 'firstEvent' in obj
  }
};

// Serialization Utilities
export const UMLSerializer = {
  /**
   * Converts any UML object to JSON-serializable format
   */
  toJSON(obj: any): any {
    if (obj && typeof obj.toJSONSerialized === 'function') {
      return obj.toJSONSerialized();
    } else if (obj && typeof obj.toJSON === 'function') {
      return obj.toJSON();
    }
    return obj;
  },

  /**
   * Converts JSON back to UML objects
   */
  fromJSON<T>(json: any, className: string): T | null {
    try {
      // Dynamic class lookup would go here
      // For now, return null - implement based on your needs
      return null;
    } catch (error) {
      console.error('Failed to deserialize:', error);
      return null;
    }
  }
};

// Default export with all utilities
export default {
  Factory: UMLFactory,
  Validator: UMLValidator,
  TypeGuards: UMLTypeGuards,
  Serializer: UMLSerializer,
  UML: UML,
  // Version info
  version: '1.0.0',
  generated: '2025-07-08T22:45:28.754933400Z'
};

// Module metadata
declare global {
  namespace UMLMetamodel {
    interface ModuleInfo {
      name: string;
      version: string;
      generated: string;
      classCount: number;
      interfaceCount: number;
    }
  }
}

export const MODULE_INFO: UMLMetamodel.ModuleInfo = {
  name: 'uml-metamodel',
  version: '1.0.0',
  generated: '2025-07-08T22:45:28.756459100Z',
  classCount: 244,
  interfaceCount: 244
};
