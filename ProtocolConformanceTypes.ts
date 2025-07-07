import { IDirectedRelationship } from './IDirectedRelationship';
import { IProtocolConformance } from './IProtocolConformance';
import { IProtocolStateMachine } from './IProtocolStateMachine';
import { ProtocolConformance } from './ProtocolConformance';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ProtocolConformance
 */
export type PartialProtocolConformance = Partial<IProtocolConformance>;
export type RequiredProtocolConformance = Required<IProtocolConformance>;
export type ProtocolConformanceMetadata = Pick<IProtocolConformance, 'ownedComment'>;
export type ProtocolConformanceSummary = Pick<IProtocolConformance, 'eAnnotations' | 'ownedComment' | 'generalMachine'>;
export type ProtocolConformanceUnion = IProtocolConformance | IDirectedRelationship;
export type ProtocolConformanceFactory = () => ProtocolConformance;
export type ProtocolConformanceValidator = (instance: IProtocolConformance) => ValidationResult;
