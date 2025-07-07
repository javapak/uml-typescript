import { IBehavior } from './IBehavior';
import { IConnectionPointReference } from './IConnectionPointReference';
import { IConstraint } from './IConstraint';
import { INamespace } from './INamespace';
import { IPseudostate } from './IPseudostate';
import { IRedefinableElement } from './IRedefinableElement';
import { IRegion } from './IRegion';
import { IState } from './IState';
import { IStateMachine } from './IStateMachine';
import { ITrigger } from './ITrigger';
import { IVertex } from './IVertex';
import { State } from './State';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for State
 */
export type PartialState = Partial<IState>;
export type RequiredState = Required<IState>;
export type StateKey = Pick<IState, 'name' | 'nameExpression'>;
export type StateMetadata = Pick<IState, 'ownedComment' | 'visibility' | 'ownedRule'>;
export type StateSummary = Pick<IState, 'eAnnotations' | 'ownedComment' | 'name'>;
export type StateUnion = IState | INamespace | IRedefinableElement | IVertex;
export type StateFactory = () => State;
export type StateValidator = (instance: IState) => ValidationResult;
