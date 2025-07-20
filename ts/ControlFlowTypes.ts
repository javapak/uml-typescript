import { ControlFlow } from './ControlFlow';
import { IActivityEdge } from './IActivityEdge';
import { IControlFlow } from './IControlFlow';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ControlFlow
 */
export type PartialControlFlow = Partial<IControlFlow>;
export type RequiredControlFlow = Required<IControlFlow>;
export type ControlFlowUnion = IControlFlow | IActivityEdge;
export type ControlFlowFactory = () => ControlFlow;
export type ControlFlowValidator = (instance: IControlFlow) => ValidationResult;
