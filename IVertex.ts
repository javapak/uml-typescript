/**
 * Interface for Vertex
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement
 */
import { INamedElement } from './INamedElement';
import { IRegion } from './IRegion';

export interface IVertex extends INamedElement {
  /**
   * container
   * 
   * @type Region
   * @multiplicity [0..1]
   * @relationship cross-reference
   * @opposite subvertex
   */
  container?: string;
}

// Type aliases for Vertex
export type VertexInput = Partial<IVertex>;
export type VertexOutput = IVertex;
export type VertexUnion = IVertex | IPseudostate | IState | IConnectionPointReference;
