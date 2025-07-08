import { IEvent } from './IEvent';
import { INamedElement } from './INamedElement';
import { IPort } from './IPort';
import { ITrigger } from './ITrigger';
import { Trigger } from './Trigger';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Trigger
 */
export type PartialTrigger = Partial<ITrigger>;
export type RequiredTrigger = Required<ITrigger>;
export type TriggerUnion = ITrigger | INamedElement;
export type TriggerFactory = () => Trigger;
export type TriggerValidator = (instance: ITrigger) => ValidationResult;
