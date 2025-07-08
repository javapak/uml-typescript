import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { InterruptibleActivityRegion } from './InterruptibleActivityRegion';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for InterruptibleActivityRegion
 */
export type PartialInterruptibleActivityRegion = Partial<IInterruptibleActivityRegion>;
export type RequiredInterruptibleActivityRegion = Required<IInterruptibleActivityRegion>;
export type InterruptibleActivityRegionUnion = IInterruptibleActivityRegion | IActivityGroup;
export type InterruptibleActivityRegionFactory = () => InterruptibleActivityRegion;
export type InterruptibleActivityRegionValidator = (instance: IInterruptibleActivityRegion) => ValidationResult;
