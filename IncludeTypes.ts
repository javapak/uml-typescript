import { IDirectedRelationship } from './IDirectedRelationship';
import { IInclude } from './IInclude';
import { INamedElement } from './INamedElement';
import { IUseCase } from './IUseCase';
import { Include } from './Include';
import { ValidationResult } from './ValidationTypes';

/**
 * Utility types for Include
 */
export type PartialInclude = Partial<IInclude>;
export type RequiredInclude = Required<IInclude>;
export type IncludeKey = Pick<IInclude, 'name' | 'nameExpression'>;
export type IncludeMetadata = Pick<IInclude, 'ownedComment' | 'visibility'>;
export type IncludeSummary = Pick<IInclude, 'eAnnotations' | 'ownedComment' | 'name'>;
export type IncludeUnion = IInclude | INamedElement | IDirectedRelationship;
export type IncludeFactory = () => Include;
export type IncludeValidator = (instance: IInclude) => ValidationResult;
