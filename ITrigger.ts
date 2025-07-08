/**
 * Interface for Trigger
 * 
 * @since UML 2.5
 * @package uml
 * @extends NamedElement
 */
import { IEvent } from './IEvent';
import { INamedElement } from './INamedElement';
import { IPort } from './IPort';

export interface ITrigger extends INamedElement {
  /**
   * event
   * 
   * @type Event
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  event: string;
  /**
   * port
   * 
   * @type Port
   * @multiplicity [0..*]
   * @relationship cross-reference
   */
  port?: Set<string>;
}

// Type aliases for Trigger
export type TriggerInput = Partial<ITrigger>;
export type TriggerOutput = ITrigger;
