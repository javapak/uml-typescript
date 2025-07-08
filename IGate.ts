/**
 * Interface for Gate
 * 
 * @since UML 2.5
 * @package uml
 * @extends MessageEnd
 */
import { IMessageEnd } from './IMessageEnd';

export interface IGate extends IMessageEnd {
}

// Type aliases for Gate
export type GateInput = Partial<IGate>;
export type GateOutput = IGate;
