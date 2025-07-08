/**
 * Interface for Event
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends PackageableElement
 */
import { IPackageableElement } from './IPackageableElement';

export interface IEvent extends IPackageableElement {
}

// Type aliases for Event
export type EventInput = Partial<IEvent>;
export type EventOutput = IEvent;
export type EventUnion = IEvent | IMessageEvent | IChangeEvent | ITimeEvent;
