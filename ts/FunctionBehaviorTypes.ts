import { FunctionBehavior } from './FunctionBehavior';
import { IFunctionBehavior } from './IFunctionBehavior';
import { IOpaqueBehavior } from './IOpaqueBehavior';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for FunctionBehavior
 */
export type PartialFunctionBehavior = Partial<IFunctionBehavior>;
export type RequiredFunctionBehavior = Required<IFunctionBehavior>;
export type FunctionBehaviorUnion = IFunctionBehavior | IOpaqueBehavior;
export type FunctionBehaviorFactory = () => FunctionBehavior;
export type FunctionBehaviorValidator = (instance: IFunctionBehavior) => ValidationResult;
