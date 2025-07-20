import { DecisionNode } from './DecisionNode';
import { IBehavior } from './IBehavior';
import { IControlNode } from './IControlNode';
import { IDecisionNode } from './IDecisionNode';
import { IObjectFlow } from './IObjectFlow';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for DecisionNode
 */
export type PartialDecisionNode = Partial<IDecisionNode>;
export type RequiredDecisionNode = Required<IDecisionNode>;
export type DecisionNodeUnion = IDecisionNode | IControlNode;
export type DecisionNodeFactory = () => DecisionNode;
export type DecisionNodeValidator = (instance: IDecisionNode) => ValidationResult;
