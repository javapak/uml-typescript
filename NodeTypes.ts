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
export type NodeKey = Pick<INode, 'name' | 'nameExpression'>;
export type NodeMetadata = Pick<INode, 'ownedComment' | 'visibility' | 'ownedRule' | 'ownedTemplateSignature' | 'ownedUseCase' | 'ownedAttribute' | 'ownedConnector' | 'ownedBehavior' | 'ownedOperation' | 'ownedReception'>;
export type NodeSummary = Pick<INode, 'eAnnotations' | 'ownedComment' | 'name'>;
export type NodeUnion = INode | IClass | IDeploymentTarget;
export type NodeFactory = () => Node;
export type NodeValidator = (instance: INode) => ValidationResult;
