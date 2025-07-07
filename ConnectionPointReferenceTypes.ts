import { ConnectionPointReference } from './ConnectionPointReference';
import { IConnectionPointReference } from './IConnectionPointReference';
import { IPseudostate } from './IPseudostate';
import { IState } from './IState';
import { IVertex } from './IVertex';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ConnectionPointReference
 */
export type PartialConnectionPointReference = Partial<IConnectionPointReference>;
export type RequiredConnectionPointReference = Required<IConnectionPointReference>;
export type ConnectionPointReferenceKey = Pick<IConnectionPointReference, 'name' | 'nameExpression'>;
export type ConnectionPointReferenceMetadata = Pick<IConnectionPointReference, 'ownedComment' | 'visibility'>;
export type ConnectionPointReferenceSummary = Pick<IConnectionPointReference, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ConnectionPointReferenceUnion = IConnectionPointReference | IVertex;
export type ConnectionPointReferenceFactory = () => ConnectionPointReference;
export type ConnectionPointReferenceValidator = (instance: IConnectionPointReference) => ValidationResult;
