import { INamedElement } from './INamedElement';
import { IRegion } from './IRegion';
import { IVertex } from './IVertex';
import { ValidationResult } from './ValidationTypes';
import { Vertex } from './Vertex';

/**
 * Utility types for Vertex
 */
export type PartialVertex = Partial<IVertex>;
export type RequiredVertex = Required<IVertex>;
export type VertexUnion = IVertex | INamedElement;
export type VertexFactory = () => Vertex;
export type VertexValidator = (instance: IVertex) => ValidationResult;
