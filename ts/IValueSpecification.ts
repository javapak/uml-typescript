/**
 * Interface for ValueSpecification
 * 
 * @since UML 2.5
 * @package uml
 * @abstract
 * @extends PackageableElement, TypedElement
 */
import { IDuration } from './IDuration';
import { IExpression } from './IExpression';
import { IInstanceValue } from './IInstanceValue';
import { IInterval } from './IInterval';
import { ILiteralSpecification } from './ILiteralSpecification';
import { IOpaqueExpression } from './IOpaqueExpression';
import { IPackageableElement } from './IPackageableElement';
import { ITimeExpression } from './ITimeExpression';
import { ITypedElement } from './ITypedElement';

export interface IValueSpecification extends IPackageableElement, ITypedElement {
}

// Type aliases for ValueSpecification
export type ValueSpecificationInput = Partial<IValueSpecification>;
export type ValueSpecificationOutput = IValueSpecification;
export type ValueSpecificationUnion = IValueSpecification | IOpaqueExpression | IExpression | IInstanceValue | ITimeExpression | IDuration | IInterval | ILiteralSpecification;
