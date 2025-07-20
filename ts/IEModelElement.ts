/**
 * Interface for EModelElement
 * 
 * @since UML 2.5
 * @package ecore
 * @abstract
 */


export interface IEModelElement {
}

// Type aliases for EModelElement
export type EModelElementInput = Partial<IEModelElement>;
export type EModelElementOutput = IEModelElement;
export type EModelElementUnion = IEModelElement;