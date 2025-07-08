import { IActivityNode } from './IActivityNode';
import { IBehavior } from './IBehavior';
import { IObjectNode } from './IObjectNode';
import { IState } from './IState';
import { ITypedElement } from './ITypedElement';
import { IValueSpecification } from './IValueSpecification';
import { ObjectNode } from './ObjectNode';
import { ObjectNodeOrderingKind } from './ObjectNodeOrderingKind';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ObjectNode
 */
export type PartialObjectNode = Partial<IObjectNode>;
export type RequiredObjectNode = Required<IObjectNode>;
export type ObjectNodeUnion = IObjectNode | IActivityNode | ITypedElement;
export type ObjectNodeFactory = () => ObjectNode;
export type ObjectNodeValidator = (instance: IObjectNode) => ValidationResult;
