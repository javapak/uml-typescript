import { ControlFlow } from './ControlFlow';
import { IActivityEdge } from './IActivityEdge';
import { IControlFlow } from './IControlFlow';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ControlFlow
 */
export type PartialControlFlow = Partial<IControlFlow>;
export type RequiredControlFlow = Required<IControlFlow>;
export type ControlFlowKey = Pick<IControlFlow, 'name' | 'nameExpression'>;
export type ControlFlowMetadata = Pick<IControlFlow, 'ownedComment' | 'visibility'>;
export type ControlFlowSummary = Pick<IControlFlow, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ControlFlowUnion = IControlFlow | IActivityEdge;
export type ControlFlowFactory = () => ControlFlow;
export type ControlFlowValidator = (instance: IControlFlow) => ValidationResult;
