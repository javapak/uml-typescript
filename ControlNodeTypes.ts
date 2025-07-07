import { ControlNode } from './ControlNode';
import { IActivityNode } from './IActivityNode';
import { IControlNode } from './IControlNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ControlNode
 */
export type PartialControlNode = Partial<IControlNode>;
export type RequiredControlNode = Required<IControlNode>;
export type ControlNodeKey = Pick<IControlNode, 'name' | 'nameExpression'>;
export type ControlNodeMetadata = Pick<IControlNode, 'ownedComment' | 'visibility'>;
export type ControlNodeSummary = Pick<IControlNode, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ControlNodeUnion = IControlNode | IActivityNode;
export type ControlNodeFactory = () => ControlNode;
export type ControlNodeValidator = (instance: IControlNode) => ValidationResult;
