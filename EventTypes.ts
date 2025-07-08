import { Event } from './Event';
import { IEvent } from './IEvent';
import { IPackageableElement } from './IPackageableElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Event
 */
export type PartialEvent = Partial<IEvent>;
export type RequiredEvent = Required<IEvent>;
export type EventUnion = IEvent | IPackageableElement;
export type EventFactory = () => Event;
export type EventValidator = (instance: IEvent) => ValidationResult;
