/**
 * Interface for ControlFlow
 * 
 * @since UML 2.5
 * @package uml
 * @extends ActivityEdge
 */
import { IActivityEdge } from './IActivityEdge';

export interface IControlFlow extends IActivityEdge {
}

// Type aliases for ControlFlow
export type ControlFlowInput = Partial<IControlFlow>;
export type ControlFlowOutput = IControlFlow;
