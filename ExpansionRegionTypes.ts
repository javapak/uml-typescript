import { ExpansionKind } from './ExpansionKind';
import { ExpansionRegion } from './ExpansionRegion';
import { IExpansionNode } from './IExpansionNode';
import { IExpansionRegion } from './IExpansionRegion';
import { IStructuredActivityNode } from './IStructuredActivityNode';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for ExpansionRegion
 */
export type PartialExpansionRegion = Partial<IExpansionRegion>;
export type RequiredExpansionRegion = Required<IExpansionRegion>;
export type ExpansionRegionKey = Pick<IExpansionRegion, 'name' | 'nameExpression'>;
export type ExpansionRegionMetadata = Pick<IExpansionRegion, 'ownedComment' | 'visibility' | 'ownedRule'>;
export type ExpansionRegionSummary = Pick<IExpansionRegion, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ExpansionRegionUnion = IExpansionRegion | IStructuredActivityNode;
export type ExpansionRegionFactory = () => ExpansionRegion;
export type ExpansionRegionValidator = (instance: IExpansionRegion) => ValidationResult;
