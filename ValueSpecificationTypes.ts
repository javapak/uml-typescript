import { IPackageableElement } from './IPackageableElement';
import { ITypedElement } from './ITypedElement';
import { IValueSpecification } from './IValueSpecification';
import { ValidationResult } from './ValidationTypes';
import { ValueSpecification } from './ValueSpecification';

/**
 * Utility types for ValueSpecification
 */
export type PartialValueSpecification = Partial<IValueSpecification>;
export type RequiredValueSpecification = Required<IValueSpecification>;
export type ValueSpecificationUnion = IValueSpecification | IPackageableElement | ITypedElement;
export type ValueSpecificationFactory = () => ValueSpecification;
export type ValueSpecificationValidator = (instance: IValueSpecification) => ValidationResult;
