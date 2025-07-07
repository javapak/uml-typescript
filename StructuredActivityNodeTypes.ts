import { IAction } from './IAction';
import { IActivityEdge } from './IActivityEdge';
import { IActivityGroup } from './IActivityGroup';
import { IActivityNode } from './IActivityNode';
import { IInputPin } from './IInputPin';
import { INamespace } from './INamespace';
import { IOutputPin } from './IOutputPin';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IVariable } from './IVariable';
import { StructuredActivityNode } from './StructuredActivityNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for StructuredActivityNode
 */
export type PartialStructuredActivityNode = Partial<IStructuredActivityNode>;
export type RequiredStructuredActivityNode = Required<IStructuredActivityNode>;
export type StructuredActivityNodeKey = Pick<IStructuredActivityNode, 'name' | 'nameExpression'>;
export type StructuredActivityNodeMetadata = Pick<IStructuredActivityNode, 'ownedComment' | 'visibility' | 'ownedRule'>;
export type StructuredActivityNodeSummary = Pick<IStructuredActivityNode, 'eAnnotations' | 'ownedComment' | 'name'>;
export type StructuredActivityNodeUnion = IStructuredActivityNode | IAction | INamespace | IActivityGroup;
export type StructuredActivityNodeFactory = () => StructuredActivityNode;
export type StructuredActivityNodeValidator = (instance: IStructuredActivityNode) => ValidationResult;
