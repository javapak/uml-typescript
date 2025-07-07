/**
 * Interface for TimeEvent
 * 
 * @since UML 2.5
 * @package uml
 * @extends Event
 */
import { IEvent } from './IEvent';
import { ITimeExpression } from './ITimeExpression';
import { TimeExpression } from './TimeExpression';

export interface ITimeEvent extends IEvent {
  /**
   * isRelative
   * 
   * @type Boolean
   * @multiplicity [1..1]
   */
  isRelative: boolean;
  /**
   * when
   * 
   * @type TimeExpression
   * @multiplicity [1..1]
   * @relationship containment
   */
  when: ITimeExpression;
}

// Type aliases for TimeEvent
export type TimeEventInput = Partial<ITimeEvent>;
export type TimeEventOutput = ITimeEvent;
