/**
 * Interface for PackageableElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement, ParameterableElement
 */
import { INamedElement } from './INamedElement';
import { IParameterableElement } from './IParameterableElement';

export interface IPackageableElement extends INamedElement, IParameterableElement {
}

// Type aliases for PackageableElement
export type PackageableElementInput = Partial<IPackageableElement>;
export type PackageableElementOutput = IPackageableElement;
export type PackageableElementUnion = IPackageableElement | IPackage | IType | IValueSpecification | IDependency | IConstraint | IEvent | IInstanceSpecification | IGeneralizationSet | IObservation | IInformationFlow;
