import { ActivityEdge } from './ActivityEdge';
import { IActivity } from './IActivity';
import { IActivityEdge } from './IActivityEdge';
import { IActivityNode } from './IActivityNode';
import { IActivityPartition } from './IActivityPartition';
import { IInterruptibleActivityRegion } from './IInterruptibleActivityRegion';
import { IRedefinableElement } from './IRedefinableElement';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { IValueSpecification } from './IValueSpecification';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ActivityEdge
 */
export type PartialActivityEdge = Partial<IActivityEdge>;
export type RequiredActivityEdge = Required<IActivityEdge>;
export type ActivityEdgeKey = Pick<IActivityEdge, 'name' | 'nameExpression'>;
export type ActivityEdgeMetadata = Pick<IActivityEdge, 'ownedComment' | 'visibility'>;
export type ActivityEdgeSummary = Pick<IActivityEdge, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ActivityEdgeUnion = IActivityEdge | IRedefinableElement;
export type ActivityEdgeFactory = () => ActivityEdge;
export type ActivityEdgeValidator = (instance: IActivityEdge) => ValidationResult;
