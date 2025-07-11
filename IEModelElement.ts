/**
 * Interface for EModelElement
 * 
 * @since UML 2.5
 * @package ecore
 * @abstract
 */
import { EAnnotation } from './EAnnotation';
import { IEAnnotation } from './IEAnnotation';

export interface IEModelElement {
}

// Type aliases for EModelElement
export type EModelElementInput = Partial<IEModelElement>;
export type EModelElementOutput = IEModelElement;
export type EModelElementUnion = IEModelElement | IEAnnotation | IEFactory | IENamedElement;
