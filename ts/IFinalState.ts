/**
 * Interface for FinalState
 * 
 * @since UML 2.5
 * @package uml
 * @extends State
 */
import { IState } from './IState';

export interface IFinalState extends IState {
}

// Type aliases for FinalState
export type FinalStateInput = Partial<IFinalState>;
export type FinalStateOutput = IFinalState;
