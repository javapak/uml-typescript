import { ChangeEvent } from './ChangeEvent';
import { IChangeEvent } from './IChangeEvent';
import { IEvent } from './IEvent';
import { IValueSpecification } from './IValueSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ChangeEvent
 */
export type PartialChangeEvent = Partial<IChangeEvent>;
export type RequiredChangeEvent = Required<IChangeEvent>;
export type ChangeEventKey = Pick<IChangeEvent, 'name' | 'nameExpression'>;
export type ChangeEventMetadata = Pick<IChangeEvent, 'ownedComment' | 'visibility'>;
export type ChangeEventSummary = Pick<IChangeEvent, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ChangeEventUnion = IChangeEvent | IEvent;
export type ChangeEventFactory = () => ChangeEvent;
export type ChangeEventValidator = (instance: IChangeEvent) => ValidationResult;
