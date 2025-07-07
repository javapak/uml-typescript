import { IActivityEdge } from './IActivityEdge';
import { IBehavior } from './IBehavior';
import { IObjectFlow } from './IObjectFlow';
import { ObjectFlow } from './ObjectFlow';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ObjectFlow
 */
export type PartialObjectFlow = Partial<IObjectFlow>;
export type RequiredObjectFlow = Required<IObjectFlow>;
export type ObjectFlowKey = Pick<IObjectFlow, 'name' | 'nameExpression'>;
export type ObjectFlowMetadata = Pick<IObjectFlow, 'ownedComment' | 'visibility'>;
export type ObjectFlowSummary = Pick<IObjectFlow, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ObjectFlowUnion = IObjectFlow | IActivityEdge;
export type ObjectFlowFactory = () => ObjectFlow;
export type ObjectFlowValidator = (instance: IObjectFlow) => ValidationResult;
