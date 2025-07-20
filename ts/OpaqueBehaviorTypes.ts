import { IBehavior } from './IBehavior';
import { IOpaqueBehavior } from './IOpaqueBehavior';
import { OpaqueBehavior } from './OpaqueBehavior';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for OpaqueBehavior
 */
export type PartialOpaqueBehavior = Partial<IOpaqueBehavior>;
export type RequiredOpaqueBehavior = Required<IOpaqueBehavior>;
export type OpaqueBehaviorUnion = IOpaqueBehavior | IBehavior;
export type OpaqueBehaviorFactory = () => OpaqueBehavior;
export type OpaqueBehaviorValidator = (instance: IOpaqueBehavior) => ValidationResult;
