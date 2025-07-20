import { Clause } from './Clause';
import { IClause } from './IClause';
import { IElement } from './IElement';
import { IExecutableNode } from './IExecutableNode';
import { IOutputPin } from './IOutputPin';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Clause
 */
export type PartialClause = Partial<IClause>;
export type RequiredClause = Required<IClause>;
export type ClauseKey = Pick<IClause, 'decider'>;
export type ClauseUnion = IClause | IElement;
export type ClauseFactory = () => Clause;
export type ClauseValidator = (instance: IClause) => ValidationResult;
