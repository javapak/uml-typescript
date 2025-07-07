import { Event } from './Event';
import { IEvent } from './IEvent';
import { IPackageableElement } from './IPackageableElement';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Event
 */
export type PartialEvent = Partial<IEvent>;
export type RequiredEvent = Required<IEvent>;
export type EventKey = Pick<IEvent, 'name' | 'nameExpression'>;
export type EventMetadata = Pick<IEvent, 'ownedComment' | 'visibility'>;
export type EventSummary = Pick<IEvent, 'eAnnotations' | 'ownedComment' | 'name'>;
export type EventUnion = IEvent | IPackageableElement;
export type EventFactory = () => Event;
export type EventValidator = (instance: IEvent) => ValidationResult;
