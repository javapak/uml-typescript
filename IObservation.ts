/**
 * Interface for Observation
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends PackageableElement
 */
import { IPackageableElement } from './IPackageableElement';

export interface IObservation extends IPackageableElement {
}

// Type aliases for Observation
export type ObservationInput = Partial<IObservation>;
export type ObservationOutput = IObservation;
export type ObservationUnion = IObservation | IDurationObservation | ITimeObservation;
