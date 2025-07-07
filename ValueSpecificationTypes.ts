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
export type ValueSpecificationKey = Pick<IValueSpecification, 'name' | 'nameExpression'>;
export type ValueSpecificationMetadata = Pick<IValueSpecification, 'ownedComment' | 'visibility'>;
export type ValueSpecificationSummary = Pick<IValueSpecification, 'eAnnotations' | 'ownedComment' | 'name'>;
export type ValueSpecificationUnion = IValueSpecification | IPackageableElement | ITypedElement;
export type ValueSpecificationFactory = () => ValueSpecification;
export type ValueSpecificationValidator = (instance: IValueSpecification) => ValidationResult;
