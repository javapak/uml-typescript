import { Activity } from './Activity';
import { IActivity } from './IActivity';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IBehavior } from './IBehavior';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IVariable } from './IVariable';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Activity
 */
export type PartialActivity = Partial<IActivity>;
export type RequiredActivity = Required<IActivity>;
export type ActivityUnion = IActivity | IBehavior;
export type ActivityFactory = () => Activity;
export type ActivityValidator = (instance: IActivity) => ValidationResult;
