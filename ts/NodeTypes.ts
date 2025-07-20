import { IClass } from './IClass';
import { IDeploymentTarget } from './IDeploymentTarget';
import { INode } from './INode';
import { Node } from './Node';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Node
 */
export type PartialNode = Partial<INode>;
export type RequiredNode = Required<INode>;
export type NodeUnion = INode | IClass | IDeploymentTarget;
export type NodeFactory = () => Node;
export type NodeValidator = (instance: INode) => ValidationResult;
