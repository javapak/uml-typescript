/**
 * Interface for Type
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends PackageableElement
 */
import { IPackageableElement } from './IPackageableElement';

export interface IType extends IPackageableElement {
}

// Type aliases for Type
export type TypeInput = Partial<IType>;
export type TypeOutput = IType;
export type TypeUnion = IType | IClassifier;
