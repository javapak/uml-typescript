import { IEvent } from './IEvent';
import { ITimeEvent } from './ITimeEvent';
import { ITimeExpression } from './ITimeExpression';
import { TimeEvent } from './TimeEvent';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for TimeEvent
 */
export type PartialTimeEvent = Partial<ITimeEvent>;
export type RequiredTimeEvent = Required<ITimeEvent>;
export type TimeEventUnion = ITimeEvent | IEvent;
export type TimeEventFactory = () => TimeEvent;
export type TimeEventValidator = (instance: ITimeEvent) => ValidationResult;
