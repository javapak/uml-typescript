/**
 * Interface for FunctionBehavior
 * 
 * @since UML 2.5
 * @package uml
 * @extends OpaqueBehavior
 */
import { IOpaqueBehavior } from './IOpaqueBehavior';

export interface IFunctionBehavior extends IOpaqueBehavior {
}

// Type aliases for FunctionBehavior
export type FunctionBehaviorInput = Partial<IFunctionBehavior>;
export type FunctionBehaviorOutput = IFunctionBehavior;
