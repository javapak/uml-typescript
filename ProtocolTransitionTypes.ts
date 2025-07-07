import { IConstraint } from './IConstraint';
import { IProtocolTransition } from './IProtocolTransition';
import { ITransition } from './ITransition';
import { ProtocolTransition } from './ProtocolTransition';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ProtocolTransition
 */
export type PartialProtocolTransition = Partial<IProtocolTransition>;
export type RequiredProtocolTransition = Required<IProtocolTransition>;
export type ProtocolTransitionKey = Pick<IProtocolTransition, 'name' | 'nameExpression'>;
export type ProtocolTransitionMetadata = Pick<IProtocolTransition, 'ownedComment' | 'visibility' | 'ownedRule'>;
export type ProtocolTransitionSummary = Pick<IProtocolTransition, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ProtocolTransitionUnion = IProtocolTransition | ITransition;
export type ProtocolTransitionFactory = () => ProtocolTransition;
export type ProtocolTransitionValidator = (instance: IProtocolTransition) => ValidationResult;
