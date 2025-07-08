import { ActivityPartition } from './ActivityPartition';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IElement } from './IElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ActivityPartition
 */
export type PartialActivityPartition = Partial<IActivityPartition>;
export type RequiredActivityPartition = Required<IActivityPartition>;
export type ActivityPartitionUnion = IActivityPartition | IActivityGroup;
export type ActivityPartitionFactory = () => ActivityPartition;
export type ActivityPartitionValidator = (instance: IActivityPartition) => ValidationResult;
