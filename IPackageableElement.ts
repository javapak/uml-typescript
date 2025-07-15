/**
 * Interface for PackageableElement
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends NamedElement, ParameterableElement
 */
import { IConstraint } from './IConstraint';
import { IDependency } from './IDependency';
import { IEvent } from './IEvent';
import { IGeneralizationSet } from './IGeneralizationSet';
import { IInformationFlow } from './IInformationFlow';
import { IInstanceSpecification } from './IInstanceSpecification';
import { INamedElement } from './INamedElement';
import { IObservation } from './IObservation';
import { IPackage } from './IPackage';
import { IParameterableElement } from './IParameterableElement';
import { IType } from './IType';
import { IValueSpecification } from './IValueSpecification';

export interface IPackageableElement extends INamedElement, IParameterableElement {
}

// Type aliases for PackageableElement
export type PackageableElementInput = Partial<IPackageableElement>;
export type PackageableElementOutput = IPackageableElement;
export type PackageableElementUnion = IPackageableElement | IPackage | IType | IValueSpecification | IDependency | IConstraint | IEvent | IInstanceSpecification | IGeneralizationSet | IObservation | IInformationFlow;
