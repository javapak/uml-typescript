/**
 * Interface for Reception
 * 
 * @since UML 2.5
 * @package uml
 * @extends BehavioralFeature
 */
import { IBehavioralFeature } from './IBehavioralFeature';
import { ISignal } from './ISignal';

export interface IReception extends IBehavioralFeature {
  /**
   * signal
   * 
   * @type Signal
   * @multiplicity [1..1]
   * @relationship cross-reference
   */
  signal: ISignal | string;
}

// Type aliases for Reception
export type ReceptionInput = Partial<IReception>;
export type ReceptionOutput = IReception;
