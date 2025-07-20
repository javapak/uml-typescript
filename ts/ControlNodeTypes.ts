import { ControlNode } from './ControlNode';
import { IActivityNode } from './IActivityNode';
import { IControlNode } from './IControlNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ControlNode
 */
export type PartialControlNode = Partial<IControlNode>;
export type RequiredControlNode = Required<IControlNode>;
export type ControlNodeUnion = IControlNode | IActivityNode;
export type ControlNodeFactory = () => ControlNode;
export type ControlNodeValidator = (instance: IControlNode) => ValidationResult;
