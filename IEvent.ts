/**
 * Interface for Event
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends PackageableElement
 */
import { IChangeEvent } from './IChangeEvent';
import { IMessageEvent } from './IMessageEvent';
import { IPackageableElement } from './IPackageableElement';
import { ITimeEvent } from './ITimeEvent';

export interface IEvent extends IPackageableElement {
}

// Type aliases for Event
export type EventInput = Partial<IEvent>;
export type EventOutput = IEvent;
export type EventUnion = IEvent | IMessageEvent | IChangeEvent | ITimeEvent;
