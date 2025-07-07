import { IProtocolConformance } from './IProtocolConformance';
import { IProtocolStateMachine } from './IProtocolStateMachine';
import { IStateMachine } from './IStateMachine';
import { ProtocolStateMachine } from './ProtocolStateMachine';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ProtocolStateMachine
 */
export type PartialProtocolStateMachine = Partial<IProtocolStateMachine>;
export type RequiredProtocolStateMachine = Required<IProtocolStateMachine>;
export type ProtocolStateMachineKey = Pick<IProtocolStateMachine, 'name' | 'nameExpression'>;
export type ProtocolStateMachineMetadata = Pick<IProtocolStateMachine, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedAttribute' | 'ownedConnector' | 'ownedBehavior' | 'ownedOperation' | 'ownedReception' | 'ownedParameter' | 'ownedParameterSet'>;
export type ProtocolStateMachineSummary = Pick<IProtocolStateMachine, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ProtocolStateMachineUnion = IProtocolStateMachine | IStateMachine;
export type ProtocolStateMachineFactory = () => ProtocolStateMachine;
export type ProtocolStateMachineValidator = (instance: IProtocolStateMachine) => ValidationResult;
