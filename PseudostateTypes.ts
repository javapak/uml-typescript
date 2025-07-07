import { IPseudostate } from './IPseudostate';
import { IState } from './IState';
import { IStateMachine } from './IStateMachine';
import { IVertex } from './IVertex';
import { Pseudostate } from './Pseudostate';
import { PseudostateKind } from './PseudostateKind';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Pseudostate
 */
export type PartialPseudostate = Partial<IPseudostate>;
export type RequiredPseudostate = Required<IPseudostate>;
export type PseudostateKey = Pick<IPseudostate, 'name' | 'nameExpression'>;
export type PseudostateMetadata = Pick<IPseudostate, 'ownedComment' | 'visibility'>;
export type PseudostateSummary = Pick<IPseudostate, 'eAnnotations' | 'ownedComment' | 'name'>;
export type PseudostateUnion = IPseudostate | IVertex;
export type PseudostateFactory = () => Pseudostate;
export type PseudostateValidator = (instance: IPseudostate) => ValidationResult;
