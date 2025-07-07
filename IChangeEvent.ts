/**
 * Interface for ChangeEvent
 * 
 * @since UML 2.5
 * @package uml
 * @extends Event
 */
import { IEvent } from './IEvent';
import { IValueSpecification } from './IValueSpecification';
import { ValueSpecification } from './ValueSpecification';

export interface IChangeEvent extends IEvent {
  /**
   * changeExpression
   * 
   * @type ValueSpecification
   * @multiplicity [1..1]
   * @relationship containment
   */
  changeExpression: IValueSpecification;
}

// Type aliases for ChangeEvent
export type ChangeEventInput = Partial<IChangeEvent>;
export type ChangeEventOutput = IChangeEvent;
